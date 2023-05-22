import React from 'react'
import appStyles from "../App.module.css";
import { Nav } from '../Components/Common components/Nav';

export const Services = () => {
  return (
    <>
       <header className={appStyles.header}>
        <Nav 
          navId_services={appStyles.current_link}
        />
      </header>
    </>
  )
}
