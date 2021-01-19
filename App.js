/* eslint-disable prettier/prettier */
import React,{useState} from 'react';
import { Text,StyleSheet,View,FlatList} from 'react-native';
import Cita from './components/Cita';
import Formulario from './components/Formulario';

const App = () => {
  const [citas, setCitas] = useState([
    {id:"1", paciente:"hook",propietario:"juan",sintomas:"no come"},
    {id:"2", paciente:"redux",propietario:"itzel",sintomas:"no duerme"},
    {id:"3", paciente:"native",propietario:"jose",sintomas:"no ladra"},
  ]);
  
  const handleDelete=id=>{
    setCitas((citasActuales)=>{
      return citasActuales.filter(cita=>cita.id!==id);
    })
  }

  return (
    <>
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Administrador de citas</Text>
      <Formulario/>

      <Text style={styles.titulo}>{citas.length>0?'Administra tus citas':'No hay citas, agrega una'}</Text>
      <FlatList
        data={citas}
        renderItem={({item})=>(<Cita cita={item} handleDelete={handleDelete}/>)
      }
        keyExtractor={cita=>cita.id}
      />
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
    marginBottom: 20,
    color:"#FFF"
  },
  contenedor:{
    backgroundColor:'#AA076B',
    flex:1
  }

});


export default App;
