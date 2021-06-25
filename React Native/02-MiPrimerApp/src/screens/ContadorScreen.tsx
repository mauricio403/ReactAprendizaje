import React, {useState} from 'react'
import { View, Text, TouchableOpacity,  } from 'react-native'

import { Button, Paragraph, Dialog, Portal } from 'react-native-paper';

const ContadorScreen = () => {

    const [contador, setContador] = useState(10);




    return (
        <View style ={{
            flex: 1,
           justifyContent: 'center',

        }}>
            <Text 
            style ={{
                textAlign : 'center',
                fontSize:40,
               
            }}
            > 
                 Contador : {contador}
            </Text>

            <TouchableOpacity
              onPress={() => setContador(contador + 1)}
              

            >
                <View >
                    <Text> +1 </Text>
                </View>
            </TouchableOpacity>


    
             
        </View>
        
    )
}

export default ContadorScreen
