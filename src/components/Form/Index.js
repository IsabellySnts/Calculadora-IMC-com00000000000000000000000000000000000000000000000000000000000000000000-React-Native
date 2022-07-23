import React, {useState} from "react";
import { Text, TextInput, View, TouchableOpacity, Vibration } from 'react-native';
import ResultImc from "../ResultImc/Index";
import stylesForm from "./style";

export default  function Form(){

    const [height, setHeight]  = useState(null)
    const [weight, setWeight] = useState(null)
    const [messageImc, setMessageImc] = useState("preencha o peso e altura")
    const [imc, setImc] = useState(null)
    const [textButton, setTextButton] = useState("Calcular")
    const [errorMessage, setErrorMessage] = useState(null)

    //função calculando o imc
    function imcCalculator(){
        return setImc((weight/(height*height)).toFixed(2))
    }

    //validando os campos
    function validationImc(){

        //se os campos não estiveres vazios
        if (weight != null && height != null) {

            //retornar o metodo do imc
            imcCalculator()
            //limpar os input
            setHeight(null)
            setWeight(null)
            setMessageImc("Seu imc é igual:")
            setTextButton("Calcular Novamente")
            setErrorMessage(null)
            return
        }
        //se nao
        setImc(null)
        setTextButton("Calcular")
        //pedir para preencher o peso e a altura
        setMessageImc("Preencha o peso e a altura")
        //mensagem de erro
        setErrorMessage("campo obrigatório*")
        //API para vibrar
        Vibration.vibrate();
    }
    return(
        <View style={stylesForm.formContext}>
           <View style={stylesForm.form}>
            <Text style={stylesForm.formLabel}>Altura</Text>
            <Text style={stylesForm.errorMessage}>{errorMessage}</Text>
            <TextInput style={stylesForm.formInput} placeholder="Ex: 1.75"
            keyboardType="numeric"
            onChangeText={setHeight}
            value={height}></TextInput>

            <Text style={stylesForm.formLabel}>Peso</Text>
            <Text style={stylesForm.errorMessage}>{errorMessage}</Text>
            <TextInput  style={stylesForm.formInput} placeholder="Ex: 75.365"
            keyboardType="numeric"
            onChangeText={setWeight}
            value={weight}></TextInput>

            
           </View>

            <TouchableOpacity
            style={stylesForm.buttonCalculator} 
            onPress={() => validationImc()}>

            <Text style={stylesForm.textButtonCalculator}> {textButton}</Text>

            </TouchableOpacity>

            

           <ResultImc messageResultImc={messageImc} resultImc={imc} />
        </View>
    );
}
