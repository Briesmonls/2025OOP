import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router';

import RegPage from './pages/regPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<RegPage />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
