import React from 'react'
import { Routes , Route } from 'react-router-dom'
import Home from './pages/Home.jsx';
import CreateBook from './pages/CreateBook.jsx';
import EditBook from './pages/EditBook.jsx';
import DeleteBook from './pages/DeleteBook.jsx';
import ShowBook from './pages/ShowBook';

const App = () => {
  return (
    <Routes>
      <Route path='/' element= {<Home />} ></Route>
      <Route path='/books/create' element= {<CreateBook/>} ></Route>
      <Route path='/books/edit/:id' element= {<EditBook/>} ></Route>
      <Route path='/books/delete/:id' element= {<DeleteBook/>} ></Route>
      <Route path='/books/details/:id' element= {<ShowBook/>} ></Route>   
    </Routes>
  )
}

export default App