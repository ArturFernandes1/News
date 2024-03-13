import React from "react";

import "./Secao1.css";
import Tooltip from "./Tooltip";


import python from "../Assets/python.svg"
import Javascript  from "../Assets/javascript.svg" 
import react from "../Assets/react.svg"
import css3 from "../Assets/css3.svg"
import html5 from "../Assets/html5.svg"
import angular from "../Assets/angular.svg"
import bootstrap from "../Assets/bootstrap.svg"
import figma from "../Assets/figma.svg"




function Secao1(){
    return(
        <>
        <h1>Soft Skills</h1>
        <hr></hr>
        <nav>
            <div className="container1">


              <Tooltip text="Python é uma linguagem de programação de alto nível, interpretada, orientada a objetos e de propósito geral. Criada por Guido van Rossum e lançada pela primeira vez em 1991, Python foi projetada com uma sintaxe clara e simples, favorecendo a legibilidade e a facilidade de aprendizado.">
                <div className="card">
                  <img className="imagem" src={python}></img>
                  <h3>Python</h3>
                  

          
                </div>
              </Tooltip> 

              <Tooltip className="tooltip" text="JavaScript é uma linguagem de programação amplamente utilizada para desenvolvimento web. Criada originalmente em 1995 pela Netscape, JavaScript rapidamente se tornou uma peça fundamental da web moderna, permitindo a criação de páginas interativas e dinâmicas.">
              <div className="card">
                <img className="imagem" src={Javascript}></img>
                <h3>Javascript</h3>
              </div>
              </Tooltip> 
              
              <Tooltip text="React é uma biblioteca de JavaScript desenvolvida pelo Facebook para a construção de interfaces de usuário (UI). Desde seu lançamento em 2013, React tem ganhado imensa popularidade entre desenvolvedores devido à sua abordagem eficiente e declarativa para o desenvolvimento de aplicações web..">
              <div className="card">
                <img className="imagem" src={react}></img>
                <h3>React</h3>
              </div>
              </Tooltip> 

              <Tooltip text="CSS, que significa Cascading Style Sheets (Folhas de Estilo em Cascata), é uma linguagem de estilo utilizada para definir a apresentação de documentos HTML (ou XML). Desde sua introdução na década de 1990, o CSS tem sido uma parte fundamental do desenvolvimento web, permitindo que os desenvolvedores controlem o layout, as cores, as fontes e outros aspectos visuais de suas páginas da web.">
              <div className="card">
                <img className="imagem" src={css3}></img>
                <h3>CSS</h3>
              </div>
              </Tooltip>

              <Tooltip text="HTML, ou Hypertext Markup Language, é a linguagem padrão para criação e estruturação de páginas web. Desenvolvido originalmente por Tim Berners-Lee no início dos anos 1990, HTML é a base fundamental da World Wide Web e é essencial para a criação de conteúdo online.">
              <div className="card">
                <img className="imagem" src={html5}></img>
                <h3>HTML</h3>
              </div>
              </Tooltip>

              <Tooltip text="Bootstrap é um dos frameworks front-end mais populares e amplamente utilizados para o desenvolvimento rápido e responsivo de sites e aplicações web. Criado inicialmente por Mark Otto e Jacob Thornton na Twitter, o Bootstrap foi lançado em 2011 como um projeto de código aberto e desde então tem sido uma ferramenta fundamental para desenvolvedores web em todo o mundo.">
              <div className="card">
                <img className="imagem" src={bootstrap}></img>
                <h3>Bootstrap</h3>
              </div>
              </Tooltip>

              <Tooltip text="Figma é uma ferramenta de design de interfaces de usuário (UI) e experiência do usuário (UX) baseada na web, que tem ganhado crescente popularidade desde seu lançamento em 2016. Desenvolvida para simplificar e otimizar o processo de design colaborativo, Figma oferece uma plataforma poderosa e intuitiva para equipes de design.">
              <div className="card" id="ultimocard">
                <img className="imagem" src={figma}></img>
                <h3>Figma</h3>
              </div>
              </Tooltip>
              
              <Tooltip text="Figma é uma ferramenta de design de interfaces de usuário (UI) e experiência do usuário (UX) baseada na web, que tem ganhado crescente popularidade desde seu lançamento em 2016. Desenvolvida para simplificar e otimizar o processo de design colaborativo, Figma oferece uma plataforma poderosa e intuitiva para equipes de design.">
              <div className="card" id="ultimocard">
                <img className="imagem" src={angular}></img>
                <h3>Angular</h3>
              </div>
              </Tooltip>
            

            </div>    

        </nav>
        </>
    );
};
export default Secao1;


{/* <div class="minhaDiv" onclick="exibirConteudo()">Clique aqui</div>
<div id="conteudoExibido">Conteúdo da div exibido aqui</div>
 */}
