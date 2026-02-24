import {View, Text, Image, StyleSheet} from 'react-native'

export default function Header() {
    return (
        <View style={styles.container }>
            <Image source={require('../../assets/logotipo.png')} style={styles.logotipo}/>
            <Text style={styles.logotipotext}>Lego?</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#000",
        width: "100%",
        height: 100,
        marginBottom: 16,
        alignItems: "center",
        flexDirection: "row",
        paddingHorizontal: 20,
        gap: 12
    },
    logotipotext: {
        color: '#fff'
    },
    logotipo: {
        width: 50,
        height: 50,
        borderRadius: "100%"
    
    }
})