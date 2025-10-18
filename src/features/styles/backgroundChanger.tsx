import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#f2f5f3ff',
        marginBottom: 4,
    },
    btn: {
        height: 40,
        width: 170,
        paddingHorizontal: 10,
        paddingVertical: 5,
        backgroundColor: '#6e97a7ff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        marginVertical: 10,
    },
    btnText: {
        color: '#ffff',
        fontSize: 13,
        fontWeight: 'bold',
    },
    triangle: {
        width: 0,
        height: 0,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderLeftWidth: 50, // Adjust for desired triangle base width
        borderRightWidth: 50, // Adjust for desired triangle base width
        borderTopWidth: 100, // Adjust for desired triangle height
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
    },
    circle: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: '#ff6347'
    }
})

export default styles;