import React, { useEffect, useState } from 'react'
import TableRow from "./TableRow";
import TableHeadItem from "./TableHead";
import BulkDeleteCheckbox from "../../containers/BulkDeleteCheckBoxContainer"
// import { Button } from 'bootstrap';

export default function Table(props) {
    // console.log("props ")
    const { theadData, tbodyData } = props
    console.log("props in table", theadData, tbodyData, props.bulkDelete, props.bulkEdit)
    const [data,setData] = useState({
        bulkEdit : props.bulkEdit,
        bulkDelete : props.bulkDelete,
        ids : [],
    })

    const [deleteData,setDeleteData] = useState({
        bulkEdit : 'https://github.com/bulkEdit',
        bulkDelete : 'https://github.com/bulkDelete',
        ids : [],
    })

  
    function handleChange(e){
        const { id, checked } = e.target;
        console.log(`${id} is ${checked}`);
        if(checked){
            setData({
                ...data,
                ids : [...data.ids,id]
            })
        } else {
            console.log("in else",id)

            setData({
                ...data,
                ids: [...data.ids.filter((e) => e !== id)]
            })
        }
        console.log("ids are", data)
    }
     useEffect(() => {
        console.log("data is changed", data);
        props.addBulkEditData(data)
     }, [data])

     // bulk delete handle change function 
     
     function bulkDeleteHandleChange(e){
        const { id, checked } = e.target;
        console.log(`${id} is ${checked} in bulk delete`);
        setDeleteData({
            ...deleteData,
            ids : [...deleteData.ids,id]
        })
     }
    return (
        <table className="table">
            <thead>
            <tr>
                {theadData.map((h) => {
                        return <TableHeadItem key={h} item={h} />;
                    })}
                    <td>Actions</td>
                    <td>Bulk</td>
                    <td>Bulk Delete</td>
                </tr>
            </thead>
            <tbody>
            {tbodyData && tbodyData.length > 0 ? tbodyData.map((row) => (
            <tr key = {row.id}>
                {theadData.map((heading) => <td>{row[heading]}</td>)}
                <td ><button  id = {row.id}>Edit</button> <button id = {row.id}>Delete</button></td>
                <td><input type="checkbox" onChange={handleChange} id = {row.id}/></td>
                <td><BulkDeleteCheckbox onChange = {bulkDeleteHandleChange} id = {row.id} bulkIds = {deleteData}/></td>
                {/* <td key = {row.id}></td> */}
            </tr>
        )) : <tr className="text-justify">No data found</tr>}
            </tbody>
        </table>
    )
}
