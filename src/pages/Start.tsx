import { useNavigate } from 'react-router-dom'

import Button from '../kit/Button'

import moon from '../assets/moon.png'

function Create() {
  const navigate = useNavigate()
  return (
    <>
      <div className="flex items-center justify-center w-full h-[300px]">
        <img src={moon} className="w-[180px] h-[180px]" alt="React logo" />
      </div>
      <div>
        <Button
          theme="big"
          onClick={() => { navigate('/import') }}
        >
          Import
        </Button>
      </div>
      <br />
      <div>
        <Button
          theme="big"
          onClick={() => { navigate('/create') }}
        >
          Create
        </Button>
      </div>
    </>
  )
}

export default Create
