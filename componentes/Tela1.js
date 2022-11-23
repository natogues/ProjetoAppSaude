import React from 'react';
import {Text, View} from 'react-native';


const Tela1 = (props) => {

        return(
            <View>
                <Text>{props.titulo} e ganhou o campeonato mundial {props.vezes} vezes.</Text>
            </View>
        )

}

export default Tela1