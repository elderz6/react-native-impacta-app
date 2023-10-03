import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
    container:{
        flex:1, 
        alignItems:"center", 
        justifyContent:"center"
    },
    input:{
        width: Dimensions.get("screen").width * 0.7,
        borderColor: "black",
        borderWidth:1,
        borderRadius:5,
        marginBottom:10
    },
    BTNcadastro:{
        alignItems:"center",
        width: Dimensions.get("screen").width * 0.7,
        marginTop:10,
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'teal'
    },
    textWhite:{
        color:"white",
    }
  
})
