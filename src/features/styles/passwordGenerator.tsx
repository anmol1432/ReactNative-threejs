 import { StyleSheet } from "react-native";
 
 const styles = StyleSheet.create({
    appContainer: {},
    formContainer: {},
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#f2f5f3ff',
        marginBottom: 4,
    },
    heading:{
        color: '#f2f5f3ff',
        fontSize: 16,
        width: 160
    },
    inputWrapper: {
        flex:1,
        flexDirection: 'row',
        gap: 10,
        marginVertical: 5,
    },
    formactions: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 10
    },
    btn: {
        height: 40,
        width: 170,
        paddingHorizontal: 10,
        paddingVertical: 5,
        backgroundColor: '#386d80ff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        marginVertical: 10
    },
    
    btnText: {
        color: '#ffff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    inputColumn: {
        flex: 1,
        flexDirection: 'column',
    },
    input: {
        height: 40,
        width: 170,
        borderWidth: 1,
        padding: 10,
        marginVertical: 15,
        backgroundColor: '#ffff',
    },
    errorText: { 
        fontSize: 12, 
        color: '#ff0d10' 
    },
    result: {
        marginVertical: 20,
        borderColor: '#3ffba3ff',
        borderRadius: 10,
        borderWidth: 1,
        flex:1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    resultText: {
        color: '#f2f5f3ff',
        fontSize: 18,
        fontWeight: 'bold',
        padding: 10
    },
    copyBtn: {
        backgroundColor: '#3ffba3ff',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        padding: 10,
    }
})

export default styles;