import React from "react";
import { View,  Button } from "react-native";
import {NavigationProp, useNavigation} from "@react-navigation/native"


export default function Home() {
    const navigation = useNavigation<NavigationProp<any>>()

    const navigateLogin = ():void => {
        navigation.navigate("Login")
    }

    navigation.setOptions({
        headerLeft: () => <Button title="Sair" onPress={navigateLogin}/>,
        headerRight: () => <Button title="Teste"/>,
    })

    return(
        <View></View>
    )

}