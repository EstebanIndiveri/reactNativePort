/* eslint-disable prettier/prettier */
import React,{Fragment, useState} from 'react';
import { Text,StyleSheet,View,FlatList,TouchableHighlight,Platform, StatusBar} from 'react-native';
import Cita from './components/Cita';
import Formulario from './components/Formulario';

const App = () => {
  const [mostrarForm, setMostrarForm] = useState(false);
  const [citas, setCitas] = useState([]);
  
  const handleDelete=id=>{
    setCitas((citasActuales)=>{
      return citasActuales.filter(cita=>cita.id!==id);
    })
  };
  const mostrarFormulario=()=>{
    setMostrarForm(!mostrarForm);
  }

  return (
    <>
    <StatusBar backgroundColor="#AA076B"  />
    <View style={styles.contenedor}>
      
      <Text style={styles.titulo}>Administrador de citas</Text>
      <View>
        <TouchableHighlight onPressIn={() =>mostrarFormulario()} style={styles.btnSubmit}>
            <Text style={styles.textoEliminar}>{mostrarForm?'Cancelar':'Crear cita'}</Text>
        </TouchableHighlight>
    </View>
        <View style={styles.contenido}>
       {mostrarForm?(
         <Fragment>
        <Text style={styles.titulo}>Crear Nueva Cita</Text>
         <Formulario citas={citas} setCitas={setCitas} setMostrarForm={setMostrarForm}/>
         </Fragment>
       )
       :(
         <Fragment>
        <Text style={styles.titulo}>{citas.length>0?'Administra tus citas':'No hay citas, agrega una'}</Text>
        <FlatList
        style={styles.listado}
          data={citas}
          renderItem={({item})=>(<Cita cita={item} handleDelete={handleDelete}/>)
        }
          keyExtractor={cita=>cita.id}
        />
        </Fragment>
       )
       }

        </View>
    </View>

    </>
  );
};

const styles=StyleSheet.create({
  titulo:{
    fontSize:24,
    textAlign:'center',
    marginTop:Platform.OS==='ios'?40:20,
    fontWeight:'bold',
    marginBottom: 20,
    color:"#FFF"
  },
  contenedor:{
    backgroundColor:'#AA076B',
    flex:1
  },
  contenido:{
    flex:1,
    marginHorizontal:'2.5%',
  },
  listado:{
    flex:1,
  },
  btnSubmit:{
    padding:10,
    backgroundColor:'#7d024e',
    marginVertical:10
},
textoEliminar:{
    color:'#FFF',
    fontWeight:'bold',
    textAlign:'center',

},

});


export default App;
