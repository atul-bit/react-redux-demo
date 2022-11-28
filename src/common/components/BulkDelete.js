import React from 'react'

export default function BulkDelete(props) {
    console.log("props in bulk edit button", props.data)
  return (
    <button onClick ={() => {console.log("bulk delete detail",props.data)}}>Bulk Delete</button>
  )
}
