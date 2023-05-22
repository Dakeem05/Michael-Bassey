import React from 'react'
import appStyles from "../../App.module.css";
import { Link } from 'react-router-dom';
import Pic3 from "../../Images/chips.jpg";
import Pic4 from "../../Images/pic4.jpg";
import { Image } from '@chakra-ui/react';
export const Section1 = () => {
  return (
    <span id={appStyles.section1}>
      <span id={appStyles.section1Main}>
         <span id={appStyles.section1Main1}>
          Glow up your skin
        </span>
        <span id={appStyles.section1Main2}>
          by using our
        </span>
        <span id={appStyles.section1Main3}>
          Products
        </span> 
      </span>

      <span id={appStyles.section1Floats}>
        <div id={appStyles.section1ImgContainer1}>
          <Image src={Pic3}/>
        </div>
        <section id={appStyles.section1Content}>
          <article id={appStyles.section1WeWill}> We will deliver your products within 30 minutes in your town, if we would. </article>
          <button id={appStyles.section1ContentBtn}><Link id={appStyles.sectionContentBtnLink} to="/products">Go to Shop -{">"} </Link></button>
        </section>
        <div id={appStyles.section1ImgContainer2}>
        <Image src={Pic4}/>
        </div>
      </span>
    </span>
  )
}
