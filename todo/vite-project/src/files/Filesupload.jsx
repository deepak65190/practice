import React, { useState } from "react";

function Filesupload() {
  
  const sumitFile = async (e) => {
    const file = e.target.files[0];
    const fdata = new FormData();
    fdata.append("file", file);
    fdata.append("upload_preset", "aozv7ten");
    fdata.append("cloud_name", "dbhwo1o86");
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dbhwo1o86/image/upload",
      {
        method: "POST",
        body: fdata,
      }
    );

    const data = await res.json();
    console.log(data);
  };

  return (
    <div>
      <h1>Filesupload</h1>
      <input type="file" onChange={(e) => sumitFile(e)} />
    </div>
  );
}

export default Filesupload;
