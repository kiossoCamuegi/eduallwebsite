import React from 'react'
import { styled } from 'styled-components';
import {BsYoutube, BsLinkedin, BsFacebook} from "react-icons/bs";
import {MdEmail} from "react-icons/md";

function Footer() {
  return (
    <Container>
       <div className="wrapper">
           <ul className="footer-links"> 
              <a href="https://www.facebook.com/profile.php?id=61550765183432" target="_blank" rel="noopener noreferrer"><li><BsFacebook/></li></a>
              <a href="#" target="_blank" rel="noopener noreferrer"><li><BsLinkedin/></li></a>
              <a href="https://www.youtube.com/@eduallstartup" target="_blank" rel="noopener noreferrer"><li><BsYoutube/></li></a>
              <a href="mailto:eduallsys@gmail.com"><li><MdEmail/></li></a> 
           </ul> 
           <div className="footer-text">
               <div className="ct-item">+244 925 459 395</div>
               <div className="ct-item">+244 953 472 705</div>
               <div className="ct-item">eduallsys@gmail.com</div>
               <div className="ct-item">Angola-Luanda | Viana, Bairro Luanda Sul - 4 Campos</div>
           </div>
       </div>
    </Container>
 )
}


const Container = styled.div`
 min-height:100px;
 width:100%; 
 border-top:1px solid var(--ed-silver-light);
 background:#ebf5fe;
 margin-top:40px;

 .footer-text{
     padding:10px 0px;
     display:flex;
     flex-wrap:wrap;
     align-items:center;
     justify-content:center;
     border-top:1px solid var(--ed-silver); 
       .ct-item{
            margin:15px;
       }
 }

    .footer-links{ 
       display:flex;
       align-items:center;
       justify-content:center;
       margin:0px;
       padding:20px;
       padding-bottom:10px;

         li{
          display:flex;
          align-items:center;
          justify-content:center;
          font-size:18px;
           margin:10px;
           list-style:none;
           border:1px solid #2f1c6a;
           width:60px;
           height:60px;
           border-radius:100%;

            svg{
               fill:#2f1c6a;
               width:20px;
               height:20px;
            }
            
         }
    }
`;

export default Footer
