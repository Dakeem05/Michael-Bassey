import React from 'react'
import appStyles from "../App.module.css";
import { Nav } from '../Components/Common components/Nav';

export const Products = () => {
  return (
    <>
       <header className={appStyles.header}>
        <Nav 
          navId_products={appStyles.current_link}
        />
      </header>
    </>
  )
}
