import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import {BiMenuAltRight} from "react-icons/bi";
import {FaTimes} from "react-icons/fa";
const LogoImg = require("../../Assets/images/logo.png");

function Navbar() {
const [show, SetShow] = useState(false);


  return (
    <Container>
         <div className="wrapper">
              <div className="navbar-items">
                   <Link to="#"> 
                     <div className="logo">
                           <img src={LogoImg} alt="eduallsys" />
                      </div>
                    </Link>
                    <div className="navbar-menu">
                        <div className="toggle-btn"  onClick={()=>SetShow(true)} ><BiMenuAltRight/></div>
                        <div className={!show ? "menu-content" : "menu-content show" }>
                        <div className="toggle-btn" onClick={()=>SetShow(false)}><FaTimes/></div>
                            <ul>
                                <li><Link to="#">Informações</Link></li>
                                <li><Link to="#">Demonstração</Link></li> 
                                <li><Link to="#">Modulos &  Preçarios</Link></li> 
                            </ul>
                            <div className="ed-flex">
                                <button className="btn bg-white text-dark">Contactos</button>
                            </div>
                        </div>
                    </div>
              </div>
              <hr />
         </div>
    </Container>
  )
}

const Container = styled.div`
    width:100%;
    height:120px; 
    display:flex;
    align-items:center;
    justify-content:center;
    position:relative;
    z-index:1000;

    hr{
        border-color:var(--ed-silver-light);
    }

    .navbar-items{
        height:100%;  
        display:flex;
        align-items:center;
        justify-content:space-between;
        padding:0px 20px;

        .navbar-menu, .menu-content{
            display:flex;
            align-items:center;

              .toggle-btn{
                   display:none;
              }
        }

        
        .logo{
            img{
                max-height:50px; 
            }
        }

        button{ 
            border-radius:30px;
            padding:15px 20px;  
        }

        ul{
            display:flex;
            padding:0px;
            padding:0px;
            margin:0px;

              li{
                  list-style:none;
                  font-size:18px;
                    
                  a{
                      margin:0px 10px;
                      color:var(--ed-white);
                  }
              }
        }


    }
`;


export default Navbar
