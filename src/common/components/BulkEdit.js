import React from 'react'

export default function BulkEdit(props) {
    console.log("props in bulk edit button", props.data)
  return (
    <button onClick ={() => {console.log("bulk edit detail",props.data)}}>Bulk Edit</button>
  )
}
