import { useCallback, useState, useEffect ,useRef } from "react";

function App() {
  const [password, setPassword] = useState("");
  const [schar, setSchar] = useState(true);
  const [lenght, setLenght] = useState(10);
  const [num, setNum] = useState(true);
const ref=useRef(null) ;
  const Gen = 
    useCallback(() => {
      let pass = "";
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
      if (num) str += "0123456789";
      if (schar) str += "!@#$%^&*-_+=[]{}~`";
      for (let i = 0; i < lenght; i++) {
        let char = Math.floor(Math.random() * str.length +1);
      
        pass += str.charAt(char);
       
      }
      setPassword(pass);
    }, [ schar,num, lenght]);



const copy=()=>{
  ref.current?.select() ;
 ref.current?.setSelectionRange(0,15);
  window.navigator.clipboard.writeText(password)
}


  useEffect(() => {
    Gen();
  }, [lenght, num,Gen, schar]);

  return (
    <>
      <h1>hello world</h1>
      <input type="text" value={password} readOnly ref={ref} />
      <input type="text" value={password} readOnly ref={ref} />
      <button onClick={copy}>copy</button>
      <br />
      <br />
      <input
        type="range"
        id="range"
        value={lenght}
        min={5}
        max={50}
        onChange={(e) => setLenght(e.target.value)}
      />
      <label htmlFor="range">{lenght}</label>
      <input type="checkbox" defaultChecked={num} id="checkbox" onChange={()=>setSchar((pre)=>!pre)} />
      <label htmlFor="checkbox"> char</label>
      <input type="checkbox" onChange={()=>setNum((pre)=>!pre)} defaultChecked={schar} id="checkboxN" />
      <label htmlFor="checkboxN">Number</label>
    </>
  );
}

export default App;
