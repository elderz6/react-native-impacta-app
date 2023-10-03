import { User } from "../Models/user"
import { loggedRepository } from "../Repositories/logged.repository"

class UserService {

    private readonly baseUrl:string = "http://10.0.2.2:3030/users"

    private getHeaders = async () => {
        const token = await loggedRepository.getLoggedUser()

        return  {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Authorization':  `Bearer ${token}`
            }
    }

    public store = async (user:User):Promise<void> => {
        const response = await fetch( `${this.baseUrl}`,{
            method:"POST",
            headers: await this.getHeaders(),
            body: JSON.stringify({user})
        })

        return response.json()
        //check return status code
    }

    public getLista = async ():Promise<User[]> => {
        const response = await fetch( `${this.baseUrl}`,{
            method:"GET",
            headers: await this.getHeaders()
        })

        //check return status code, catch errors

        return response.json()
    }




}

export const userService = new UserService()