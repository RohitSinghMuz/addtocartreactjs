 import Navigateclass from './Navigateclass.js'
// import Test from './Test';
import { Routes, Route } from "react-router-dom";
// import Carddetails from './Carddetails'
import Navbar from './Navbar'
import Useparam from './Useparam'
import Addtocart from './Addtocart'
import Test2 from './Test2.js';

import './App.css';

function App() {
  return (
    <>
    <Test2/>
      {/* <Navbar/>
      <Routes>
          <Route path="/" element={<Navigateclass /> } />
 
          <Route path="/page/:pageno/:_id" element={<Useparam/>} />
          <Route path="addtocart" element={<Addtocart/>} />
      </Routes> */}
    </>
  );
}



export default App;
