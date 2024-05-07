import { useEffect ,useState} from "react";



const Loop = () => {
    const [count ,setCount]=useState(0) ;
    let minute=0 ;
    if(count>=60){
        minute++ ;
    }
  useEffect(() => {
      
  const id=  setInterval(()=>{
        setCount(count+1) 
        
    },1000) ;
    return ()=> clearInterval(id) ;
    
  }, [count,minute]);


  return (
    <>
    <h1>Hello world {minute}:{count}</h1>;
    </>
  ) 
};
export default Loop;
