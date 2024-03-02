import { useState } from 'react'
import HomePage from './components/HomePage'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './components/Login'
import SignUp from './components/SignUp'

const initialUsers = [{}]

function App() {
  const [users, setUsers] = useState(initialUsers);
  const [currentUser, setCurrentUser] = useState(null);

  const addUser = (newUser) => {
    setUsers((prevUsers) => [...prevUsers, newUser]);
};

  return (
         <div>
          <Routes>
            <Route path='/' element={<HomePage users={users}/>}/>
            <Route path='/Login' element={<Login/>}/>
            <Route path='/SignUp' element={<SignUp addUser={addUser}/>}/>
          </Routes>
         </div>     
    
  )
}

export default App
