import React from 'react'
import appStyles from "../App.module.css";
import { Nav } from '../Components/Common components/Nav';

export const About = () => {
  return (
    <>
      <header className={appStyles.header}>
        <Nav 
          navId_about={appStyles.current_link}
        />
      </header>

    </>
  )
}
