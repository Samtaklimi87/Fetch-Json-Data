import React from 'react'

const Button = ({ButtonText, reqType ,setReqType}) => {
  return (
    <button
        className={ButtonText === reqType ? 'selected' : null}
        type='button'
        onClick={() => setReqType(ButtonText)}
    >
        {ButtonText}
    </button>
  )
}

export default Button