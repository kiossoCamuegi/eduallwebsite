import React from 'react'
import { styled } from 'styled-components';


const Images = [
   require("../../Assets/images/6.png"),
   require("../../Assets/images/7.png"),
   require("../../Assets/images/3.png"),
   require("../../Assets/images/4.png"),
   require("../../Assets/images/5.png"),
]

function Description() {
    return (
        <Container className='ed-description'>
           <div className="wrapper">
                <div className="content">
                <div className="block-text"> 
                     <h1>A melhor plataforma para aprendizado e  gestão geral da  instituição</h1> 
                     <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio in iste sint quidem eos asperiores. 
                        Pariatur optio fuga repellat perferendis cum neque quibusdam est autem, assumenda, aliquam, doloribus enim 
                        perspiciatis.
                     </p>
                  </div> 
                   <div className="ed-wrap">
                   <div className="block-image b1">
                        <img src={Images[0] } alt="" />
                     </div>
                     <div className="block-image b2">
                        <img src={Images[1] } alt="" />
                     </div>
                   </div> 
                </div>
           </div>
        </Container>
     )
   }
   
   
   const Container = styled.div`
     min-height:600px;
     width:100%;
     background:var(--ed-white);

       .content{
           display:block;
           margin:40px 0px; 
           padding:20px;

             .block-text{  
                 padding-left:20px;
                 max-width:1000px;
                 text-align:center;
                 margin:0 auto;

                  h1{
                       font-size:35px;
                       letter-spacing:1px;
                       line-height:50px;
                       font-weight:bolder;
                  }

                  p{
                     color:var(--ed-grey-text);
                     font-size:16px;
                     letter-spacing:1px;
                     max-width:900px;
                     margin-bottom:40px;
                  }
             }

          .ed-wrap{
            display:flex;
            justify-content:space-around;


            .block-image{ 
               width:48%;
               background-color:var(--ed-purple-light); 
               display:flex;
               justify-content:flex-end; 
               padding-top:50px;
               padding-left:50px;
               height:450px;
               border-radius:10px;


                 img{
                    width:100%;  
                    height:100%;
                    border-top-left-radius:10px;
                    box-shadow:var(--ed-shadow-df);
                 }
             } 


          }
              
       }
   `;
   

export default Description
