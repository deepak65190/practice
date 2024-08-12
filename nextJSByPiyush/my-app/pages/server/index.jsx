const Server=(props)=>{
    console.log(props.res.products)
    return (
        <h1>hello server side </h1>
    )
}
export const getServerSideProps=async()=>{
    const data=await fetch("https://dummyjson.com/products") ;
    const res=await data.json() ;
    return ({
        props:{res}
    })
}
export default Server