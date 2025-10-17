import { StyleSheet, ScrollView, Text, View, TouchableOpacity,TextInput } from 'react-native'
import React, { useState } from 'react'
import * as Yup from 'yup'
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { Formik } from 'formik';
import { SafeAreaView } from 'react-native-safe-area-context';
import Clipboard from '@react-native-clipboard/clipboard';
import styles from '../styles/passwordGenerator';

const PasswordSchema = Yup.object().shape({
  passwordLength: Yup.number().min(4,'Should be min of 4 character')
  .max(16,"Should be max of 16 character")
  .required("password is required")
});

const PassowrdGenerator = () => {
    const [password, setPassword] = useState('');
    const [isPassGenerated, setIsPassGenerated] = useState(false);
    const [lowerCase, setLowerCase] = useState(true);
    const [upperCase, setUpperCase] = useState(false);
    const [numbers, setNumbers] = useState(false);
    const [symbols, setSymbols] = useState(false);

    const generatedPasswordString = (passwordLength:number): string => {
        let characterList = '';
        const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
        const specialChars = '!@#$%^&*()-_=+[]{};:\'",.<>/?\\|`~';
        const digitChars = '0123456789';

        if (upperCase) {
            characterList += upperCaseChars;
        }
        if (lowerCase) {
            characterList += lowerCaseChars;
        }
        if (symbols) {
            characterList += specialChars;
        }
        if (numbers) {
            characterList += digitChars;
        }

        const passwordResult = createPassword(characterList, passwordLength);
        setPassword(passwordResult);
        setIsPassGenerated(true);
        return passwordResult;
    }

    const createPassword = (caharacters:string, passwordLength: number): string => {
        let result = '';
        for (let i=0; i < passwordLength; i++){
            const characterIndex = Math.round(Math.random() * caharacters.length);
            result += caharacters.charAt(characterIndex);
        }
        return result;
    }

    const resetPasswordState = () => {
       setLowerCase(true);
       setNumbers(false);
       setPassword('');
       setUpperCase(false);
       setIsPassGenerated(false);
       setSymbols(false);
       clearTextFromClipboard();
    }
    
    const copyTextToClipboard = (text:string) => {
        Clipboard.setString(text);
    };

    const clearTextFromClipboard = async () => {
       Clipboard.setString('');
    };

  return (
    <ScrollView keyboardShouldPersistTaps="handled">
        <SafeAreaView style={styles.appContainer}>
            <View style={styles.formContainer}>
                <Text style={styles.title}>Password Generator</Text>
                  <Formik
                      initialValues={{ passwordLength: '' }}
                      validationSchema={PasswordSchema}
                      onSubmit={(values) => {
                         generatedPasswordString(+values.passwordLength)
                      }}
                  >
                      {({
                          values,
                          errors,
                          touched,
                          handleChange,
                          handleSubmit,
                          isSubmitting,
                          isValid,
                          handleReset
                          /* and other goodies */
                      }) => (
                        <>
                            <View style={styles.inputWrapper}>
                                    <Text style={styles.heading}>Password length</Text>
                                        <TextInput
                                        style={styles.input}
                                        value={values.passwordLength}
                                        onChangeText={handleChange('passwordLength')}
                                        placeholder="Password Length (4-16)"
                                        ></TextInput>
                            </View>
                            {touched.passwordLength && errors.passwordLength &&(
                                <Text style={styles.errorText}>{errors.passwordLength}</Text>
                            )}
                            <View style={styles.inputWrapper}>
                                <Text style={styles.heading}>Include numerics</Text>
                                 <BouncyCheckbox
                                    isChecked={numbers}
                                    onPress={() => setNumbers(!numbers)}
                                    fillColor="#6267ffff"
                                 />
                            </View>
                            <View style={styles.inputWrapper}>
                                 <Text style={styles.heading}>Include lowerCase</Text>
                                 <BouncyCheckbox
                                    isChecked={lowerCase}
                                    onPress={() => setLowerCase(!lowerCase)}
                                    fillColor="#5bb3fbff"
                                 />
                            </View>
                            <View style={styles.inputWrapper}>
                                 <Text style={styles.heading}>Include upperCase</Text>
                                 <BouncyCheckbox
                                    isChecked={upperCase}
                                    onPress={() => setUpperCase(!upperCase)}
                                    fillColor="#ff6272ff"
                                 />
                            </View>
                            <View style={styles.inputWrapper}>
                                <Text selectable={true} style={styles.heading}>Include symbols</Text>
                                 <BouncyCheckbox
                                    isChecked={symbols}
                                    onPress={() => setSymbols(!symbols)}
                                    fillColor="#ffd062ff"
                                 />
                            </View>

                              <View style={styles.formactions}>

                                  <TouchableOpacity
                                      disabled={!isValid}
                                      onPress={handleSubmit}
                                      style={{ ...styles.btn, backgroundColor: '#5bb3fbff' }}>
                                      <Text style={styles.btnText}>Generate Password</Text>
                                  </TouchableOpacity>

                                  <TouchableOpacity
                                      onPress={() => {
                                          handleReset();
                                          resetPasswordState();
                                      }}
                                      style={{ ...styles.btn, backgroundColor: '#f93e79ff' }}>
                                      <Text style={styles.btnText}>Reset Password</Text>
                                  </TouchableOpacity>

                              </View>
                        </>
                      )}
                  </Formik>
                  <View style={styles.result}>
                     <Text style={styles.resultText}>{password}</Text>
                      <TouchableOpacity 
                        disabled={!isPassGenerated}
                        onPress={()=>{
                             copyTextToClipboard(password);
                        }}
                         style={styles.copyBtn}>
                        <Text style={styles.btnText}>📎📋Copy/Paste</Text>
                    </TouchableOpacity>
                  </View>
            </View>
        </SafeAreaView>
    </ScrollView>
  );
}

export default PassowrdGenerator;