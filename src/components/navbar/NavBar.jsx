// import style from "./NavBar.module.css";
import {Link} from 'react-router-dom'


import './Navbar.css';



 const NavBar = () => {

   return(
      <>
      <nav>
      <div className="wrapper">
         <div className="logo"><Link>Softcadia</Link></div>


         <ul className="nav-links">
            {/* for instructions */}
         <li>
            <Link>Institutions</Link>
            <div className="mega-box">
               <div className="content">

               <div className="row">
                     <img src="footerImg.jpg" alt="" />
                  </div>
                  <div className="row">
                     {/* <header>design service</header> */}
                     <ul className="mega-links">
         <li><Link>AI</Link></li>
         <li><Link>Interactive</Link></li>
         <li><Link>Blogs</Link></li>
         <li><Link>Cloud</Link></li>
                     </ul>
                  </div>

                  <div className="row">
                     {/* <header>email service</header> */}
                     <ul className="mega-links">
         <li><Link>Competitive Agility</Link></li>
         <li><Link>Covid-19</Link></li>
         <li><Link>Customer Experience</Link></li>
         <li><Link>Future Systems</Link></li>
                     </ul>
                  </div>

                  <div className="row">
                     {/* <header>security service</header> */}
                     <ul className="mega-links">
         <li><Link>Future Workforce</Link></li>
         <li><Link>Industry x</Link></li>
         <li><Link>IT Security</Link></li>
         <li><Link>Podcasts</Link></li>
                     </ul>
                  </div>

               </div>
            </div>         
         </li>

         {/* for services */}
         <li>
            <Link>Services</Link>

            <div className="mega-box">
               <div className="content">

               <div className="row">
                     <img src="footerImg.jpg" alt="" />
                  </div>
                  <div className="row">
                     {/* <header>design service</header> */}
                     <ul className="mega-links">
         <li><Link>Application Services</Link></li>
         <li><Link>Buisness Process</Link></li>
         <li><Link>Buisness Strategy</Link></li>
         <li><Link>Change Management</Link></li>
                     </ul>
                  </div>

                  <div className="row">
                     {/* <header>email service</header> */}
                     <ul className="mega-links">
         <li><Link>Customer Experience</Link></li>
         <li><Link>Data and Analytics</Link></li>
         <li><Link>Ecosystem Partners</Link></li>
         <li><Link>Finance Consulting</Link></li>
                     </ul>
                  </div>

               </div>
            </div>         
         </li>
         
         {/* for industries */}

         <li>
            <Link>Careers</Link>
            <ul className="drop-down">
         <li><Link to="/jobs">Jobs</Link></li>
         <li><Link to="/trainingscar">Training</Link></li>
            </ul>
         </li>
         <li>
            <Link>Industries</Link>
            <div className="mega-box">
               <div className="content">

               <div className="row">
                     <img src="footerImg.jpg" alt="" />
                  </div>
                  <div className="row">
                     {/* <header>design service</header> */}
                     <ul className="mega-links">
         <li><Link>Aerospace & Deffence</Link></li>
         <li><Link>Automotive</Link></li>
         <li><Link>Banking</Link></li>
         <li><Link>Capital Markets</Link></li>
         <li><Link>Chemicals</Link></li>
         <li><Link>Communication & Media</Link></li>
                     </ul>
                  </div>

                  <div className="row">
                     {/* <header>email service</header> */}
                     <ul className="mega-links">
         <li><Link>Customer goods & services</Link></li>
         <li><Link>Energy</Link></li>
         <li><Link>Health</Link></li>
         <li><Link>High Tech x</Link></li>
         <li><Link>Industrial Equipment</Link></li>
         <li><Link>Insurance</Link></li>
                     </ul>
                  </div>

                  <div className="row">
                     {/* <header>security service</header> */}
                     <ul className="mega-links">
         <li><Link>Life Sciences</Link></li>
         <li><Link>Natural Resources</Link></li>
         <li><Link>Public Services</Link></li>
         <li><Link>Cloud Service</Link></li>
         <li><Link>Software and platforms</Link></li>
         <li><Link>Travel</Link></li>
                     </ul>
                  </div>

               </div>
            </div>
         </li>
         <li>
            
         </li>
         <li><Link>Who we are</Link>
         <ul className="drop-down">
         <li><Link>Case Studies</Link></li>
         <li><Link>Inclusion & Diversity</Link></li>
         <li><Link>Investor Relations</Link></li>
            </ul></li>
         </ul>
      </div>
      </nav>
      </>
   )
   }

   export default NavBar;







   // import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import { useState } from "react";
// // const NavBar = () => {

