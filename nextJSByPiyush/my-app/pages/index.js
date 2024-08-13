
import { useSession ,signIn,signOut } from "next-auth/react";
export default function Home() {
  const session=useSession() ;
  console.log(session)
  if(session.data==null){
    return <button onClick={signIn}>login </button>
  }
  return (
    <>
      <h1>hello</h1>
      <button onClick={signOut}>singout</button>
      <p>{session?.data?.user?.name}</p>
    
    </>
  );
}
