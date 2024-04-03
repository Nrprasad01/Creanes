// import React from 'react'
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import LandingPage from './components/LandingPage/LandingPage';
// import AllData from './components/AllData/AllData';
// import HeaderSelect from './components/headerSelection/HeaderSelect';


// const App = () => {
//   return (
//     <div>
//       <BrowserRouter>
//       {<HeaderSelect />}
//         <Routes>
//           <Route path='/' element={<LandingPage />} />
//           <Route path='/components/AllData/AllData' element={<AllData />} />
//         </Routes>
//       </BrowserRouter>
//     </div>
//   )
// }

// export default App


import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import AllData from './components/AllData/AllData';
import HeaderSelect from './components/headerSelection/HeaderSelect';
import Footer from './components/Footer/Footer';


const App = () => {
  return (
    <div>
      <BrowserRouter>
      {<HeaderSelect />}
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/components/AllData/AllData' element={<AllData />} />
        </Routes>
        {<Footer/>}
      </BrowserRouter>
    </div>
  )
}


export default App