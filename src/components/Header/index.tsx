import React from "react";
import LogoForkAcademy from "../../assets/Logo.svg";
import { BigHead } from "@bigheads/core";
import { CaretDoubleDown } from "phosphor-react";
import "./index.css";

export const HeaderFork = () => {
  return (
    <>
      <div className="header-content">
        <div className="nav-fork">
          <img src={LogoForkAcademy} width="210" height="220" alt="" />
          <h3 className="text-slogan">MULTIPLICANDO SEU CONHECIMENTO!</h3>
        </div>
        <div className="call-to-action">
          <h1 className="text-cta">
            UMA VIAGEM DE CONHECIMENTO INTERGALÁTICO NO UNIVERSO DA TECNOLOGIA
          </h1>
          <button className="button-cta">FALAR COM OS PROFI</button>
        </div>
      </div>
      <BigHead
        accessory="shades"
        body="chest"
        clothing="vneck"
        clothingColor="red"
        eyebrows="concerned"
        eyes="leftTwitch"
        faceMask={false}
        faceMaskColor="white"
        facialHair="none3"
        graphic="redwood"
        hair="afro"
        hairColor="pink"
        hat="none"
        hatColor="red"
        lashes
        lipColor="purple"
        mask
        mouth="open"
        skinTone="brown"
      />
      <BigHead
        accessory="tinyGlasses"
        body="breasts"
        circleColor="blue"
        clothing="dress"
        clothingColor="red"
        eyebrows="concerned"
        eyes="content"
        faceMask={false}
        faceMaskColor="white"
        facialHair="none2"
        graphic="gatsby"
        hair="bun"
        hairColor="white"
        hat="turban"
        hatColor="red"
        lashes={false}
        lipColor="red"
        mask
        mouth="lips"
        skinTone="light"
      />
      <div>
        <CaretDoubleDown size={42} color="#f7f7f7" />
      </div>
    </>
  );
};
