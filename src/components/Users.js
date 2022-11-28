import React,{useEffect, useState} from 'react'
import Paginate from '../common/components/Paginate';
import Search from '../containers/SearchContainer';
import Table from '../containers/BulkEditContainer';


export default function Users(props) {
    console.warn("props.data in users", props.data)
    const [items,setItems] = useState([])
    const [pageCount, setpageCount] = useState(0);
    let limit = 10;
    const theadData = ["id","firstName","lastName","age","gender","email"];
    // console.log("theadData called", theadData)
    // props.data[0].searchData ? setItems(props.data[0].searchData.users) : []

    useEffect(() => {
        const getComments = async () => {
            console.log("getComments called")
            const res = await fetch(`https://dummyjson.com/users?limit=${limit}`);
            const data = await res.json();
            console.log("data", data);
            setItems(data.users)
            setpageCount(Math.ceil(data.total / limit));

        };
    
        getComments();
      }, [limit]);

      const fetchComments = async (skip) => {
        const res = await fetch(
          `https://dummyjson.com/users?limit=${limit}&skip=${skip}`
        );
        const data = await res.json();
        return data.users;
      };
    
      const handlePageClick = async (data) => {
        console.log(data.selected);
    
        let skip = data.selected  * 10;
    
        const commentsFormServer = await fetchComments(skip);
    
        setItems(commentsFormServer);

      };


  return (
    <>
        <div>Hello i am from Users page</div>
        <Search url = {'https://dummyjson.com/users'}/>
        <Table theadData = {theadData} tbodyData ={props.data.length > 0 ? props.data[0].searchData.users : items} bulkEdit = {'https://github.com/bulkEditUsers'} bulkDelete = {'https://github.com/bulkDeleteUsers'}/>
        {props.data.length > 0 || pageCount ?
            <Paginate pageCount = {props.data.length > 0 ? props.data[0].searchData.users.length ? Math.ceil(props.data[0].searchData.users.length / limit) : 0 : pageCount}  handlePageClick = {handlePageClick}/> : ''  
            }
        
    </>
  )
}
