import { StyleSheet } from "react-native";

const stylesForm = StyleSheet.create({
    formContext:{
        width:"100%", 
        height:"100%",
        bottom:0,
        backgroundColor:"#ffff",
        alignItems:"center",
        marginTop:10,
        borderTopLeftRadius:30,
        borderBottomRightRadius:30,
        

    },

    form:{
        width:"100%",
        height:"auto",
        marginTop:30,
        padding:30,
    },

    formLabel:{

        color:"#000000",
        fontSize:18,
        paddingLeft:20,
    },

    formInput:{
        width:"90%",
        borderRadius:50,
        backgroundColor:"#f6f6f6",
        height:40,
        margin:12,
        paddingLeft:10
    },

    buttonCalculator:{

        borderRadius:50,
        alignItems:"center",
        justifyContent:"center",
        width:"90%",
        backgroundColor:"#ff0043",
        paddingTop:14,
        paddingBottom:14,
        marginLeft:12,
        margin:30
    },

    textButtonCalculator:{
        fontSize:20,
        color:"#ffffff"
    },

    errorMessage:{
        fontSize: 12,
        color:"red",
        fontWeight:"bold",
        paddingLeft:20
    }
});

export default stylesForm