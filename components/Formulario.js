import React,{Fragment, useState} from 'react';
import { Text,StyleSheet,View,TextInput,Button, TouchableHighlight,Alert,ScrollView} from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import shortid from 'shortid';

const Formulario = ({citas,setCitas,setMostrarForm,guardarCitasStorage}) => {
    const [paciente, setPaciente] = useState('');
    const [propietario, setPropietario] = useState('');
    const [telefono, setTelefono] = useState('');
    const [sintomas, setSintomas] = useState('');
    const [fecha, setFecha] = useState('');
    const [hora, setHora] = useState('');
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
      };
    
      const hideDatePicker = () => {
        setDatePickerVisibility(false);
      };
    
      const confirmarFecha = (date) => {
        const opciones={year:'numeric',month:'long',day:'2-digit'};
        setFecha(date.toLocaleDateString('es-ES',opciones));
        hideDatePicker();
      };
    //   muestra u oculta el time picker
    const showTimePicker = () => {
        setTimePickerVisibility(true);
      };
    
      const hideTimePicker = () => {
        setTimePickerVisibility(false);
      };
      const confirmarHora = (hour) => {
        const opciones={hour:'numeric',minute:'2-digit'};
        let horax=(hour.toLocaleDateString('en-US',opciones));
        let formatHora=horax.split(',');
        setHora(formatHora[1]);
        // console.log(hora);
        // console.warn("A date has been picked: ", date);
        hideTimePicker();
      };
      const crearNuevaCita=()=>{
        if(paciente.trim()==='' || propietario.trim()===''||telefono.trim()===''|| fecha.trim()===''|| sintomas.trim()===''){
            // error
            mostrarAlerta();
            // console.log('error');
            return;
        }
        const cita={paciente,propietario,telefono,fecha,hora,sintomas};
        cita.id=shortid.generate();
        // console.log(cita);
        const citasNuevo=[...citas,cita];
        setCitas(citasNuevo);
        // storage
        guardarCitasStorage(JSON.stringify(citasNuevo));
        setMostrarForm(false);
      };

    //   alerta
    const mostrarAlerta=()=>{
        Alert.alert(
            'Error',
            'Todos los campos son obligatorios',
            [{
                text:'OK'
            }]
        )
    }
    
    return ( 
        <Fragment>
            <ScrollView style={styles.formulario}>
                <View >
                    <Text style={styles.label}>Paciente: </Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={texto=>setPaciente(texto)}
                    />
                </View>
                <View >
                    <Text style={styles.label}>Dueño: </Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={texto=>setPropietario(texto)}
                    />
                </View>
                <View >
                    <Text style={styles.label}>Contacto: </Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={texto=>setTelefono(texto)}
                        keyboardType='numeric'
                    />
                </View>
                <View>
                    <Text style={styles.label}>Fecha:</Text>
                    <Button title="Seleccionar fecha" onPress={showDatePicker} />
                    <DateTimePickerModal
                        isVisible={isDatePickerVisible}
                        mode="date"
                        onConfirm={confirmarFecha}
                        onCancel={hideDatePicker}
                        locale='es_ES'
                    />
                    <Text>{fecha}</Text>
                </View>
                <View>
                <Text style={styles.label}>Hora:</Text>
                    <Button title="Selecionar hora" onPress={showTimePicker} />
                    <DateTimePickerModal
                        isVisible={isTimePickerVisible}
                        mode="time"
                        onConfirm={confirmarHora}
                        onCancel={hideTimePicker}
                        locale='es_ES'
                    />
                    <Text>{hora}</Text>
                </View>

                <View >
                    <Text style={styles.label}>Síntomas: </Text>
                    <TextInput
                        multiline
                        style={styles.input}
                        onChangeText={texto=>setSintomas(texto)}
                    />
                </View>
                <View>
                    <TouchableHighlight onPressIn={() =>crearNuevaCita()} style={styles.btnSubmit}>
                        <Text style={styles.textoEliminar}>Crear cita</Text>
                    </TouchableHighlight>
                </View>
            </ScrollView>
        </Fragment>
        );
}
const styles=StyleSheet.create({
    formulario:{
        backgroundColor: '#FFF',
        paddingHorizontal:20,
        paddingVertical:10,
        paddingBottom:15,
        borderRadius: 10,
    },
    label:{
        fontWeight:'bold',
        fontSize:18,
        marginTop:20,
    },
    input:{
        marginTop: 10,
        height:50,
        borderColor: '#e1e1e1',
        borderWidth:1,
        borderStyle:'solid',
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
})
export default Formulario;