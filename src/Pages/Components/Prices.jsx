import React from 'react'
import { styled } from 'styled-components'; 
import {FaTimes,FaCheck} from "react-icons/fa";

function Prices() {

    const CardsData = [
        {
            title:"Padrão",
            popular:false,
            price:"69.999",
            promo_price:"48.999",
            percentage:"30%",
            description:"Tudo que você precisa para gerir a sua escola ou creche",
            features:[
                {
                    area:"Melhores recursos",
                     data:[
                         {title:"Secretaria", span:" e admnistração", active:true},   
                         {title:"Pagamentos", span:" de propinas e relatorios", active:true},   
                         {title:"Area pedagogica", span:" e portal do professor", active:false},    
                         {title:"Aréa financeira", span:" e controle dividas", active:false}, 
                         {title:"Portal do encarregado", span:" e  do estudante", active:false}, 
                         {title:"Sistema de gestão", span:"de stock", active:false}, 
                         {title:"Biblioteca", span:" e transporte", active:false},     
                     ] 
                 }, 
                {
                    area:"Secretária",
                     data:[
                        {title:"Cadastramento de estudantes", span:" e gestão", active:true},  
                        {title:"Efectuar matricula", span:" e confirmações", active:true},   
                        {title:"Solicitação de anulação", span:"de matriculas", active:true},
                        {title:"Solicitação de transferencia", span:"e controle", active:true}, 
                        {title:"Solicitar Declarações", span:"e controle", active:true},
                        {title:"Cadastramento de encarregados", span:"e gestão", active:true},   
                        {title:"Extratros ", span:"e  relatorios", active:true}, 
                     ] 
                 },
                 {
                    area:"Admnistração",
                     data:[  
                        {title:"Emição de cartão escolar", span:"e controle", active:true},
                        {title:"Emição de comunicado / avisos", span:"e gestão", active:true},   
                        {title:"Serviço de SMS ", span:"e  email", active:true}, 
                     ] 
                 },  
                 {
                    area:"Finanças",
                     data:[
                         {title:"Sistema de stock", span:"e gestão", active:false},   
                         {title:"Ponto de venda", span:" de produtos", active:false},  
                         {title:"Contas a pagar", span:"e feixo de caixa", active:false},  
                         {title:"Contas a receber", span:"e relatorios", active:false},  
                         {title:"Pagamentos gerais", span:"e serviços", active:false},  
                         {title:"Pagamento de propinas", span:"e dividas", active:true},   
                         {title:"Faturação", span:"e relatorios",active:false},  
                         {title:"Pagamento de transporte", span:"e diversos", active:false},  
                         {title:"Multas , dividas", span:"e Moedas", active:false},    
                         {title:"Dashboard", span:"financeiro", active:false},   
                     ] 
                 },    
                 {
                    area:"Área Pedagógica",
                     data:[
                         {title:"Emição de horarios", span:"e gestão", active:false},  
                         {title:"Gestão de efectividade", span:"e progresso", active:false},   
                         {title:"Atribuição de disciplinas", span:"e controle", active:false},
                         {title:"Plano curricular", span:"e tarefas", active:false},      
                         {title:"Livro de ponto", span:" funcionarios e alunos", active:false},   
                         {title:"Notas", span:"trimestrais", active:false},   
                         {title:"Notas", span:"do recurso", active:false},   
                         {title:"Matriz de", span:"resultados", active:false}, 
                         {title:"Listagem de alunos", span:"por turma", active:false}, 
                         {title:"Mini-pautas", span:"modelos", active:false},       
                         {title:"Mini-pautas", span:"trimestrais", active:false},
                         {title:"Pauta", span:"por turma", active:false}, 
                         {title:"Boletim de notas", span:"individual", active:false},       
                         {title:"Boletim de notas", span:"escolar", active:false},  
                         {title:"Visualizar estatisticas", span:"das notas", active:false},   
                         {title:"Pauta final", span:"do trimestre", active:false},   
                         {title:"Emição de termos", span:" do aluno", active:false},   
                         {title:"Ranking de notas", span:"geral e por turma", active:false},     
                     ] 
                 },   
                 {
                    area:"Transporte",
                     data:[
                         {title:"Cadastramento de pssageiros", span:"e gestão", active:false},    
                         {title:"Cadastramento de rotas", span:"e controle", active:false},   
                         {title:"Registro de viaturas", span:"e controle", active:false}, 
                         {title:"Relatorios", span:"gerais", active:false},    
                     ] 
                 },
                 {
                    area:"Biblioteca",
                     data:[
                         {title:"Criaçãoe publicação", span:"de livros", active:false},   
                         {title:"Cadastamento de", span:"prateleiras",  active:false},   
                         {title:"Cadastamento de", span:"autores",  active:false},   
                         {title:"Cadastamento de", span:"editoras", active:false},   
                         {title:"Emprestimos e", span:"devoluções de livros",  active:false},     
                         {title:"Consulta de", span:"livros", active:false},    
                         {title:"Dashboard", span:"Bibliotecario",  active:false},   
                         {title:"Relatorios", span:"gerais",  active:false},   
                     ] 
                 },       
                 {
                    area:"Portal do professor",
                     data:[
                         {title:"Controle de tarefas", span:"atribuidas", active:false}, 
                         {title:"Gestão de", span:"turmas e estudantes", active:false},   
                         {title:"Avaliação", span:"de comportamento", active:false}, 
                         {title:"Lanaçamento e controle de", span:"notes", active:false}, 
                         {title:"Controle de", span:"presença", active:false},
                         {title:"Criação de cursos", span:"gratuitos", active:false},
                         {title:"Avaliação continua", span:"dos estudantes", active:false},
                         {title:"Material didatico", span:"e aulas", active:false},
                         {title:"Ciação de tarefas", span:"e projectos", active:false},
                         {title:"Aulas privadas", span:"gratuitas", active:false},      
                     ] 
                 },   
                 {
                    area:"Portal do encarregado",
                     data:[
                         {title:"Controle de aprendizado", span:"dos alunos", active:false}, 
                         {title:"Controle de notas", span:"dos alunos", active:false},   
                         {title:"Controle de presença", span:"dos alunos", active:false}, 
                         {title:"Controle de comportamento", span:"dos alunos", active:false}, 
                         {title:"Calendario de aulas", span:"dos alunos", active:false}, 
                         {title:"Progresso dos cursos", span:"dos alunos", active:false}, 
                         {title:"Visualização das", span:"Recomendações", active:false}, 
                         {title:"Controle de avisos", span:"dos alunos", active:false}, 
                         {title:"Status dos projetos e tarefas", span:"dos alunos", active:false}, 
                         {title:"Gestão e controle dos", span:"pagamentos", active:false}, 
                         {title:"Solicitação e reclamações ", span:"na instituição", active:false}, 
                         {title:"Comunicação aberta com ", span:"os professores", active:false},  
                     ] 
                 },    
                 {
                    area:"Portal do aluno",
                     data:[
                        {title:"Controle de aprendizado", span:"individual", active:false}, 
                         {title:"Controle de notas", span:"individual", active:false}, 
                         {title:"Controle de presença", span:"individual", active:false}, 
                         {title:"Controle de comportamento", span:"individual", active:false}, 
                         {title:"Calendario de aulas", span:"individual", active:false}, 
                         {title:"Progresso dos cursos", span:"individual", active:false}, 
                         {title:"Empregos e estagios", span:"por recomendação ", active:false}, 
                         {title:"Aulas", span:"online", active:false}, 
                         {title:"Colaboração em", span:"projetos", active:false}, 
                         {title:"Visualização das", span:"Recomendações", active:false}, 
                         {title:"Controle de avisos", span:"individual", active:false}, 
                         {title:"Status dos projetos e tarefas", span:"individual", active:false}, 
                         {title:"Gestão e controle dos", span:"pagamentos", active:false}, 
                         {title:"Solicitação e reclamações ", span:"na instituição", active:false}, 
                         {title:"Comunicação aberta com ", span:"os professores", active:false},  
                     ] 
                 },        
            ]
        },
        {
            title:"Prateado",
            popular:true,
            price:"109.999",
            promo_price:"65.999",
            percentage:"40%",
            description:"Tudo que você precisa para gerir o seu colegio",
            features:[
                {
                    area:"Melhores recursos",
                     data:[
                        {title:"Secretaria", span:" e admnistração", active:true},   
                        {title:"Pagamentos", span:" de propinas e relatorios", active:true},   
                        {title:"Area pedagogica", span:" e portal do professor", active:true},    
                        {title:"Aréa financeira", span:" e controle dividas", active:true}, 
                        {title:"Portal do encarregado", span:" e  do estudante", active:false}, 
                        {title:"Sistema de gestão", span:"de stock", active:false}, 
                        {title:"Biblioteca", span:" e transporte", active:false},   
                     ] 
                 }, 
                {
                    area:"Secretária",
                     data:[
                        {title:"Cadastramento de estudantes", span:" e gestão", active:true},  
                        {title:"Efectuar matricula", span:" e confirmações", active:true},   
                        {title:"Solicitação de anulação", span:"de matriculas", active:true},
                        {title:"Solicitação de transferencia", span:"e controle", active:true}, 
                        {title:"Solicitar Declarações", span:"e controle", active:true},
                        {title:"Cadastramento de encarregados", span:"e gestão", active:true},   
                        {title:"Extratros ", span:"e  relatorios", active:true}, 
                     ] 
                 },
                 {
                    area:"Admnistração",
                     data:[  
                        {title:"Emição de cartão escolar", span:"e controle", active:true},
                        {title:"Emição de comunicado / avisos", span:"e gestão", active:true},   
                        {title:"Serviço de SMS ", span:"e  email", active:true}, 
                     ] 
                 },  
                 {
                    area:"Finanças",
                     data:[
                         {title:"Sistema de stock", span:"e gestão", active:false},   
                         {title:"Ponto de venda", span:" de produtos", active:true},   
                         {title:"Contas a pagar", span:"e feixo de caixa", active:true},   
                         {title:"Contas a receber", span:"e relatorios", active:true},   
                         {title:"Pagamentos gerais", span:"e serviços", active:true},   
                         {title:"Pagamento de propinas", span:"e dividas", active:true},   
                         {title:"Faturação", span:"e relatorios", active:true},   
                         {title:"Pagamento de transporte", span:"e diversos", active:true},   
                         {title:"Multas , dividas", span:"e Moedas", active:true},   
                         {title:"Dashboard", span:"financeiro", active:true},   
                     ] 
                 },    
                 {
                    area:"Área Pedagógica",
                        data:[
                            {title:"Emição de horarios", span:"e gestão", active:true},  
                            {title:"Gestão de efectividade", span:"e progresso", active:true},   
                            {title:"Atribuição de disciplinas", span:"e controle", active:true},
                            {title:"Plano curricular", span:"e tarefas", active:true},      
                            {title:"Livro de ponto", span:" funcionarios e alunos", active:true},   
                            {title:"Notas", span:"trimestrais", active:true},   
                            {title:"Notas", span:"do recurso", active:true},   
                            {title:"Matriz de", span:"resultados", active:true}, 
                            {title:"Listagem de alunos", span:"por turma", active:true}, 
                            {title:"Mini-pautas", span:"modelos", active:true},       
                            {title:"Mini-pautas", span:"trimestrais", active:true},
                            {title:"Pauta", span:"por turma", active:true}, 
                            {title:"Boletim de notas", span:"individual", active:true},       
                            {title:"Boletim de notas", span:"escolar", active:true},  
                            {title:"Visualizar estatisticas", span:"das notas", active:true},   
                            {title:"Pauta final", span:"do trimestre", active:true},   
                            {title:"Emição de termos", span:" do aluno", active:true},   
                            {title:"Ranking de notas", span:"geral e por turma", active:true},     
                        ] 
                  },   
                 {
                    area:"Transporte",
                     data:[
                        {title:"Cadastramento de pssageiros", span:"e gestão", active:false},    
                        {title:"Cadastramento de rotas", span:"e controle", active:false},   
                        {title:"Registro de viaturas", span:"e controle", active:false}, 
                        {title:"Relatorios", span:"gerais", active:false}, 
                     ] 
                 },
                 {
                    area:"Biblioteca",
                     data:[
                         {title:"Criaçãoe publicação", span:"de livros", active:false},   
                         {title:"Cadastamento de", span:"prateleiras",  active:false},   
                         {title:"Cadastamento de", span:"autores",  active:false},   
                         {title:"Cadastamento de", span:"editoras", active:false},   
                         {title:"Emprestimos e", span:"devoluções de livros",  active:false},     
                         {title:"Consulta de", span:"livros", active:false},    
                         {title:"Dashboard", span:"Bibliotecario",  active:false},   
                         {title:"Relatorios", span:"gerais",  active:false},   
                     ] 
                 },      
                 {
                    area:"Portal do professor",
                     data:[
                         {title:"Controle de tarefas", span:"atribuidas", active:true}, 
                         {title:"Gestão de", span:"turmas e estudantes", active:true},   
                         {title:"Avaliação", span:"de comportamento", active:true}, 
                         {title:"Lanaçamento e controle de", span:"notes", active:true}, 
                         {title:"Controle de", span:"presença", active:true},
                         {title:"Criação de cursos", span:"gratuitos", active:true},
                         {title:"Avaliação continua", span:"dos estudantes", active:true},
                         {title:"Material didatico", span:"e aulas", active:true},
                         {title:"Ciação de tarefas", span:"e projectos", active:true},
                         {title:"Aulas privadas", span:"gratuitas", active:true},      
                     ] 
                 },   
                 {
                    area:"Portal do encarregado",
                     data:[
                         {title:"Controle de aprendizado", span:"dos alunos", active:false}, 
                         {title:"Controle de notas", span:"dos alunos", active:false},   
                         {title:"Controle de presença", span:"dos alunos", active:false}, 
                         {title:"Controle de comportamento", span:"dos alunos", active:false}, 
                         {title:"Calendario de aulas", span:"dos alunos", active:false}, 
                         {title:"Progresso dos cursos", span:"dos alunos", active:false}, 
                         {title:"Visualização das", span:"Recomendações", active:false}, 
                         {title:"Controle de avisos", span:"dos alunos", active:false}, 
                         {title:"Status dos projetos e tarefas", span:"dos alunos", active:false}, 
                         {title:"Gestão e controle dos", span:"pagamentos", active:false}, 
                         {title:"Solicitação e reclamações ", span:"na instituição", active:false}, 
                         {title:"Comunicação aberta com ", span:"os professores", active:false},  
                     ] 
                 },    
                 {
                    area:"Portal do aluno",
                     data:[
                        {title:"Controle de aprendizado", span:"individual", active:false}, 
                         {title:"Controle de notas", span:"individual", active:false}, 
                         {title:"Controle de presença", span:"individual", active:false}, 
                         {title:"Controle de comportamento", span:"individual", active:false}, 
                         {title:"Calendario de aulas", span:"individual", active:false}, 
                         {title:"Progresso dos cursos", span:"individual", active:false}, 
                         {title:"Empregos e estagios", span:"por recomendação ", active:false}, 
                         {title:"Aulas", span:"online", active:false}, 
                         {title:"Colaboração em", span:"projetos", active:false}, 
                         {title:"Visualização das", span:"Recomendações", active:false}, 
                         {title:"Controle de avisos", span:"individual", active:false}, 
                         {title:"Status dos projetos e tarefas", span:"individual", active:false}, 
                         {title:"Gestão e controle dos", span:"pagamentos", active:false}, 
                         {title:"Solicitação e reclamações ", span:"na instituição", active:false}, 
                         {title:"Comunicação aberta com ", span:"os professores", active:false},  
                     ] 
                 },        
            ]
        },
        {
            title:"Dourado",
            popular:false,
            price:"139.999",
            promo_price:"76.999",
            percentage:"45%",
            description:"Tudo que você precisa para gerir a sua instituição",
            features:[
                {
                    area:"Melhores recursos",
                     data:[
                        {title:"Secretaria", span:" e admnistração", active:true},   
                        {title:"Pagamentos", span:" de propinas e relatorios", active:true},   
                        {title:"Area pedagogica", span:" e portal do professor", active:true},    
                        {title:"Aréa financeira", span:" e controle dividas", active:true}, 
                        {title:"Portal do encarregado", span:" e  do estudante", active:true}, 
                        {title:"Sistema de gestão", span:"de stock", active:true}, 
                        {title:"Biblioteca", span:" e transporte", active:true}, 
                     ] 
                 }, 
                {
                    area:"Secretária",
                     data:[
                        {title:"Cadastramento de estudantes", span:" e gestão", active:true},  
                        {title:"Efectuar matricula", span:" e confirmações", active:true},   
                        {title:"Solicitação de anulação", span:"de matriculas", active:true},
                        {title:"Solicitação de transferencia", span:"e controle", active:true}, 
                        {title:"Solicitar Declarações", span:"e controle", active:true},
                        {title:"Cadastramento de encarregados", span:"e gestão", active:true},   
                        {title:"Extratros ", span:"e  relatorios", active:true}, 
                     ] 
                 },
                 {
                    area:"Admnistração",
                     data:[  
                        {title:"Emição de cartão escolar", span:"e controle", active:true},
                        {title:"Emição de comunicado / avisos", span:"e gestão", active:true},   
                        {title:"Serviço de SMS ", span:"e  email", active:true}, 
                     ] 
                 },  
                 {
                    area:"Finanças",
                     data:[
                         {title:"Sistema de stock", span:"e gestão", active:true},   
                         {title:"Ponto de venda", span:" de produtos", active:true},   
                         {title:"Contas a pagar", span:"e feixo de caixa", active:true},   
                         {title:"Contas a receber", span:"e relatorios", active:true},   
                         {title:"Pagamentos gerais", span:"e serviços", active:true},   
                         {title:"Pagamento de propinas", span:"e dividas", active:true},   
                         {title:"Faturação", span:"e relatorios", active:true},   
                         {title:"Pagamento de transporte", span:"e diversos", active:true},   
                         {title:"Multas , dividas", span:"e Moedas", active:true},   
                         {title:"Dashboard", span:"financeiro", active:true},   
                     ] 
                 },    
                 {
                    area:"Área Pedagógica",
                     data:[
                         {title:"Emição de horarios", span:"e gestão", active:true},  
                         {title:"Gestão de efectividade", span:"e progresso", active:true},   
                         {title:"Atribuição de disciplinas", span:"e controle", active:true},
                         {title:"Plano curricular", span:"e tarefas", active:true},      
                         {title:"Livro de ponto", span:" funcionarios e alunos", active:true},   
                         {title:"Notas", span:"trimestrais", active:true},   
                         {title:"Notas", span:"do recurso", active:true},   
                         {title:"Matriz de", span:"resultados", active:true}, 
                         {title:"Listagem de alunos", span:"por turma", active:true}, 
                         {title:"Mini-pautas", span:"modelos", active:true},       
                         {title:"Mini-pautas", span:"trimestrais", active:true},
                         {title:"Pauta", span:"por turma", active:true}, 
                         {title:"Boletim de notas", span:"individual", active:true},       
                         {title:"Boletim de notas", span:"escolar", active:true},  
                         {title:"Visualizar estatisticas", span:"das notas", active:true},   
                         {title:"Pauta final", span:"do trimestre", active:true},   
                         {title:"Emição de termos", span:" do aluno", active:true},   
                         {title:"Ranking de notas", span:"geral e por turma", active:true},     
                     ] 
                 },   
                 {
                    area:"Transporte",
                     data:[
                         {title:"Cadastramento de pssageiros", span:"e gestão", active:true},    
                         {title:"Cadastramento de rotas", span:"e controle", active:true},   
                         {title:"Registro de viaturas", span:"e controle", active:true}, 
                         {title:"Relatorios", span:"gerais", active:true},    
                     ] 
                 },
                 {
                    area:"Biblioteca",
                     data:[
                         {title:"Criaçãoe publicação", span:"de livros", active:true},   
                         {title:"Cadastamento de", span:"prateleiras", active:true},  
                         {title:"Cadastamento de", span:"autores", active:true},  
                         {title:"Cadastamento de", span:"editoras", active:true},  
                         {title:"Emprestimos e", span:"devoluções de livros", active:true},  
                         {title:"Consulta de", span:"livros", active:true},   
                         {title:"Dashboard", span:"Bibliotecario", active:true},   
                         {title:"Relatorios", span:"gerais", active:true},   
                     ] 
                 },      
                 {
                    area:"Portal do professor",
                     data:[
                         {title:"Controle de tarefas", span:"atribuidas", active:true}, 
                         {title:"Gestão de", span:"turmas e estudantes", active:true},   
                         {title:"Avaliação", span:"de comportamento", active:true}, 
                         {title:"Lanaçamento e controle de", span:"notes", active:true}, 
                         {title:"Controle de", span:"presença", active:true},
                         {title:"Criação de cursos", span:"gratuitos", active:true},
                         {title:"Avaliação continua", span:"dos estudantes", active:true},
                         {title:"Material didatico", span:"e aulas", active:true},
                         {title:"Ciação de tarefas", span:"e projectos", active:true},
                         {title:"Aulas privadas", span:"gratuitas", active:true},      
                     ] 
                 },   
                 {
                    area:"Portal do encarregado",
                     data:[
                         {title:"Controle de aprendizado", span:"dos alunos", active:true}, 
                         {title:"Controle de notas", span:"dos alunos", active:true},   
                         {title:"Controle de presença", span:"dos alunos", active:true}, 
                         {title:"Controle de comportamento", span:"dos alunos", active:true}, 
                         {title:"Calendario de aulas", span:"dos alunos", active:true}, 
                         {title:"Progresso dos cursos", span:"dos alunos", active:true}, 
                         {title:"Visualização das", span:"Recomendações", active:true}, 
                         {title:"Controle de avisos", span:"dos alunos", active:true}, 
                         {title:"Status dos projetos e tarefas", span:"dos alunos", active:true}, 
                         {title:"Gestão e controle dos", span:"pagamentos", active:true}, 
                         {title:"Solicitação e reclamações ", span:"na instituição", active:true}, 
                         {title:"Comunicação aberta com ", span:"os professores", active:true},  
                     ] 
                 },    
                 {
                    area:"Portal do aluno",
                     data:[
                        {title:"Controle de aprendizado", span:"individual", active:true}, 
                         {title:"Controle de notas", span:"individual", active:true}, 
                         {title:"Controle de presença", span:"individual", active:true}, 
                         {title:"Controle de comportamento", span:"individual", active:true}, 
                         {title:"Calendario de aulas", span:"individual", active:true}, 
                         {title:"Progresso dos cursos", span:"individual", active:true}, 
                         {title:"Empregos e estagios", span:"por recomendação ", active:true}, 
                         {title:"Aulas", span:"online", active:true}, 
                         {title:"Colaboração em", span:"projetos", active:true}, 
                         {title:"Visualização das", span:"Recomendações", active:true}, 
                         {title:"Controle de avisos", span:"individual", active:true}, 
                         {title:"Status dos projetos e tarefas", span:"individual", active:true}, 
                         {title:"Gestão e controle dos", span:"pagamentos", active:true}, 
                         {title:"Solicitação e reclamações ", span:"na instituição", active:true}, 
                         {title:"Comunicação aberta com ", span:"os professores", active:true},  
                     ] 
                 },        
            ]
        } 
    ];

    return (
       <div className="wrapper">
         <Container className='ed-prices'>
            <div className="prices-text">
               <h1>Os preços mais acessíveis  para os produtos mais incriveis já mas fornecidos</h1>  
            </div>
            <br /><br />
             <section>
             {CardsData.map((card, index)=>{
                 return(
                    <article key={index} className={card.popular ? "card popular" : "card"}  >
                        {card.popular ? <div className="popular">Popular</div> : ""} 
                        <div className="card-details">
                        <h2 className="title">{card.title}</h2>
                          <small className='description'>{card.description}</small>
                         {index ===  0 ? <h3 className='text-success'>{card.percentage +" de desconto por 2 meses"}</h3>   : ""} 
                         {index ===  1 ? <h3 className='text-success'>{card.percentage +" de desconto por 2 meses"}</h3>   : ""} 
                         {index ===  2 ? <h3 className='text-success'>{card.percentage +" de desconto por 2 meses"}</h3>   : ""} 
                          
                          <h1 className="ed-flex"><small>Kz</small> {card.promo_price}<small> / mensal</small></h1>
                   
                   <div className="old-price">Kz {card.price} / mensal</div>
                         
                           

                          <a href="#" target='_blank'><button className='btn'>Saiba mais</button></a>
                          <hr />
                          <div>
                             {card.features.map((FT,i)=>{
                                return(
                                   <div className="block-data" key={i}>
                                       <h2>{FT.area}</h2>
                                       <ul>
                                         {FT.data.map((el, e)=>{
                                             return( 
                                                <>{el.active ? <li><div className="icon"><FaCheck /></div>{el.title} <span>{el.span}</span></li>  : 
                                                <li className='disable'><div className="icon"><FaTimes/> </div>{el.title} <span>{el.span}</span> </li>}</>
                                             )
                                         })}
                                       </ul>
                                   </div>
                                )
                             })}
                          </div>
                        </div>
                    </article>
                 );
             })}
             </section>
        </Container>
       </div>
     )
   }
   
   
   const Container = styled.div`
        margin:40px 0px;

        .prices-text{
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
             }
        }

        section{
            display:flex;
            justify-content:center;
            flew-wrap:wrap;
        }

        .card.popular{
            button{background:var(--ed-pink) !important;}
              h1.ed-flex, h2.title{color:var(--ed-pink) !important;}

              .popular{
                  background:var(--ed-pink) !important;
                  color:var(--ed-white);
                  padding:10px; 
                  font-weight:bolder;
                  margin-top:-44px;
                  border-top-right-radius:6px;
                  border-top-left-radius:6px;
              }
        }

          .card{
              width:350px; 
              border: 1px solid #d5dfff;
              text-align:center;
              margin:20px;


              &:hover{
                  box-shadow:var(--ed-shadow-1); 
              }

             

             .old-price{
                text-decoration:line-through !important;
                color:#2f1c6a; 
                font-size:18px;
             }


              h2.title{
                font-size:20px;
                color:#2f1c6a;
                font-weight:bold;
              }

              .description{
                  font-size:14px;
                  color:#2f1c6a;
              }


              button{
                  width:100%;
                  color:var(--ed-white);
                  background:var(--ed-purple-light);
                  padding:10px;
                  margin-top:10px;
              }

              h1{
                  font-size:45px;
                  color:#2f1c6a;
                  font-weight:bolder;
                  margin:10px 0px;

                    small{
                        font-size:20px;
                        font-weight:500;
                    }
              }

              .card-details{
                padding:20px;

                .promo{
                    h1{
                       font-size:18px !important;
                       color:#2f1c6a;
                    }
                 }

                 h3{
                    font-size:18px;
                    margin:10px 0px;
                 }

              }


              .block-data{
                margin:30px 0px; 
                text-align:left; 


                h2{
                    font-size:16px;
                    font-weight:500;
                    color:#2f1c6a;
                }

                 ul{
                    padding:0px;
                    margin:0px;
                    text-align:left;


                      li{
                          margin:15px 0px;
                          display:flex;
                          list-style:none;
                          font-size:13px; 
                          color:#2f1c6a;

                          .icon{
                              margin-right:10px;
                              svg{
                                 fill:var(--ed-green);
                              }
                          }


                         div{
                            display:flex;
                            align-items:center;
                            color:var(--ed-blue-dark-light);
                         }


                         
                         span{
                            color:var(--ed-grey-text);
                            margin-left:5px;
                        }


                      }

                      li.disable{
                        .icon{
                          svg{
                              fill:var(--ed-red-light) !important;
                           }
                        }
                    }

                 }


              }
          }
   `;

export default Prices
