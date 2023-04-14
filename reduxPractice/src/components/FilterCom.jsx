import React, { useState ,useEffect } from "react";
import {useSearchParams} from "react-router-dom"
function FilterCom() {
    const [searchParams ,setSearchParams]=useSearchParams() ;
    const initialValue= searchParams.getAll("category") ;
    const initialsort= searchParams.getAll("sort") ;
    const [sort ,setSort]=useState(initialsort[0] || "")
    const [category, setCategory] = useState(initialValue||[]);



    const handleFiltet = (e) => {
    let newCategory = [...category];
    if (newCategory.includes(e.target.value)) {
      newCategory.splice(category.indexOf(e.target.value), 1);
    } else {
      newCategory.push(e.target.value);
    }
    setCategory(newCategory);
  };



  const handleSort =(e)=>{
setSort(e.target.value)
  }
  useEffect(()=>{
    const params={} ;
    params.category=category ;
    sort && (params.sort=sort)
    setSearchParams(params);
  } ,[category ,searchParams ,sort])
  return (
    <div>
      <h3>filter by category</h3>
      <div>
        <input
          checked={category.includes("Motivational")}
          type="checkbox"
          value="Motivational"
          onChange={handleFiltet}
        />
        <label>Motivational</label>
      </div>
      <div>
        <input
          type="checkbox"
          value="Science_Fiction"
          checked={category.includes("Science_Fiction")}
          onChange={handleFiltet}
        />
        <label>Science Fiction</label>
      </div>
      <div>
        <input
          checked={category.includes("Novel")}
          type="checkbox"
          value="Novel"
          onChange={handleFiltet}
        />
        <label>Novel</label>
      </div>
      <div>
        <input
          type="checkbox"
          value="Thriller"
          checked={category.includes("Thriller")}
          onChange={handleFiltet}
        />
        <label>Thriller</label>
      </div>
      <h1>sort data</h1>
      <div onChange={handleSort}>
        <input
          type="radio"
          value="asc"
          name="sortBy"
          defaultChecked={sort === "asc"}
        />
        <label>acending</label>
        <br />
        <input
          defaultChecked={sort === "desc"}
          type="radio"
          value="desc"
          name="sortBy"
        />
        <label>decending</label>
      </div>
    </div>
  );
}

export default FilterCom;
