import React from "react";
import { View, Text, Button, TextInput, Dimensions, Pressable } from "react-native";
import {NavigationProp, useNavigation} from "@react-navigation/native"
import GlobalStyles from "../Components/GlobalStyles";
import { authService } from "../Services/auth.service";

export default function Login(){

    const navigation = useNavigation<NavigationProp<any>>()

    const [login, changeLogin] = React.useState("")
    const [senha, changeSenha] = React.useState("")

    const signIn = async ():Promise<void> => {
       const res = await authService.auth(login, senha)

       console.log(res)

       if(res == 201) navigateHome()
    }

    const navigateHome = ():void => {
        navigation.navigate("Home")
    }

    const navigateCadastro = ():void => {
        navigation.navigate("Cadastro")
    }

    return(
        <View style={GlobalStyles.container}>
            <View>
                <Text>Login</Text>
                <TextInput style={GlobalStyles.input} onChangeText={changeLogin}/>
            </View>
            <View>
                <Text>Senha</Text>
                <TextInput style={GlobalStyles.input} secureTextEntry onChangeText={changeSenha}/>
            </View>

            <Pressable onPress={signIn} style={GlobalStyles.BTNcadastro} >
                <Text style={{ textAlign: 'center', color:"white"}}>LOGIN</Text>
            </Pressable>

            <Pressable onPress={navigateCadastro} style={GlobalStyles.BTNcadastro} >
                <Text style={{ textAlign: 'center', color:"white"}}>CADASTRO</Text>
            </Pressable>

        </View>
    )
}

const styles = {
  
 
}