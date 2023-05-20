import React, { useRef } from 'react'
import appStyles from "../../../src/App.module.css";
import { Link } from 'react-router-dom';
import { useDisclosure, Flex, Box, Button, Icon, HStack, Link as ChakraLink , VStack} from '@chakra-ui/react';
import { DrawerExample } from './Drawer';
import {IoMdMenu} from "react-icons/io";
// import {Link} from "react-scroll"

export const MobileDrawer = ({navId_home, navId_services, navId_about, navId_portfolio, navId_blog}) => {
    const {isOpen, onOpen, onClose} = useDisclosure()
    const btnRef = React.useRef();

  return (
    <Flex 
    
    //  display={{base:"flex", md:"none"}}
     >
        <Button ref={btnRef} id={appStyles.toggle_btn} onClick={onOpen} background={"transparent"}><IoMdMenu id={appStyles.toggle} color={"bisque"}  size="2.5em"/></Button>
        <DrawerExample
            isOpen={isOpen}
            onClose={onClose}
            finalFocusRef={btnRef}
        >
            <VStack alignItems="left" marginTop={"3vh"}  width={"100%"} fontSize={"1.2em"} >
             <Link  style={{paddingLeft:"14vw", paddingRight:"12.5vw"}}  className={appStyles.homeLink} id={navId_home} to="/home">Home</Link>
              <Link  style={{paddingLeft:"14vw", paddingRight:"12.5vw"}}  className={appStyles.homeLink}  id={navId_services} to="/services">Services</Link>
              <Link  style={{paddingLeft:"14vw", paddingRight:"12.5vw"}}  className={appStyles.homeLink}  id={navId_about} to="/about">About</Link>
              <Link  style={{paddingLeft:"14vw", paddingRight:"12.5vw"}}  className={appStyles.homeLink}  id={navId_portfolio} to="/portfolio">Portfolio</Link>
              <Link  style={{paddingLeft:"14vw", paddingRight:"12.5vw"}}  className={appStyles.homeLink}  id={navId_blog} to="/blog">Blog</Link>
          
            </VStack>
        </DrawerExample>
    </Flex>
  )
}
