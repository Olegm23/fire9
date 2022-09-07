import React from 'react'
import { Link } from 'react-router-dom'

const View = () => {
  return (
    <div style={{ marginTop: '150px' }}>
      <div className={"card"}>
        <div className={"card-header"}>
          <p>User Contact Detail</p>
        </div>
        <div className={"container"}>
          <strong>ID:</strong>
          <br />
          <br />
          <strong>Name:</strong>
          <br />
          <br />
          <strong>Email:</strong>
          <br />
          <br />
          <strong>Contact:</strong>
          <br />
          <br />
          <Link to={'/'}>
            <button className={'btn btn-edit'}>Go back</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default View