import React from 'react'
import appStyles from "../App.module.css";
import { Nav } from '../Components/Common components/Nav';

export const Blog = () => {
  return (
    <>
       <header className={appStyles.header}>
        <Nav 
          navId_blog={appStyles.current_link}
        />
      </header>
    </>
  )
}
