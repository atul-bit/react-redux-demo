import React,{useState} from 'react'

export default function Checkbox(props) {
    const [data,setData] = useState({
        bulkEdit : 'https://github.com/bulkEdit',
        bulkDelete : 'https://github.com/bulkDelete',
        ids : [],
    })
    let idStub = [];
    const { theadData, tbodyData } = props
    console.log("props", theadData, tbodyData)
    function handleChange(e){
        const { id, checked } = e.target;
        console.log(`${id} is ${checked}`);
        if(checked){
            idStub.push(id)
            setData({
                ...data,
                ids : [...data.ids,id]
            })
        } else {
            console.log("in else",id)
            let arr = data.ids.filter((e) => e !== id);
            console.log("arr", arr)
            data.ids.length = 0;
            setData({
                ...data,
                ids: [...arr]
            })
        }
        console.log("ids are", data)
        // props.addBulkEditData(data)
    }
  return (
    <input type="checkbox" />
  )
}
