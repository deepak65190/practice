import { useState } from "react";
import { useRouter } from "next/router";
export default function Camra() {
  const req=useRouter()
  return <div>hello welcome to camra page {req.query.id}</div>;
}
