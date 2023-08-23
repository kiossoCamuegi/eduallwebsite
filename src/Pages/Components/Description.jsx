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
                     <h1>Por que escolher a eduallsys ao inves do papel ? </h1>  
                     <ul>
                         <li>
                             <div className="title">1</div>
                            <p>Eficiência sem esforço: dê adeus às tarefas administrativas demoradas, Complicadas economize papeis e tempo. O EDUALLSYS automatiza 
                              atendimento, avaliação e comunicação com os alunos e encarregados de educação.</p>
                         </li>
                         <li>
                             <div className="title">2</div>
                            <p>Integração perfeita: A transição para o EDUALLSYS é perfeita – o nosso software integra-se facilmente aos seus sistemas existentes.
                               Sua interface intuitiva garante que funcionários e alunos se adaptem rapidamente e prosperem.</p>
                         </li>
                         <li>
                             <div className="title">3</div>
                            <p>Segurança: Fique tranquilo sabendo que o software EDUALLSYS emprega medidas de segurança de alto nível. Nossa criptografia avançada e 
                              protocolos seguros mantêm dados confidenciais protegidos contra qualquer acesso não autorizado.</p>
                         </li>
                         <li>
                             <div className="title">4</div>
                            <p>Sua Visão, Seu Sistema: Celebramos a singularidade de cada instituição. O EDUALLSYS pode ser adaptado às suas necessidades específicas,
                               oferecendo uma solução personalizada que  complementa perfeitamente os seus processos.(Podemos ajustar a solução de acordo a sua instituição)
                               </p>
                         </li>
                     </ul>
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
                 text-align:left;
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



                   ul{
                       display:flex;
                       flex-wrap:wrap;
                       padding:0px;
                       margin-top:20px;
                       justify-content:space-between;

                       li{
                          width:48%;
                          display:flex;
                          margin:10px 0px;

                             .title{
                                  width:40px;
                                  height:40px;
                                  min-width:40px;
                                  min-height:40px;
                                  display:flex;
                                  align-items:center;
                                  justify-content:center;
                                  background:var(--ed-purple-light);
                                  margin-right:10px;
                                  display:flex;
                                 align-items:center;
                                 justify-content:center;
                                 border-radius:100%;
                                 font-size:20px;
                                 color:#ffff;
                             }
                       }
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
