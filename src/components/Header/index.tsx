import React from "react";
import LogoForkAcademy from '../../assets/Logo.svg';
import './index.css';


export const HeaderFork = ()=> {
  
    return (
        <div className="headerFork">
            <img src={LogoForkAcademy}  width="210" height="220" alt="" />
            <h3 className="text-slogan">MULTIPLICANDO SEU CONHECIMENTO!</h3>
        </div>
    );
}