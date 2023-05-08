import axios from "axios";
const url = "http://localhost:8080";
 export  const upload = async (data) => {
  try {
    const res = await axios.post(`${url}/upload`, data)
    return res.data
  } catch (err) {}
};
