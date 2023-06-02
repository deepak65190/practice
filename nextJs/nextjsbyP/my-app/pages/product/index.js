import Link from "next/link";
export default function Home() {
  return <div>
    <h1>list page</h1>
    <ul>
        <li><Link href="/product/laptop">lapy</Link></li>
        <li><Link href="/product/camra">Camra</Link></li>
    </ul>
  </div>;
}
