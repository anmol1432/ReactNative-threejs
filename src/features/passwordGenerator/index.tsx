import { StyleSheet, ScrollView, Text, View } from 'react-native'
import React, { useState } from 'react'
import * as Yup from 'yup'
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { Formik } from 'formik';
import { SafeAreaView } from 'react-native-safe-area-context';

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
        for (let i=0; i < password.length; i++){
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
    }

  return (
    <ScrollView keyboardShouldPersistTaps="handled">
        <SafeAreaView style={styles.appContainer}>
            <View style={styles.formContainer}>
                <Text style={styles.title}>Password Generator</Text>
                  <Formik
                      initialValues={{ passwordLength: '' }}
                      validationSchema={PasswordSchema}
                      onSubmit={(values) => {
                        console.log(values)
                         generatedPasswordString(+values.passwordLength)
                      }}
                  >
                      {({
                          values,
                          errors,
                          touched,
                          handleChange,
                          handleBlur,
                          handleSubmit,
                          isSubmitting,
                          /* and other goodies */
                      }) => (
                          <form onSubmit={handleSubmit}>
                              <input
                                  type="email"
                                  name="email"
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values.email}
                              />
                              {errors.email && touched.email && errors.email}
                              <input
                                  type="password"
                                  name="password"
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values.password}
                              />
                              {errors.password && touched.password && errors.password}
                              <button type="submit" disabled={isSubmitting}>
                                  Submit
                              </button>
                          </form>
                      )}
                  </Formik>
            </View>
        </SafeAreaView>
    </ScrollView>
  );
}

export default PassowrdGenerator

const styles = StyleSheet.create({
    appContainer: {},
    formContainer: {},
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#103613ff',
        marginBottom: 4,
    }
})