import React from 'react'
import { styled } from 'styled-components';

function Info() {
    return (
        <Container className='ed-info'>
           <div className="wrapper">
              <div className="block">
                <div className="block-text">
                <h1>Assista o poder da melhor plataforma educacional de Angola <img  style={{width:"40px",height:"40px",marginLeft:"10px"}} src="https://images.emojiterra.com/google/noto-emoji/unicode-15/color/svg/1f1e6-1f1f4.svg" alt="" />  </h1>
                 </div>
                   <iframe src="https://www.youtube.com/embed/owkX6ei8FYM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                 </div>
           </div>
        </Container>
     )
   }
   
   
   const Container = styled.div`
     min-height:600px;
     width:100%;
     background:#ebf5fe;


       .block{
          padding:40px 20px;
          
          .block-text{
              max-width:1000px;
              text-align:center;
              margin:0 auto; 

              
         h1{ 
            font-size:35px;
            letter-spacing:1px;
            line-height:50px;
            font-weight:bolder;
            margin-bottom:20px;
            color:#2f1c6a;
       }
 

          }

          iframe{
              width:100%;
              height:700px;
          }
       }
   `;
   

export default Info
