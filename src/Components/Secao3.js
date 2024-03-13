import React from "react";
import "../Components/Secao3.css"
import  curriculoPDF from "../Certificados/Meu_curriculo.pdf"

function Secao3(){
    return(
            <>
              
            <div class="scroll-container">
                <div class="scroll-item">
                    <h1>Sobre mim!</h1>
                    <p> 
                        Olá, seja bem vindo(a) ao meu Portfólio. Eu mesmo criei para facilitar informações, sinta-se à vontade para explorar as outras guias! Abaixo deixei um espaço para você entrar em contato comigo, serve também como envio de orçamentos, dúvidas e comentários!
                    </p>

                    <div>
                    <p className="linkcurriculo">Acesse meu curriculo para mais detalhes<a href={curriculoPDF}> Link</a></p>
                   
                    </div>
                
                </div>

                <div class="scroll-item">
                    <h1>Graduação</h1>
                    <h3 className="subtitle2">Graduando pelo instituto federal da paraíba IFPB - Campus Campina Grande</h3>
                    <p className="paragrafspace"> Profissional de Tecnologia de Informação e Comunicação (TIC)</p>
                    <p>O tecnólogo em Telemática especifica, projeta, planeja, desenvolve, implanta, integra e gerencia serviços informáticos por meio de redes de telecomunicações, estruturas físicas e lógicas de redes de telecomunicação e dados, redes de monitoramento e controle.
                    Desenvolve protocolos e aplicações para comunicação de dados que associem meios de informática. Vistoria, realiza perícia, avalia, emite laudo e parecer técnico em sua área de formação. O uso desta tecnologia modificou profundamente a estrutura
                    das relações humanas, possibilitando a execução de atividades profissionais à distância.
                    Também tem uma boa base de programação, desde a lógica de programação, POO, até níveis consideravelmente avançados. </p>
                </div>

                <div class="scroll-item">
                    <h1>Carreira</h1>
                    <p>Desenvolvimento Web | Front-end</p>
                    <p>Desenvolvimento web front-end refere-se à prática de criar a parte visual e interativa de um site ou aplicativo web. É a área do desenvolvimento web que lida com a interface do usuário (UI), o design e a experiência do usuário (UX) que os visitantes do site ou os usuários do aplicativo veem e interagem diretamente.</p>
                </div>


                <div class="scroll-item">
                    <h1> Cursos</h1>
                    <div class="conteudo-cursos">
                            <p> <strong>Cursos Correlacionados a Área</strong></p>
                            <p> Curso técnico em Informática pela CompuWaill</p> 
                            <p> Curso básico de Python | Plataforma Online Curso em Vídeo</p> 
                            <p> Curso avançado de Python | Cisco Networking Academy</p> 
                            <p> Curso de Redes | Plataforma Online Curso em Vídeo</p> 
                            <p> Curso de Switching Routing and Wireless Essentials | Cisco Networking Academy</p>
                            <p> Curso de desenvolvimento Web | Plataforma Online Udemy</p>
                    </div>

                </div>
              
            </div>
            </>
    );
};

export default Secao3;