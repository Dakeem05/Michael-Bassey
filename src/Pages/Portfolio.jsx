import React from 'react'
import appStyles from "../App.module.css";
import { Nav } from '../Components/Common components/Nav';

export const Portfolio = () => {
  return (
    <>
       <header className={appStyles.header}>
        <Nav 
          navId_portfolio={appStyles.current_link}
        />
      </header>
    </>
  )
}
