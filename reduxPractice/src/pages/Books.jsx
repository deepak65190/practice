import React from "react";
import BookList from "../components/BookList";
import FilterCom from "../components/FilterCom";
import styled from "styled-components";
function Books() {
  return (
    <div>
      <Bookwrapper>
        <Filterwrapper>
          <FilterCom />
        </Filterwrapper>
        <BookListwrapper>
          <BookList />
        </BookListwrapper>
      </Bookwrapper>
    </div>
  );
}

const Bookwrapper = styled.div`
  display: flex;
`;
const Filterwrapper = styled.div`
  width: 300px;
`;
const BookListwrapper = styled.div`
  width: auto;
  border:2px solid red ;
  display:grid ;
  grid-template-columns:repeat(auto-fit ,minmax(300px,max-content)) ;
  grid-gap:10px ;
  justify-content:center;
`;
export default Books;
