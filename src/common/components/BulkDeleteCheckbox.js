import React,{useState} from 'react'

export default function BulkDeleteCheckbox(props) {
  console.log("props in bulk delete",props.bulkIds)
  const [bulkDeleteIds, setBulkDeleteIds] = useState([])
  function handleChange(e){
    console.log("value",e.target.value, e.target.checked)
    const { value, checked} = e.target;
    if(checked){
      setBulkDeleteIds([...bulkDeleteIds,value])
    }
    console.log("bulkDeleteIds",bulkDeleteIds)
  }
  return (
    <input type="checkbox" onChange = {handleChange} value = {props.id}/>
  )
}
