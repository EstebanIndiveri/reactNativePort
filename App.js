/* eslint-disable prettier/prettier */
import React,{useState} from 'react';
import { Text,StyleSheet,View,FlatList} from 'react-native';


const App = () => {
  const [citas, setCitas] = useState([
    {id:"1", paciente:"hook",propietario:"juan",sintomas:"no come"},
    {id:"2", paciente:"redux",propietario:"itzel",sintomas:"no duerme"},
    {id:"3", paciente:"native",propietario:"jose",sintomas:"no ladra"},
  ]);
  console.log('desde consola');
  return (
    <>
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Administrador de citas</Text>
      <FlatList
        data={citas}
        renderItem={({item})=>(
          <View>
            <Text>{item.paciente}</Text>
          </View>
        )}
        keyExtractor={cita=>cita.id}
      />
      {/* {citas.map(cita=>(
        <View key={cita.id}>
          <Text>{cita.paciente}</Text>
        </View>
      ))} */}
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
