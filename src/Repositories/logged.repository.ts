import storage from "@react-native-async-storage/async-storage"
import {User} from "../Models/user"

class LoggedRepository {

    private readonly token = '@Auth_logged'

    public async setLoggedUser(user:User){
        const json = JSON.stringify(user)
        await storage.setItem(this.token, json)
    }

    public async getLoggedUser(){
        const json = await storage.getItem(this.token)
        return json ? JSON.parse(json) : null
    }

    public async logOut(){
        await storage.removeItem(this.token)
    }

}

export const loggedRepository = new LoggedRepository()