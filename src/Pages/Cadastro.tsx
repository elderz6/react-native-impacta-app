import { View, Pressable, Text } from "react-native";
import FormInput from "../Components/FormInput";
import GlobalStyles from "../Components/GlobalStyles";
import { userService } from "../Services/user.service";
import { NavigationProp, useNavigation } from "@react-navigation/native";

export default function Cadastro(){
    const navigation = useNavigation<NavigationProp<any>>()


    const validations = ():boolean => {
        return false
    }

    const cadastro = ():void => {
        const validation:boolean = validations();
        if(validation){

            userService.store({
                id:1,
                name:"",
                token:""
            }).then(saved => {
                navigation.goBack()
            }).catch(err => console.log(err))

        } else alert("Campos Invalidos")
    }

    return(
        <View style={GlobalStyles.container}>
            <FormInput text="Nome" />
            <FormInput text="Login" />
            <FormInput text="Senha" secure={true}/>
            <FormInput text="Confirmar Senha" secure={true}/>

            <Pressable onPress={cadastro} style={GlobalStyles.BTNcadastro} >
                <Text style={GlobalStyles.textWhite}>Cadastrar</Text>
            </Pressable>
            
        </View>
    )
}