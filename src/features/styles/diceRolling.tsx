import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    tinyLogo: {
        // transform: [{ scale: 0.1 }],
    },
    container: {
        overflow: 'hidden',
        width: 100,
        height: 100,
        backgroundColor: '#ffff',
        
    },
      btn: {
        height: 40,
        width: 170,
        paddingHorizontal: 10,
        paddingVertical: 5,
        backgroundColor: '#89d8f5ff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        marginVertical: 10
    },
    
    btnText: {
        color: '#ffff',
        fontSize: 16,
        fontWeight: 'bold',
    }
})

export default styles;