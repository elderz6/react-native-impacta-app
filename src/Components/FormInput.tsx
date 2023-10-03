import { View, Text, TextInput, StyleSheet } from "react-native";
import GlobalStyles from "./GlobalStyles";

export default function FormInput(props:FormInputProps) {

    const secure = props.secure
    return(
        <View>
            <Text>{props.text}</Text>
            <TextInput style={GlobalStyles.input} secureTextEntry={secure}/>
        </View>
    )
}