//   return (
//     <>
//       <nav>
       
//        <h2 className={style.head} ><img src="logo.jpg" alt=""  className={style.logo}/>Soft<span className={style.head1}><Link to='/'>Cadi@</Link></span></h2>
//         <div className={style.menubar}>
//           <ul>
//             <li>
//               INTUITION
//               <div className={style.submenu1}>
//               <ul className={style.sub2}>
//                 <li>
//                   <a href="">AI</a>
//                 </li>
//                 <li>
//                   <a href="">INTERACTIVE</a>
//                 </li>
//                 <li>
//                   <a href="">BLOGS</a>
//                 </li>
//                 <li>
//                   <a href="">CLOUD</a>
//                 </li>
//                 <li>
//                   <a href="">COMPETITIVE AGILITY</a>
//                 </li>
//                 <li>
//                   <a href="">COVID-19</a>
//                 </li>
//                 <li>
//                   <a href="">CUSTOMER EXPERIENCE</a>
//                 </li>
//                 <li>
//                   <a href="">FUTURE SYSTEM</a>
//                 </li>
//                 <li>
//                   <a href="">FUTURE WORKFORCE</a>
//                 </li>
//                 <li>
//                   <a href="">INDUSTRY X</a>
//                 </li>
//                 <li>
//                   <a href="">IT SECURITY</a>
//                 </li>
//                 <li>
//                   <a href="">PODCASTS</a>
//                 </li>
//               </ul>
//               </div>
//             </li>
//             <li>
//               SERVICE
//               <div className={style.submenu1}>
//               <ul className={style.sub2}>
//                 <li>
//                   <a href="">APPLICATION SEVICES</a>
//                 </li>
//                 <li>
//                   <a href="">ARTIFICIAL INTELLIGENCE</a>
//                 </li>
//                 <li>
//                   <a href="">BUSINESS PROCESS OUTSOURCING</a>
//                 </li>
//                 <li>
//                   <a href="">BUSINESS STRATEGY</a>
//                 </li>
//                 <li>
//                   <a href="">CHANCE MANAGEMENT</a>
//                 </li>
//                 <li>
//                   <a href="">CLOUD</a>
//                 </li>
//                 <li>
//                   <a href="">CUSTOMER EXPERIENCE</a>
//                 </li>
//                 <li>
//                   <a href="">DATA AND ANALYTICS</a>
//                 </li>
//                 <li>
//                   <a href="">ECOSYSTEM PARTNERS</a>
//                 </li>
//                 <li>
//                   <a href="">FINANCE CONSULTING</a>
//                 </li>
//               </ul>
//               </div>
//             </li>
//             <li>
//               BUSINESS
//               <div className={style.submenu1}>
//               <ul className={style.sub2}>
//                 <li>
//                   <a href="">AEROSPACE AND DEFENSE</a>
//                 </li>
//                 <li>
//                   <a href="">AUTOMOTIVE</a>
//                 </li>
//                 <li>
//                   <a href="">BANKING</a>
//                 </li>
//                 <li>
//                   <a href="">CAPITAL MARKETS</a>
//                 </li>
//                 <li>
//                   <a href="">CHEMICALS</a>
//                 </li>
//                 <li>
//                   <a href="">COMMUNICATION AND MEDIA</a>
//                 </li>
//                 <li>
//                   <a href="">CONSUMER GOODS AND SERVICES</a>
//                 </li>
//                 <li>
//                   <a href="">ENERGY</a>
//                 </li>
//                 <li>
//                   <a href="">HEALTH</a>
//                 </li>
//                 <li>
//                   <a href="">HIGH TECH</a>
//                 </li>
//                 <li>
//                   <a href="">INDUSTRIAL EQUIPMENT</a>
//                 </li>
//                 <li>
//                   <a href="">INSURENCE</a>
//                 </li>
//                 <li>
//                   <a href="">LIFE SCIENCES</a>
//                 </li>
//                 <li>
//                   <a href="">NATURAL RESOURCES</a>
//                 </li>
//                 <li>
//                   <a href="">PUBLIC SERVICES</a>
//                 </li>
//                 <li>
//                   <a href="">SOFTWARE AND PLATFORM</a>
//                 </li>
//                 <li>
//                   <a href="">TRAVEL</a>
//                 </li>
//               </ul>
//               </div>
//             </li>
//             <li>
//               CAREERS
//               <div className={style.submenu1}>
//               <ul className={style.sub2}>
//                 <li>
//                  <Link to="/jobs">JOBS</Link>
//                 </li>
//                 <li>
//                   <Link to="/trainingscar" >TRAININGS</Link>
//                 </li>
//               </ul>
//               </div>
//             </li>
//             <li>
//               WHO WE ARE
//               <div className={style.submenu1}>
//               <ul className={style.sub2}>
//                 <li>
//                   <a href="">CASE STUDIES</a>
//                 </li>
//                 <li>
//                   <a href="">INCLUSION AND DIVERSITY</a>
//                 </li>
//                 <li>
//                   <a href="">INVESTOR RELATIONS</a>
//                 </li>
               
