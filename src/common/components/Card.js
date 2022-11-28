import React from 'react'

export default function Card(props) {
    console.log("props", props)
  return (
    <div key={props.items.id} className="col-sm-6 col-md-4 v my-2">
    <div className="card shadow-sm w-100" style={{ minHeight: 225 }}>
      <div className="card-body">
        <h5 className="card-title text-center h2">Id :{props.items.id} </h5>
        <h6 className="card-subtitle mb-2 text-muted text-center">
          {props.items.email}
        </h6>
        <p className="card-text">{props.items.body}</p>
      </div>
    </div>
  </div>
  )
}
