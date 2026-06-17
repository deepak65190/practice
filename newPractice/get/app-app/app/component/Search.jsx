"use client";

import { useRouter, useSearchParams } from "next/navigation";

export default function SearchBar() {
  const router = useRouter();
  const params = useSearchParams();

  const handleSearch = (value) => {
    const search = new URLSearchParams(params);

    search.set("q", value);

    router.push(`?${search.toString()}`);
  };

  return (
    <input
      placeholder="Search..."
      onChange={(e) => handleSearch(e.target.value)}
    />
  );
}