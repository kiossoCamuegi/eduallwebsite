import React from 'react'
import { styled } from 'styled-components'
import Navbar from './Navbar';
import { BsArrowRight} from "react-icons/bs";

const Images = [
    require("../../Assets/images/1.png"),
    require("../../Assets/images/2.png"),
    require("../../Assets/images/3.png"),
    require("../../Assets/images/4.png"),
    require("../../Assets/images/5.png"),
]

function Header() {
  return (
     <Container className='ed-header' >
        <div className='header-animated'> 
        <div>
            <div className="squares">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li> 
            </div>
           <Navbar/>
         <div className="header-content">
         <div className="wrapper">
            <div className="header-text"> 
              <h1>Elevando a Educação e Capacitando Futuros. </h1>
                <p>Desbloqueie o futuro da gestão educacional com o SOFTWARE de Gestão Escolar  EDUALLSYS  e encontre tudo o que precisa para gerir a sua Instituição de ensino de ponta a ponta.</p>
                <button className="btn">Solicitar Demo <BsArrowRight/>  </button> 
            </div>  
            <div className="header-image">
                <img src={Images[0]} className='main' alt="" /> 
                <div className="header-image-item i1">
                   <img src={Images[3]} alt="" />
                </div>
                <div className="header-image-item i2">
                    <img src={Images[1]}alt="" />
                </div>
           </div>   
           </div>  
        </div> 
        </div>
        </div> 
        <div className="col-lg-12">
            <div className="wrapper"> 
               <div className="ed-wrap">
                   <div><h1> +50 Clientes</h1></div>
                   <div><h1> +450 Recursos</h1></div>
                   <div><h1> +40 idiomas</h1></div>
                   <div><h1> +987.000 visitas</h1></div>
               </div>
            </div>
        </div>
     </Container>
  )
}


const Container = styled.div` 
  width:100%; 
  background: var(--ed-purple-light); 
  overflow:hidden;


 .header-content{
  display:flex; 
  align-items:flex-end;  
  height:650px; 

  .wrapper{
      display:flex;
  }
        
  .header-image{
    width:100%;
    max-width:900px;
    border:10px solid red;
    border-bottom:0px;
    height:530px;  
    margin:0 auto;
    border-top-right-radius:20px;
    border-top-left-radius:20px;
    border-color:#e7e5ff;
    position:relative; 
    margin-right:-200px;
 

    .header-image-item{
        position:absolute; 
        width:250px;
        height:140px;    
        border:6px solid #e7e5ff;
        border-radius:20px;
        background: var(--ed-white);  
        box-shadow:var(--ed-shadow-2); 

          img{
              width:100%;
              height:100%;
              border-radius:20px;
              background:var(--ed-white); 
              object-fit:contain;
          }
    }

    .header-image-item.i1{
      left:150px;
      top:-70px;
      transform:scale(1.1);  
    }

    .header-image-item.i2{
      left:-100px;
      bottom:50px; 
    }

   .main{
      background:var(--ed-white);
      width:100%;
      height:100%; 
      border-top-left-radius:10px;
     
     } 
    }



    .header-text{
        text-align:left;
        color:var(--ed-white); 
        z-index:1000;
        position:relative;
        padding-top:40px;
        padding-left:20px;
        height:100%;
        min-height:500px; 

         h1{
              color:var(--ed-white);
              font-size:50px;
              max-width:750px;
         }

         p{
            font-size:16px;
           letter-spacing:1px;
           max-width:600px;
           font-weight:400 !important;
         }

         button{
            background:transparent;
            border-radius:30px;
            padding:15px 20px; 
            border:2px solid var(--ed-white);
            color:var(--ed-white);

              svg{
                 margin-left:10px;
              }
         }

    }

    } 


  .col-lg-12{
      background:#ebf5fe;
      height:100px; 

      .wrapper{
        height:100%;
        display:flex;
        align-items:center;  

         .ed-wrap{
            width:100%;
            display:flex;
            align-items:center;
            justify-content:space-around;

              h1{
                font-size:35px;
                letter-spacing:1px;
                line-height:50px;
                font-weight:bolder;
                margin:0px 20px;
              }
         }
      }
  }
`;

export default Header