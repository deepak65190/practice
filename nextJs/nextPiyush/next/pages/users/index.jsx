import { useState, useEffect } from "react";
import Link from "next/link";
const deepak1 = () => {
  const [user, setUser] = useState([]);
  console.log(user)
  useEffect(() => {
    async function userInfo() {
      const data = await fetch("https://dummyjson.com/users");
      setUser(await data.json());
    }
    userInfo();
  }, []);

  return (
    <>
      <h1>user info</h1>
      {
        user&& user.users&& user.users.map((el)=>
          (
            <Link href={`user/${el.id}`} key={el.id}>
            <div >{el.firstName}</div>
            </Link>
          )
        )
      }
    </>
  )
}
export default deepak1;