//               </ul>
//               </div>
//             </li>
//             <li>
//             <AccountCircleIcon /> User
//             <div className={style.submenu1}>
//               <ul className={style.sub2}>
//                 <li>
//                 <Link to="/usersignup" > Create Account
//                 </Link>
//                 </li>
//             <li>
//               <Link to="/usersignin">Login</Link>
//             </li>
//                 </ul>
//                 </div>
//                 </li>
//           </ul>
//         </div>
//       </nav>
//     </>
//   );
// };
// export default NavBar;

// const Navbar = () => {
//   const [dropdown1, setDropdown1] = useState(false);
//   const [dropdown2, setDropdown2] = useState(false);
//   const [dropdown3, setDropdown3] = useState(false);
//   const [dropdown4, setDropdown4] = useState(false);
//   const [dropdown5, setDropdown5] = useState(false);

//   const toggleDropdown = (dropdown) => {
//     switch (dropdown) {
//       case 1:
//         setDropdown1(!dropdown1);
//         break;
//       case 2:
//         setDropdown2(!dropdown2);
//         break;
//       case 3:
//         setDropdown3(!dropdown3);
//         break;
//       case 4:
//         setDropdown4(!dropdown4);
//         break;
//       case 5:
//         setDropdown5(!dropdown5);
//         break;
//       default:
//         break;
//     }
//   };

//   return (
//     <nav className="navbar">
//       <div className="logo">Logo</div>
//       <ul className="nav-list">
//         <li onClick={() => toggleDropdown(1)}>
//           Item 1
//           {dropdown1 && (
//             <ul className="dropdown-menu">
//               <li>Dropdown Item 1</li>
//               <li>Dropdown Item 2</li>
//               <li>Dropdown Item 3</li>
//             </ul>
//           )}
//         </li>
//         <li onClick={() => toggleDropdown(2)}>
//           Item 2
//           {dropdown2 && (
//             <ul className="dropdown-menu">
//               <li>Dropdown Item 1</li>
//               <li>Dropdown Item 2</li>
//               <li>Dropdown Item 3</li>
//             </ul>
//           )}
//         </li>
//         <li onClick={() => toggleDropdown(3)}>
//           Item 3
//           {dropdown3 && (
//             <ul className="dropdown-menu">
//               <li>Dropdown Item 1</li>
//               <li>Dropdown Item 2</li>
//               <li>Dropdown Item 3</li>
//             </ul>
//           )}
//         </li>
//         <li onClick={() => toggleDropdown(4)}>
//           Item 4
//           {dropdown4 && (
//             <ul className="dropdown-menu">
//               <li>Dropdown Item 1</li>
//               <li>Dropdown Item 2</li>
//               <li>Dropdown Item 3</li>
//             </ul>
//           )}
//         </li>
//         <li onClick={() => toggleDropdown(5)}>
//           Item 5
//           {dropdown5 && (
//             <ul className="dropdown-menu">
//               <li>Dropdown Item 1</li>
//               <li>Dropdown Item 2</li>
//               <li>Dropdown Item 3</li>
//             </ul>
//           )}
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   return (
//     <div className={`container ${menuOpen ? 'menu-open' : ''}`}>
//       <div className="navbar">
//         <div className="logo">Logo</div>
//         <div className={`menu-icon ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
//           <div className="bar"></div>
//           <div className="bar"></div>
//           <div className="bar"></div>
//         </div>
//       </div>
//       <div className={`off-canvas ${menuOpen ? 'open' : ''}`}>
//         <ul className="nav-list">
//           <li><a href="/">Home</a></li>
//           <li className="dropdown">
//             <a href="/">Dropdown 1</a>
//             <div className="dropdown-content">
//               <a href="/">Option 1</a>
//               <a href="/">Option 2</a>
//               <a href="/">Option 3</a>
//             </div>
//           </li>
//           <li className="dropdown">
//             <a href="/">Dropdown 2</a>
//             <div className="dropdown-content">
//               <a href="/">Option 1</a>
//               <a href="/">Option 2</a>
//               <a href="/">Option 3</a>
//             </div>
//           </li>
//           <li><a href="/">Services</a></li>
//           <li><a href="/">Contact</a></li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
