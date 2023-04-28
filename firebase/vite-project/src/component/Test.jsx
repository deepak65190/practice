import React from "react";
import app from "../fireBase";
import { getDatabase, set, ref } from "firebase/database";
const db = getDatabase(app);
const postData = () => {
  set(ref(db, "deepak/data"), {
    id: 2,
    name: "rahul",
    age: 20,
  });
};
function Test() {
  return (
    <div>
      Test
      <button onClick={postData}>post data</button>
    </div>
  );
}

export default Test;
