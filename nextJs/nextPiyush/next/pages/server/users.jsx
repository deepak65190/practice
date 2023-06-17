import React from 'react'

const users = (props) => {
    console.log("props",props)
  return (
    <div><h1>server side render</h1></div>
  )
}
export const getServerSideProps=async()=>{
    console.log("hello server side render")
    const data=await ((await fetch("https://dummyjson.com/users")).json())
    return{
        props:{
            data 
        } ,
    }
}

export default users