import React from 'react'
import Button from './Button'

const Form = ({reqType, setReqType}) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
        <Button 
            ButtonText= 'users'
            reqType={reqType}
            setReqType={setReqType}
        />
         <Button 
            ButtonText= 'posts'
            reqType={reqType}
            setReqType={setReqType}
        />
         <Button 
            ButtonText= 'comments'
            reqType={reqType}
            setReqType={setReqType}
        />

    </form>
  )
}

export default Form