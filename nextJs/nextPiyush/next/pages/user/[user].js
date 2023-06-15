import { useRouter } from "next/router";
const deepak1 = () => {
  const router = useRouter();
  
  return (
    <>
    
      <h1>about {router.query.user} page</h1>
      <button onClick={(e) => router.push("/")}>home</button>
    </>
  );
};
export default deepak1;
