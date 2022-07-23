import React from "react";
import {Text, View } from 'react-native';
import styles from "../title/style";
import stylesResult from "./style";

export default  function ResultImc(props){
    return(
        <View style={stylesResult.resultImc}>
          
            <Text style={stylesResult.information}>{props.messageResultImc}</Text>
            <Text style={stylesResult.numberIMC}>{props.resultImc}</Text>
        </View>
    );
}
