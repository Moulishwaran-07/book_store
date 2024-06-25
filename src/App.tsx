
import Home from './Component/Homepage'
import Book from './Component/Book_store';
import Head from './Component/Header';
import Foot from './Component/Footer';
import Store_detail from './Component/Store_detail';
import Request_book from './Component/Request';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  



  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/Head' element={<Head></Head>}></Route>
          <Route path='/Foot' element={<Foot></Foot>}></Route>
          <Route path='/Book' element={<Book></Book>}></Route>
          <Route path='/Store_detail' element={<Store_detail></Store_detail>}></Route>
          <Route path='/Request_book' element={<Request_book></Request_book>}></Route>
          
        </Routes>
      </Router>

    </div>
  )
}

export default App
