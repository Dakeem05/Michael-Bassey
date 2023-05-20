import React from 'react';
import appStyles from "../../../src/App.module.css";
import { Link } from 'react-router-dom';
import { Box, Text, Flex, Button, chakra, HStack } from "@chakra-ui/react";
import { MobileDrawer } from './MobileDrawer';

export const Nav = ({navId_home, navId_services, navId_about, navId_portfolio, navId_blog}) => {
  const CTA = "Explore"
  return (
    <>
        <chakra.header paddingLeft={"10vw"}  position={'fixed'} top={"0"} id={appStyles.header} >
          <Flex 
            w="100%"
            px="6"
            py="5"
            align="center"
            justify="space-between"
            
          >
            <Text color={"white"} id={appStyles.title} fontSize={"1.5vw"} marginRight="35vw" >Michael Bassey</Text>
            <HStack color={"white"} className={appStyles.nav} as="nav" spacing="7" 
             
            >
              <Link className={appStyles.homeLink} id={navId_home} to="/home">Home</Link>
              <Link className={appStyles.homeLink}  id={navId_services} to="/services">Services</Link>
              <Link className={appStyles.homeLink}  id={navId_about} to="/about">About</Link>
              <Link className={appStyles.homeLink}  id={navId_portfolio} to="/portfolio">Portfolio</Link>
              <Link className={appStyles.homeLink}  id={navId_blog} to="/blog">Blog</Link>
          
            </HStack>
            <HStack
            //  display={{base:"none", md:"flex"}}
            >
            
              <MobileDrawer 
                navId_home={navId_home}
                navId_services={navId_services}
                navId_portfolio={navId_portfolio}
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
