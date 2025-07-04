import Credentials from "next-auth/providers/credentials"
import Google from "next-auth/providers/google"

export const AuthOptions= ({
    providers:[
        Credentials({
            name : "Email",
            credentials:{
                        email : {label : "Email" , placeholder : "Email" , type : "email"},
                        password : {label : "Password" , placeholder : "password" , type : "password"}
                    },

                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    async authorize(credentials : any) {
                        console.log(credentials)
                        return {
                            id : "1",
                            email : "harsh@gmail.com",
                            password : "harsh@123"
                        }
                    },
                    
                }),

                Google({
                    clientId: process.env.GOOGLE_CLIENT_ID || "",
                    clientSecret: process.env.GOOGLE_CLIENT_SECRET || ""
                }),
            ],
            secret : process.env.NEXTAUTH_SECRET,
            pages:{
                signIn : "/signin"
            }
            
            
})  
        
