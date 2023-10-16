
import Logo from '../assets/logo.png'
import { Link } from 'react-scroll'
import React, { useState } from "react";
import '../index.css'
import {
  Drawer,
  Typography,
  IconButton,
  List,
  Button,
} from "@material-tailwind/react";
 
export function Header() {

  const [activeLink, setActiveLink] = useState('Home');
  const [openRight, setOpenRight] = React.useState(false);
  const openDrawerRight = () => {
    setOpenRight(true);
    if(openRight == false) {
      document.body.style.overflow = 'hidden';
    }
  }


  const closeDrawerRight = () => {
    setOpenRight(false);
    if(openRight == true) {
      document.body.style.overflow = 'visible';
    }
  }
 
  return (
    <header className="flex flex-row justify-around items-center w-full h-28 bg-slate-800 text-white shadow-lg sticky top-0 z-50">
      <div>
        <Link to='/' spy={true} smooth={true} offset={-100} duration={500} className='cursor-pointer'><img src={Logo} alt="Logo" className='w-56' /></Link>
      </div>
      <nav className="hidden lg:block">
        <ul>
          <Link to='Home' spy={true} smooth={true} offset={-100} duration={500} onSetActive={() => setActiveLink('Home')} className={`hover:text-slate-400 font-semibold cursor-pointer p-2 m-3 inline-block ${activeLink === 'Home' ? 'active' : ''}`}>
            Home
          </Link>
          <Link to='Aboutus' spy={true} smooth={true} offset={-150} duration={500} onSetActive={() => setActiveLink('Aboutus')} className={`hover:text-slate-400 font-semibold cursor-pointer p-2 m-3 inline-block ${activeLink === 'Aboutus' ? 'active' : ''}`}>
            Sobre nós
          </Link>
          <Link to='Services' spy={true} smooth={true} offset={-100} duration={500} onSetActive={() => setActiveLink('Services')} className={`hover:text-slate-400 font-semibold cursor-pointer p-2 m-3 inline-block ${activeLink === 'Services' ? 'active' : ''}`}>
            Áreas de Atuação
          </Link>
          <Link to='Partners' spy={true} smooth={true} offset={-100} duration={500} onSetActive={() => setActiveLink('Partners')} className={`hover:text-slate-400 font-semibold cursor-pointer p-2 m-3 inline-block ${activeLink === 'Partners' ? 'active' : ''}`}>
            Sócios
          </Link>
          <Link to='Contact' spy={true} smooth={true} offset={-100} duration={500} onSetActive={() => setActiveLink('Contact')} className={`hover:text-slate-400 font-semibold cursor-pointer p-2 m-3 inline-block ${activeLink === 'Contact' ? 'active' : ''}`}>
            Contato
          </Link>
        </ul>
      </nav>
        <div className="block lg:hidden">
          <React.Fragment>
            <div className="flex flex-wrap gap-4">
              <Button size='sm' onClick={openDrawerRight} className='text-2xl hover:text-slate-300 bg-slate-800'><i className="fa-solid fa-bars"></i></Button>
            </div>
            
            <Drawer
              overlay={false}
              placement="right"
              open={openRight}
              onClose={closeDrawerRight}
              className="p-4 shadow-lg"
            >
              <div className="mb-6 flex items-center justify-between">
                <Typography variant="h5" color="blue-gray">
                  Menu
                </Typography>
                <IconButton
                  variant="text"
                  color="blue-gray"
                  onClick={closeDrawerRight}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                  <div>
                  </div>
                </IconButton>
              </div>
              <List>
                <ul className="flex flex-col font-bold text-[16px] gap-4">
                  <div className='flex flex-row justify-start items-center text-center'>
                    <Link to='Home' spy={true} smooth={true} offset={-100} duration={500} onSetActive={() => setActiveLink('Home')} className={`p-2 cursor-pointer hover:bg-slate-200 rounded-md ${activeLink === 'Home' ? 'activeM' : ''}`}>
                      <i className="fa-solid fa-house mr-4 w-5"></i>
                      Home
                    </Link>
                  </div>
                  <div className='flex flex-row justify-start items-center text-center'>
                    <Link to='Aboutus' spy={true} smooth={true} offset={-100} duration={500} onSetActive={() => setActiveLink('Aboutus')} className={`p-2 cursor-pointer hover:bg-slate-200 rounded-md ${activeLink === 'Aboutus' ? 'activeM' : ''}`}>
                      <i className="fa-solid fa-users mr-4 w-5"></i>
                      Sobre nós
                    </Link>
                  </div>
                  <div className='flex flex-row justify-start items-center text-center'>
                    <Link to='Services' spy={true} smooth={true} offset={-100} duration={500} onSetActive={() => setActiveLink('Services')} className={`p-2 cursor-pointer hover:bg-slate-200 rounded-md ${activeLink === 'Services' ? 'activeM' : ''}`}>
                      <i className="fa-solid fa-handshake mr-4 w-5"></i>
                      Áreas de Atuação
                    </Link>
                  </div>
                  <div className='flex flex-row justify-start items-center text-center'>
                    <Link to='Partners' spy={true} smooth={true} offset={-100} duration={500} onSetActive={() => setActiveLink('Partners')} className={`p-2 cursor-pointer hover:bg-slate-200 rounded-md ${activeLink === 'Partners' ? 'activeM' : ''}`}>
                      <i className="fa-brands fa-black-tie mr-4 w-5"></i>
                      Sócios
                    </Link>
                  </div>
                  <div className='flex flex-row justify-start items-center text-center'>
                    <Link to='Contact' spy={true} smooth={true} offset={-100} duration={500} onSetActive={() => setActiveLink('Contact')} className={`p-2 cursor-pointer hover:bg-slate-200 rounded-md ${activeLink === 'Contact' ? 'activeM' : ''}`}>
                      <i className="fa-solid fa-phone  mr-4 w-5"></i>
                      Contato
                    </Link>
                  </div>
                </ul>
              </List>
            </Drawer>
          </React.Fragment>
        </div>
    </header>
  );
}