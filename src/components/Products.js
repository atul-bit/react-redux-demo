import React,{useEffect, useState} from 'react'
import Paginate from '../common/components/Paginate';
import Search from '../containers/SearchContainer';
import Table from '../containers/BulkEditContainer';


export default function Products(props) {
    console.warn("props.data in products", props.data)
    const [items,setItems] = useState([])
    const [pageCount, setpageCount] = useState(0);
    let limit = 10;
    const theadData = ["id","brand","category","title","price","rating"];
    console.log("theadData called", theadData)
    // props.data[0].searchData ? setItems(props.data[0].searchData.products) : []

    useEffect(() => {
        const getComments = async () => {
            console.log("getComments called")
          const res = await fetch(`https://dummyjson.com/products?limit=${limit}`);
          const data = await res.json();
            console.log("data", data);
            setItems(data.products)
            setpageCount(Math.ceil(data.total / limit));

        };
    
        getComments();
      }, [limit]);

      const fetchComments = async (skip) => {
        const res = await fetch(
          `https://dummyjson.com/products?limit=${limit}&skip=${skip}`
        );
        const data = await res.json();
        return data.products;
      };
    
      const handlePageClick = async (data) => {
        console.log(data.selected);
    
        let skip = data.selected  * 10;
    
        const commentsFormServer = await fetchComments(skip);
    
        setItems(commentsFormServer);

      };


  return (
    <>
        <div>Hello i am from product page</div>
        <Search url = {'https://dummyjson.com/products'}/>
        <Table theadData = {theadData} tbodyData ={props.data.length > 0 ? props.data[0].searchData.products : items} bulkEdit = {'https://github.com/bulkEdit'} bulkDelete = {'https://github.com/bulkDelete'}/>
        <Paginate pageCount = {props.data.length > 0 ? props.data[0].searchData.products.length ? Math.ceil(props.data[0].searchData.products.length / limit) : 0 : pageCount}  handlePageClick = {handlePageClick}/>
    </>
  )
}
