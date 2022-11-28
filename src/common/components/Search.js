import React, { useState } from 'react'
import BulkEdit from '../../containers/BulkEditButtonContainer'
import BulkDelete from '../../containers/BulkDeleteButtonContainer'

export default function Search(props) {
    console.log("props in search",props)
    const [search,setSearch] = useState('')
    
  return (
    <div className='text-center'>
        <input type="search" placeholder='Search here' onChange = {(e) => {setSearch(e.target.value)}} value = {search}/>
        <button onClick = {() => props.searchData(`${props.url}/search?q=${search}`)}>Search</button>
        <button onClick={() => window.location.reload(false)}>Click to reload!</button>
        <BulkEdit />
        <BulkDelete />
    </div>
  )
}
