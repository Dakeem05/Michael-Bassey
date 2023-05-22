import React from 'react'
import appStyles from "../../App.module.css";
import { Link } from 'react-router-dom';
export const Section2 = () => {
  return (
    <span id={appStyles.section2}>
        <article id={appStyles.section2Main}>
          Our best products
        </article>
        <span id={appStyles.section2Flex1}>

        <article id={appStyles.section2WeWill}>
          We will deliver your products within 30 minutes in your town
        </article>
        <button id={appStyles.section2ontentBtn}><Link id={appStyles.section2ContentBtnLink} to="/products">Go to Shop -{">"} </Link></button>
        </span>
        <span id={appStyles.section2Flex1}>
          <span id={appStyles.section2Imgcover}>

          <div id={appStyles.section2ImgCont}>

          </div>
          </span>
          <div id={appStyles.section2ImgCont2}>

          </div>
          <span id={appStyles.section2Imgcover}>

          <div id={appStyles.section2ImgCont3}>

          </div>
          </span>
        </span>
    </span>
  )
}
