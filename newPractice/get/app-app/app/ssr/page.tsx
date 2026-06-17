import SearchBar from "../component/Search";

const Page = async ({ searchParams }) => {
  const params = await searchParams;
  const query = params.q || "";

  const data = await fetch(
    `https://dummyjson.com/products/search?q=${query}`,
    {
      cache: "no-store",
    }
  );

  const res = await data.json();
  const products = res.products;

  return (
    <div>
      <SearchBar />

      {products?.map((el) => (
        <h1 key={el.id}>{el.title}</h1>
      ))}
    </div>
  );
};

export default Page;