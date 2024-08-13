import NextAuth from "next-auth/next";
import GithubProvider from "next-auth/providers/github" ;
export const authOptions={
    providers:[
        GithubProvider({
            clientId:"Ov23lih0ZctHMNfDyBnf" ,
            clientSecret:"584b3bf62179d0d08c6a4b637ba6a68e532c4a3d"
        })
    ]

}
export default NextAuth(authOptions)