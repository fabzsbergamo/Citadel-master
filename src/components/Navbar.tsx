import { Box, Button, Center, Flex, Grid, GridItem, HStack, Hide, Image, Link, LinkBox, List, ListItem, Show, Text, UnorderedList } from '@chakra-ui/react'
import logo from '../assets/Untitled_Artwork.png'
import { useState } from "react";
import close from '../assets/close.svg';
import menu from '../assets/menu.svg'
import { navLinks } from "../constants";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <Grid templateAreas={`"header" "nav"`} color='blackAlpha.700'> 
          <Grid area={'header'} templateColumns='repeat(5, 1fr)'>
            <GridItem colStart={0} colEnd={2} >
              <Show above='md'>
              <Box paddingLeft='15'><NavLink to="/">
                  <Image src={logo} maxW='250'/></NavLink>
              </Box>
              </Show>
              <Show below='md'>
                <Box paddingLeft='5'>
                <Image src={logo} maxW='180' />
                </Box>
              </Show>
            </GridItem>
            <GridItem colStart={6} padding='10'>
            <Show above='md'>
              <Text>Call one of our advisors FREE on: 0800 411 8690</Text>
              </Show>
              <GridItem justifyContent="flex-end">
          <Show below='md'>
        {/* Below we create a menu on the navbar that is mobile friendly. We click to toggle to open and close the menu */}
      <div className="flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />
{/* Above is the toggle image and below we add the menu to the toggle */}
        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? "text-white" : "text-dimWhite"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      </Show>
      </GridItem>
            </GridItem>
          </Grid>
          <Grid area='nav'>
          <Show above='md'>
            <HStack paddingLeft='20%' paddingRight='20%' justifyContent="space-between">
              {navLinks.map((nav) => (
             <NavLink
                key={nav.id}
                className="nav-item nav-link" to={nav.id}>{nav.title}</NavLink>
               ))}
            </HStack>
          </Show>
      </Grid>
    </Grid>
  )
}

export default Navbar

{/* Home
            Wills
            LPAs
            Probate
            About Us
            Contact Us */}