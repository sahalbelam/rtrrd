import { Route, Routes } from 'react-router-dom'
import './App.css'
import Editor from './components/Editor'

function App() {

  return (
    <div className='text-3xl '>
      <Routes>
        <Route path='/write' element={<Editor />}> </Route>
      </Routes>
    </div>
  )
}

export default App
