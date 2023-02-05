import logo from './logo.svg';
import './App.css';
import React,{useEffect} from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
function App() {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Bar Chart',
      },
    },
  };
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: labels.map(() => Math.random() * (1000 - 1) + 1),
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Dataset 2',
        data: labels.map(() => Math.random() * (1000 - 1) + 1),
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };
  //show sidebar of desktop (blue)
    const showNavbar = (toggleId, navId, bodyId, headerId) => {
    const toggle = document.getElementById(toggleId),
      nav = document.getElementById(navId),
      bodypd = document.getElementById(bodyId),
      headerpd = document.getElementById(headerId);

    // Validate that all variables exist
    if (toggle && nav && bodypd && headerpd) {
      // toggle.addEventListener("click", () => {
        // show navbar
        nav.classList.toggle("showw");
        // change icon
        toggle.classList.toggle("bx-x");
        // add padding to body
        bodypd.classList.toggle("body-pd");
        // add padding to header
        headerpd.classList.toggle("body-pd");
      // });
    }
  };
  useEffect(() =>{
    
  });
  return (
    <div>
     {/*  mobile drawer start */}
     <div className="offcanvas offcanvas-start" id="demo" style={{width: "272px"}}>
        <div className="offcanvas-header">
          <h1 className="offcanvas-title">Heading</h1>
          <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas"></button>
        </div>
        <div className="offcanvas-body">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Link</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><hr className="dropdown-divider"/></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</a>
                </li>
              </ul>
              <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit">Search</button>
              </form>
        </div>
      </div>
       {/*  mobile drawer end */}
    
    
    
    
      <div>    
    <header className="header" id="header">
      <div className="header_toggle">
        <i className="bx bx-menu laptop-menu-icon " onClick={() => {showNavbar("header-toggle", "nav-bar", "body-pd", "header")}} id="header-toggle"></i>
        <i className="bx bx-menu mobile-menu-icon"  data-bs-toggle="offcanvas" data-bs-target="#demo" ></i>
       
      </div>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Navbar</a>
       
        
      </div>
    </header>




    {/* desktop  drawer start */}
    <div className="l-navbar" id="nav-bar">
      <nav className="nav">
        <div>
          <a href="#" className="nav_logo">
            <i className="bx bx-layer nav_logo-icon"></i>
            <span className="nav_logo-name">BBBootstrap</span>
          </a>
          <div className="nav_list">
            <a href="#" className="nav_link active">
              <i className="bx bx-grid-alt nav_icon"></i>
              <span className="nav_name">Dashboard</span>
            </a>
            <a href="#" className="nav_link">
              <i className="bx bx-user nav_icon"></i>
              <span className="nav_name">Users</span>
            </a>
            <a href="#" className="nav_link">
              <i className="bx bx-message-square-detail nav_icon"></i>
              <span className="nav_name">Messages</span>
            </a>
            <a href="#" className="nav_link">
              <i className="bx bx-bookmark nav_icon"></i>
              <span className="nav_name">Bookmark</span>
            </a>
            <a href="#" className="nav_link">
              <i className="bx bx-folder nav_icon"></i>
              <span className="nav_name">Files</span>
            </a>
            <a href="#" className="nav_link">
              <i className="bx bx-bar-chart-alt-2 nav_icon"></i>
              <span className="nav_name">Stats</span>
            </a>
          </div>
        </div>
        <a href="#" className="nav_link">
          <i className="bx bx-log-out nav_icon"></i>
          <span className="nav_name">SignOut</span>
        </a>
      </nav>
    </div>

    {/* desktop  drawer end */}


    {/* main container middle area start */}
    <div className="height-100 bg-light">
      <h4>Main Components</h4>
      <div className="container-fluid " >
        <div className="row">
          <div className="col-lg-3 col-xl-3 col-md-6 col-sm-6 col-12" >
             <div className="card bg-card-shadow" >
                 <div className="card-body">
                   <h5 className="card-title">Student</h5> 
                   <div className="icon-bg">
                       <i className="fa fa-graduation-cap icons-card" aria-hidden="true"></i>
                     </div> 
                   <p className="card-text">Count <span>1</span></p>
                   <a href="#" className="btn btn-link card-button">Go somewhere</a>
                 </div>
               </div>
          </div>
 
          <div className="col-lg-3 col-xl-3 col-md-6 col-sm-6 col-12">
             <div className="card bg-card-shadow">
                 <div className="card-body">
                   <h5 className="card-title">Tutor</h5>   
                   <div className="icon-bg" style={{backgroundColor: "#ab8788"}}>
                       <i className="fa fa-user icons-card" aria-hidden="true" ></i>
                     </div>
                   <p className="card-text">Count  <span>2</span></p>
                   <a href="#" className="btn btn-link card-button">Go somewhere</a>
                 </div>
               </div>
          </div>
 
          <div className="col-lg-3 col-xl-3 col-md-6 col-sm-6 col-12">
             <div className="card bg-card-shadow">
                 <div className="card-body">
                   <h5 className="card-title">Course</h5> 
                   <div className="icon-bg" style={{backgroundColor: "#d1aa89"}}>
                       <i className="fa fa-list-alt icons-card" aria-hidden="true" ></i> 
                 </div>
                   <p className="card-text">Count  <span>5</span></p>
                   <a href="#" className="btn btn-link card-button">Go somewhere</a>
                 </div>
               </div>
          </div>
 
          <div className="col-lg-3 col-xl-3 col-md-6 col-sm-6 col-12">
             <div className="card bg-card-shadow">
                 <div className="card-body">
                   <h5 className="card-title">Newtutor</h5> 
                   <div className="icon-bg" style={{backgroundColor: "#70a8ae"}}>
                       <i className="fa fa-user icons-card" aria-hidden="true" ></i>
                     </div>
                   <p className="card-text">Count  <span>2</span></p>
                   <a href="#" className="btn btn-link card-button">Go somewhere</a>
                 </div>
               </div>
          </div>
 
        </div>
          <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Launch demo modal
          </button>
        </div>
        <Bar options={options} data={data} />

          <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                  ...
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="button" className="btn btn-primary">Save changes</button>
                </div>
              </div>
            </div>
          </div>



    </div>
    {/* main container middle area end */}
    </div>
    </div>
  );
}

export default App;
