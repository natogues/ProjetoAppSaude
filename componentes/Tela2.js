import React from 'react';
import {Text, View,StyleSheet} from 'react-native';


const Tela2 = () => {

        return(           
            <View style={styles.bordaMatheus}>
                <Text style={styles.Matheus}>Diga isso para o teimoso MATHEUS!!!</Text>
            </View>
              
           )
        
                } 

const styles = StyleSheet.create({
Matheus: {
    fontSize: 19,
    color: '#ffcc00',
},
bordaMatheus: {
    padding:10,
    margin: 10,
    borderColor: 'blue',
    borderWidth: 1,
}


 })               

                
                
export default Tela2