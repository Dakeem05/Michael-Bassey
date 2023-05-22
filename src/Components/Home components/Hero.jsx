import React, { useState } from 'react'
import appStyles from "../../App.module.css"
import Pic1 from "../../Images/pic1.jpg";
import Pic2 from "../../Images/pic2.jpg";
import Pic3 from "../../Images/pic3.jpg";
import Pic4 from "../../Images/ic.jpg";
import { Image, Text, position } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
// id={appStyles.}
export const Hero = () => {
  const [heroSubmitted, setHeroSubmitted] = useState(false);
  const [userHeroEmail, setUserHeroEmail] = useState("");
  const [message, setMessage] = useState("");
  const [receivedMsgId, setReceivedMsgId  ] = useState("")
  const setInputData = (setInput, e) => {
    setInput(e.target.value)
  }
  const heroFormHandler = (e) => {
    e.preventDefault();
    setHeroSubmitted(true);
    setReceivedMsgId(appStyles.receivedMsg)
    if (userHeroEmail === "") {
      setMessage("Looks like you submitted an empty input field 🤨😒 ")
    } else{

      setMessage("Thanks, we've received your email and we'll get in touch with you soonest 😍🤩")
    }
  } 
  return (
    <span id={appStyles.hero}>
        <article id={appStyles.main}>
          <article style={{postion:"relative", zIndex:"3"}}>
          Shine with
          </article>
          <article id={appStyles.mainIndent}>
             perfection
            </article>
        </article>
        <span id={appStyles.floats}>
          <div id={appStyles.float1}>
            <Image id={appStyles.pic1} src={Pic1}/>
          </div>
          <section id={appStyles.content}>
            <article style={{width:"25vw"}}> We will deliver your products within 30 minutes in your town, if we would. </article>
            <button id={appStyles.contentBtn}><Link id={appStyles.contentBtnLink} to="/products">Products -{">"} </Link></button>
          </section>
          <div id={appStyles.float2}>

            <Image id={appStyles.pic2} src={Pic2}/>
          </div>
        </span>
        <section id={appStyles.next}>
          <article id={appStyles.heroLatest}>
            Latest products
          </article>
        <section id={appStyles.nextFlex}>

          <span id={appStyles.secA}>
            <span>
              
            <div className={appStyles.imgHeroContainer}>
              <Image className={appStyles.heroPic}  src={Pic3}/>
            </div>
            </span>
            <span className={appStyles.secInner}>

            <span className={appStyles.productHeroname}>
              Red lip stick
            </span>
            <span className={appStyles.heroWewill}>We will deliver your products anywhere</span>
            <span id={appStyles.heroArrow1}>
              <span id={appStyles.heroArrow}>

              {"->"}
              </span>
              </span>
            </span>
          </span>
          <span id={appStyles.secB}>
             <span>

            <div className={appStyles.imgHeroContainer}>
              <Image className={appStyles.heroPic} src={Pic4}/>

            </div>
            </span>
             <span className={appStyles.secInner}>

            <span className={appStyles.productHeroname}>
              Face wash
            </span>
            <span className={appStyles.heroWewill}>We will deliver your products anywhere</span>
            <span id={appStyles.heroArrow2}>
               <span  id={appStyles.heroArrow}>

              {"->"}
              </span>  
            </span>
          </span>
            </span>
            <span id={appStyles.heroLine}>
              |
            </span>
          <span id={appStyles.secCOutter}>
            <article id={appStyles.heroGet}>
              Get in touch
            </article>
            <span style={{paddingBottom:"-13em"}}>
            {heroSubmitted &&(
                <span id={appStyles.heroReceived}>

                {message}
                </span>
              )}
              </span>
          <span className={receivedMsgId} id={appStyles.secC}>

              <form onSubmit={heroFormHandler}>
            <span id={appStyles.heroEmailInput}>

              <input type="email" onChange={(e)=>setInputData(setUserHeroEmail, e)} name="email" placeholder='Enter Your Email Here' id={appStyles.heroEmail} />
            </span>
            <button  type='submit' id={appStyles.heroArrow3}>
              <span id={appStyles.heroArr}>

              -{">"}
              </span>
              </button>
              </form>
          </span>
              
          </span>
        </section>
        </section>
    </span>
  )
}
