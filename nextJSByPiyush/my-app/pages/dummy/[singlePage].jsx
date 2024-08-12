import { useRouter } from "next/router";
import useSWR from "swr";

// Define the fetcher function
const fetcher = (url) => fetch(url).then((res) => res.json());

const SinglePage = () => {
    const { query } = useRouter();
    const router = useRouter();

    // Use a conditional key to handle the initial render when query.singlePage might be undefined
    const { data, error } = useSWR(
        query.singlePage ? `https://dummyjson.com/products/${query.singlePage}` : null,
        fetcher
    );

    if (error) return <p>Error loading data</p>;
    if (!data) return <p>Loading...</p>;

    return (
        <>
            <h5>Dummy Data</h5>
            {data.thumbnail && <img src={data.thumbnail} alt={data.title || "Product Image"} />}
            <p>{data.title}</p> {/* Display other product details */}
            <button onClick={() => router.push("/dummy/dummy")}>Home data page</button>
        </>
    );
};

export default SinglePage;
