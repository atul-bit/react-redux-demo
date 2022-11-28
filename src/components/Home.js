import React,{useEffect, useState} from 'react'
import ReactPaginate from "react-paginate";
import Card from "../common/components/Card"
import Paginate from "../common/components/Paginate"

export default function Home() {
  const [items, setItems] = useState([]);

  const [pageCount, setpageCount] = useState(0);

  let limit = 13;

  useEffect(() => {
    const getComments = async () => {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/comments?_page=1&_limit=${limit}`
        // `https://jsonplaceholder.typicode.com/comments?_page=1&_limit=${limit}`
      );
      const data = await res.json();
      const total = res.headers.get("x-total-count");
      setpageCount(Math.ceil(total / limit));
      // console.log(Math.ceil(total/12));
      setItems(data);
    };

    getComments();
  }, [limit]);

  const fetchComments = async (currentPage) => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/comments?_page=${currentPage}&_limit=${limit}`
      // `https://jsonplaceholder.typicode.com/comments?_page=${currentPage}&_limit=${limit}`
    );
    const data = await res.json();
    return data;
  };

  const handlePageClick = async (data) => {
    console.log(data.selected);

    let currentPage = data.selected + 1;

    const commentsFormServer = await fetchComments(currentPage);

    setItems(commentsFormServer);
    // scroll to the top
    //window.scrollTo(0, 0)
  };
  return (
    <div className="container">
      <div className="row m-2">
        {items.map((item) => {
          return (
            <Card items = {item}/>
          );
        })}
      </div>
      <Paginate pageCount = {pageCount}  handlePageClick = {handlePageClick} />
    </div>
  );
}
