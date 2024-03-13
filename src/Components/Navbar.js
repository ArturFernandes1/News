import React from "react";
import "./Navbar.css";
import "./img.css"
import foto_perfil from "../Assets/foto_perfil.jpg"

function Navbar(){
    return(
           <>
              <header className="container-one">
                    <img src={foto_perfil} alt="" className="img"></img>
                    <div className="dados">
                        <h2>Artur Fernandes</h2>
                        <div className="caixa1">
                            <h1>Desenvolvedor Front-end</h1>
                            <p className="textoheard">Graduando de telemática | IFPB Campus Campina Grande</p>
                        </div>
                    </div> 
               </header>
           </>
    )
}
export default Navbar
