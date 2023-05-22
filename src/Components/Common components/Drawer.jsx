import React from 'react'
import appStyles from "../../../src/App.module.css";
import { Link } from 'react-router-dom';
import {Text, Flex, Drawer, DrawerBody, DrawerHeader, DrawerFooter, DrawerOverlay, DrawerContent, DrawerCloseButton } from "@chakra-ui/react";

export function DrawerExample ({
 p = 15,
    placement = "right",
    width,
    isOpen,
    children,
    onClose,
    btnRef,
    title = "Menu",
    footer
}) {
  return (
    <Flex w={width}>
        <Drawer
            isOpen={isOpen}
            placement={placement}
            onClose={onClose}
            finalFocusRef={btnRef}
        >
            <DrawerOverlay id={appStyles.Over}/>
    
            <DrawerContent id={appStyles.Drawer} minWidth={"20em"} maxWidth={"10vw"}  backgroundColor={"grey"} position={"fixed"}   alignItems="center">
                <DrawerCloseButton id={appStyles.closeBtn} alignSelf="end" mx={p} my={p}/>
                <DrawerHeader marginLeft={"-5vw"} my={p}>
                    <Text fontSize={"1.2em"} as="p">
                        {title}
                    </Text>
                </DrawerHeader>
                    <DrawerBody>
                        {children}
                    </DrawerBody>
                    <DrawerFooter>
                        {footer}
                    </DrawerFooter>
            </DrawerContent>
        </Drawer>
    </Flex>
  )
}
