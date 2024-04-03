// import React from 'react';
// import './Footer.css'; // Import your CSS file for styling
// import crean from '../../images/crean.jpeg'

// function Footer() {
//   return (
//     <footer className="footer">
//       <div className="footer-content">
//         <div className="footer-left">
//           <span><img src={crean} alt='crean' style={{ height: "50px", width: "70px", borderRadius: "10px" }} /></span>
//         </div>
//         {/* <div className="footer-center">
//           <h3>Quick Links</h3>
//           <ul>
//             <li><a href="/">Home</a></li>
//             <li><a href="/about">About</a></li>
//             <li><a href="/services">Services</a></li>
//             <li><a href="/contact">Contact</a></li>
//           </ul>
//         </div> */}
//         <div className="footer-right">
//           <h3>Contact Us</h3>
//           <p>Email: info@yourcompany.com</p>
//           <p>Phone: +1234567890</p>
//         </div>
//       </div>
//       <div className="footer-bottom">
//         <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
//       </div>
//     </footer>
//   );
// }

// export default Footer;

import React from 'react';
import './Footer.css'; // Import your CSS file for styling
import crean from '../../images/crean.jpeg'


function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
            <img src="https://imgs.search.brave.com/gZDGkeDHgN9jBzqeH2gbF0fblp4Q2ItYvwo1VkdULBM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2M5L2Vm/LzRkL2M5ZWY0ZDhl/ZWEzYjlhZTMyMmMw/MTYzNDgwYmU3Yzdj/LmdpZg.gif" className='mg-srci' />
        </div>


        <div className="footer-center">
          <h3 style={{margin:'-5px 0'}}>Contact Us</h3>
          <p style={{margin:'-5px 0'}}>Email: info@yourcompany.com</p>
          <p style={{margin:'-5px 0'}}>Phone: +1234567890</p>
         </div>
        <div className="footer-right" >
         <a href="#"> <img className="mg-srci-2" src='https://download.logo.wine/logo/Instagram/Instagram-Logo.wine.png' /></a>
         <a href="#"><img  className="mg-srci-2" src='https://www.pngguru.in/storage/uploads/images/Facebook%20icon%20png%20transparent_1657731707_37226539.webp' /></a>  
       
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
}


export default Footer;