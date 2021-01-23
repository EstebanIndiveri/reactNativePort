import React from 'react';
import { Text,StyleSheet,View,TouchableHighlight} from 'react-native';

const Cita = ({cita,handleDelete}) => {
    const dialogoEliminar = id =>{
        console.log('eliminando',id);
        handleDelete(id);
    }
    return ( 
        <View style={styles.cita}>
        <View>
            <Text style={styles.label}>Paciente:</Text>
            <Text style={styles.texto}>{cita.paciente}</Text>
        </View>
        <View>
            <Text style={styles.label}>Propietario:</Text>
            <Text style={styles.texto}>{cita.propietario}</Text>
        </View>
        <View>
            <Text style={styles.label}>Síntomas:</Text>
            <Text style={styles.texto}>{cita.sintomas}</Text>
        </View>
        <View>
            <TouchableHighlight onPressIn={() =>dialogoEliminar(cita.id) } style={styles.btnEliminar}>
                <Text style={styles.textoEliminar}>Eliminar &times;</Text>
            </TouchableHighlight>
        </View>
        </View>
     );
}
const styles=StyleSheet.create({
    cita:{
        backgroundColor: '#FFF' ,
        borderBottomColor:'#e1e1e1',
        borderStyle:'solid',
        borderBottomWidth:1,
        paddingVertical: 20,
        paddingHorizontal:10,
        borderRadius:20,
        marginBottom:10,
        
    },
    label:{
        fontWeight:'bold',
        fontSize:18,
        marginTop:20,
    },
    texto:{
        fontSize:18,
    },
    btnEliminar:{
        padding:10,
        backgroundColor:'red',
        marginVertical:10
    },
    textoEliminar:{
        color:'#FFF',
        fontWeight:'bold',
        textAlign:'center',

    }
})
 
export default Cita;