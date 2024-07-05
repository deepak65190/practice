import React  ,{useState ,useEffect} from 'react'

const Scroll = () => {
    const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
    const post = async () => {
    let res = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=20`
    );
    let newData = await res.json();
    setData([...data ,...newData]);
    
  };
 useEffect(()=>{
post()

 },[page]) ;
 
 useEffect(()=>{
    window.addEventListener("scroll" ,handleScroll) ;
  return ()=>  window.removeEventListener("scroll" ,handleScroll) ;
    
 })
 const handleScroll=()=>{
    let {clientHeight ,scrollHeight ,scrollTop}=document.documentElement ;
    if(clientHeight+scrollTop>=scrollHeight-20){
        setPage(page+1)
    }
     }
  return (
    <div>
      <h2>Hello Pagination</h2>
       <div>
        {data?.length > 0 && data.map((el ,ind) => <h2 key={el.id}>{ind}  {el.title}</h2>)}
      </div>
    </div>
  )
}

export default Scroll

