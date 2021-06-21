import React from 'react'
import { View, Text } from 'react-native'

const HolamundoScreen = () => {
    return (
        <View style={{
        flex:1,
        justifyContent: 'center',
        }}>
        <Text style={{
            fontSize: 45,
            textAlign: 'center'
        }}>Aprende una vez, escribelo donde quieras!</Text>
        </View>
    )
}

export default HolamundoScreen
