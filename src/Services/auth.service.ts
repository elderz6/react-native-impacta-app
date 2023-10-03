class AuthService {

    private readonly baseUrl:string = "http://10.0.2.2:3030/auth"

    public auth = async (user:string, password:string):Promise<number> => {

        const response = await fetch( `${this.baseUrl}/login`,{
                method:"POST",
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    },
                        body: JSON.stringify({
                        username: user,
                        password: password
                    })
            })

            return response.status

    }

}

export const authService = new AuthService()