import { Spinner } from "react-bootstrap";

import React from 'react'

const Loader = () => {
  return (
    <Spinner
    animation="border"
    role="status"
    style={{
        width: '75px',
        height: '75px',
        margin: 'auto',
        display: 'block'
    }}/>
  )
}

export default Loader
