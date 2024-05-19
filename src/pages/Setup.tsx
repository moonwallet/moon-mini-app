import React from 'react'
import { useNavigate } from 'react-router-dom'

function Create() {
  const navigate = useNavigate()
  return (
    <>
      <div>
        <button onClick={() => { navigate('/import') }}>Import</button>
      </div>
      <div>
        <button onClick={() => { navigate('/create') }}>Create</button>
      </div>
    </>
  )
}

export default Create
