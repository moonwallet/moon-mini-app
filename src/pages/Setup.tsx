import { useNavigate } from 'react-router-dom'

import moon from '../assets/moon.png'

function Create() {
  const navigate = useNavigate()
  return (
    <>
      <div className="flex items-center justify-center w-full h-[300px]">
        <img src={moon} className="w-[180px] h-[180px]" alt="React logo" />
      </div>
      <div>
        <button onClick={() => { navigate('/import') }}>Import</button>
      </div>
      <br />
      <div>
        <button onClick={() => { navigate('/create') }}>Create</button>
      </div>
    </>
  )
}

export default Create
