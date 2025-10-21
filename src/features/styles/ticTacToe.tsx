 import { StyleSheet } from "react-native";
 
const styles = StyleSheet.create({
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#f2f5f3ff',
        marginBottom: 4,
    },
    heading: {
        color: '#f2f5f3ff',
        fontSize: 16,
        width: 160
    },
    btn: {
        height: 40,
        paddingHorizontal: 10,
        paddingVertical: 5,
        backgroundColor: '#59beb4ff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
    },
    btnText: {
        color: '#ffff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    result: {
        marginVertical: 20,
        borderColor: '#3ffba3ff',
        borderRadius: 10,
        borderWidth: 1,
        flex: 1,
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
    },
    board: {
        marginTop: 20,
        width: 300,
        backgroundColor: '#222831ff',
        flexDirection: 'row',
        flexWrap: 'wrap',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
    },
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 10
    }
})

export default styles;