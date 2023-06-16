import { useEffect, useState } from "react";
import { useRouter } from "next/router";
const userInfoPage = () => {
  const [user, setUser] = useState("");
  const route = useRouter();
  console.log(user.firstName);

  useEffect(() => {
    async function signle(id) {
      const data = await fetch(`https://dummyjson.com/users/${id}`);
      setUser(await data.json());
    }
    signle(route.query.id);
  }, [route.query.id]);
  return <h1>single page {user?.firstName} </h1>;
};
export default userInfoPage;
 