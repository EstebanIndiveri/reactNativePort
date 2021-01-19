/* eslint-disable prettier/prettier */
import React from 'react';
import { Text,StyleSheet,View} from 'react-native';


const App = () => {
  console.log('desde consola');
  return (
    <>
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Administrador de citas</Text>
    </View>

    </>
  );
};

const styles=StyleSheet.create({
  titulo:{
    fontSize:24,
    textAlign:'center',
    marginTop:40,
    fontWeight:'bold',
    color:"#FFF"
  },
  contenedor:{
    backgroundColor:'#AA076B',
    flex:1
  }

});


export default App;
