import React ,{useEffect} from 'react'
import {useDispatch ,useSelector} from "react-redux" ;
import {getBooks} from "../redux/action" ;
import styled from 'styled-components';
import BookCard from './BookCard';
import {useLocation ,useSearchParams ,Link} from "react-router-dom" ;

function BookList() {
  const books = useSelector((state) => state.appReducer.books);

  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
 

  useEffect(() => {
    if (location || books.length === 0) {
      const sortBy= searchParams.get("sort")
      console.log(sortBy)
      let getBooksParams = {
        params: {
          category: searchParams.getAll("category"),
          _sort: sortBy && "release_year",
          _order: sortBy,
        },
      };
     
      dispatch(getBooks(getBooksParams));
    }
  }, [location.search]); //books.length ,dispatch ,can also add
  return (
    <>
      {books.length > 0 &&
        books.map((ele) => {
          return (
            <Bookcardwrapper key={ele.id}>
              <Link to={`/books/:${ele.id}`}>
                <BookCard bookdata={ele} />
              </Link>
            </Bookcardwrapper>
          );
        })}
    </>
  );
}
const Bookcardwrapper= styled.div`
width:300px ;
border:2px solid green
`
export default BookList