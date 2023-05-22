import React from 'react';
import appStyles from "../../../src/App.module.css";
import { Link } from 'react-router-dom';
import Logo from "../../Images/logo.jpg"
import { Box, Text, Flex, Button, chakra, HStack, Image } from "@chakra-ui/react";
import { MobileDrawer } from './MobileDrawer';
import {AiOutlineShopping} from "react-icons/ai";
import {IoIosSearch} from "react-icons/io"

export const Nav = ({navId_home, navId_services, navId_about, navId_products, navId_blog}) => {
  const CTA = "Explore"
  return (
    <>
        <chakra.header
         position={'fixed'} 
         top={"0"} 
         id={appStyles.navHeader} 
         >
          <Flex 
            // w="100%"
            // px="6"
            py="3"
            align="center"
            justify="space-between"
            
          >
            <Image id={appStyles.logo} src={Logo}/>
            {/* <Text color={"white"} id={appStyles.title}  >Michael Bassey</Text> */}
            <HStack color={"white"} className={appStyles.nav} as="nav"
             
            >
              <Link className={appStyles.homeLink} id={navId_home} to="/">Home</Link>
              <Link className={appStyles.homeLink}  id={navId_products} to="/products">Portfolio</Link>
              <Link className={appStyles.homeLink}  id={navId_services} to="/services">Services</Link>
              <Box id={appStyles.asideNav}>

              <Link className={appStyles.homeLink}  id={appStyles.navId_searchIcon} to="/cart"><IoIosSearch/></Link>
              <Link className={appStyles.homeLink}  id={appStyles.navId_cart} to="/cart"><AiOutlineShopping/></Link>
              </Box>
              {/* <Link className={appStyles.homeLink}  id={navId_about} to="/about">About</Link>
              <Link className={appStyles.homeLink}  id={navId_blog} to="/blog">Blog</Link> */}
          
            </HStack>
            <HStack
            //  display={{base:"none", md:"flex"}}
            >
            
              <MobileDrawer 
                navId_home={navId_home}
                navId_services={navId_services}
                navId_products={navId_products}
                navId_blog={navId_blog}
                navId_about={navId_about}
              />
            </HStack>
          </Flex>
        </chakra.header>
          {/* <nav className={appStyles.nav}>
            <Box id="nav">
              
            </Box>
         </nav> */}
    </>
  )
}
