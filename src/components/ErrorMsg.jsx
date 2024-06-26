import React from 'react'

const ErrorMsg = ({errorMsg}) => {
  return (
    <div style={{color:'red'}}>
      {errorMsg}
    </div>
  )
}

export default ErrorMsg
