import React, { useEffect, useRef, useState, Fragment } from 'react';
import ReactPlayer from 'react-player';
import appStyles from "../App.module.css";
import Vid from "../Images/change.mp4";
import { Nav } from '../Components/Common components/Nav';
import Vid3 from "../Images/yoga.mp4";
import Vid2 from "../Images/change2.mp4";
import Aud from "../Images/audio.mp3";
// import Pic from "../Images/cb.jpg";
import Pic from "../Images/Img.jpg";
import { ControlBox } from '@chakra-ui/react';

export const Home = () => {
  
  const [isPlaying, setIsPlaying] = useState(false);
  const [played, setPlayed] = useState(true);
  const [hovered, setHovered] = useState(false);
  const playerRef = useRef();
  let nav = document.getElementById("nav")
  useEffect(()=>{
    setIsPlaying(true)
    // play()
    // if(playerRef.current.paused()){
    //   alert(paused)
    // }
  },  [])
 
  const play = () => {
    setHandler()
   if(played){
    playerRef.current.pause();
   } else {
    playerRef.current.play();
   }
  } 
  const setHandler = () =>{
    setPlayed(!played)
  }
  const switchHandler = () => {
      // alert("not playing")
    setIsPlaying(false)
  }
  const hoverHandler = () => {
    setHovered(!hovered)
  }
  // if(hovered){
    //   alert("hovered")
    // } else{
      //   alert("not hovered")
  // }
  return (
    
    <Fragment>
      <header className={appStyles.header}>
        <div id={appStyles.back1} className={appStyles.back}>
           <div id={appStyles.back2} className={appStyles.back}>
           <div id={appStyles.back3} className={appStyles.backa}>
             </div>

            

          {isPlaying && (
            <video autoPlay onClick={play} onMouseOver={hoverHandler}  onEnded={switchHandler} ref={playerRef} className={appStyles.Vid} src={Vid}/> 
            
            )}
              {!isPlaying &&(
    
              <img id={appStyles.backup_Img} onTouchEndCapture={()=>{alert("focue")}} src={Pic} alt="mb"/>
              )}
              {isPlaying && hovered && played && (
                  <span onClick={play}  className={appStyles.controls}>=</span>
                  )}
                {isPlaying && hovered && !played &&(
                  <span onClick={play}  className={appStyles.controls}>+</span>
                  )}
      </div>
        </div>
      <Nav 
        navId_home={appStyles.current_link}
      />
      
      </header>

      <div className="" style={{color:"black", position:"relative", marginTop:"38em"}}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati, dolorum eum temporibus aliquid, ab provident cupiditate fugit impedit dignissimos illum velit, error iste incidunt eveniet adipisci aspernatur! Molestiae facere placeat voluptatibus praesentium id veritatis consequuntur dolore aut hic totam dolor dolores accusamus dignissimos voluptates minima ut eos reprehenderit rerum, eveniet quis impedit dolorum? Id natus veritatis architecto quis porro praesentium, iusto at dolores sunt optio nesciunt. Quis cupiditate hic minima, assumenda modi incidunt explicabo quasi aliquid, ipsam, soluta sed adipisci? Quia accusamus unde eligendi in exercitationem soluta consectetur, totam ratione optio vero, quam facere ipsam veniam blanditiis! Hic modi harum dolore saepe laboriosam quas qui temporibus eaque. Reiciendis ipsum id in quod, molestiae quas. Ullam nesciunt aliquid quaerat odio at molestiae? Esse atque, illum placeat consequuntur odit modi blanditiis dolorum ducimus beatae ullam doloremque provident nostrum molestias mollitia iste deleniti, unde fuga consectetur quisquam voluptate. Repudiandae error repellat, aut nisi molestiae esse dolorum vitae atque ratione quia, sequi, aliquid accusantium perferendis consequuntur asperiores! Repellat autem blanditiis voluptatibus facere eum dicta assumenda suscipit, non pariatur consequatur ea porro! Corporis aut modi quidem esse, veritatis assumenda vel non architecto repellat dolorum, quod dolorem? Inventore illum voluptates dolores dignissimos sed sapiente ut praesentium!
      </div>
    </Fragment>
  )
}

