"use client"
import SearchIcon from '@mui/icons-material/Search';
import Link from 'next/link';
import { Button} from '@mui/material';
import Drawer from './Drawer';

const Navbar = () => {
  const user = false;
  return (
    <header className='container'>
      <div className='flexItems'>
        <Drawer/>
        <Link className='link' href="/">
          <img src = {`/assets/logo1.png`}
          alt = "logo"/>
        </Link>
      </div>
          
      <div className='flexItems'>
          <div className='searchContainer'>
            <input type="text" placeholder="Search"/>
            <SearchIcon/>
          </div>
      </div >

      <div className='right'>
        <nav className='menuItems'><Link className='link' href="/">Home</Link></nav>
        <nav className='menuItems'><Link className='link' href="/courses">Courses</Link></nav>
        <nav className='menuItems'><Link className='link' href="/about">About</Link></nav>
        <nav className='menuItems'><Link className='link' href="/contact">Contact</Link></nav>
      </div >
      
      {/* <NavButton>
      {
        user ? <Menu/>:<Button color="inherit"><StyledLink href="/login">Login</StyledLink> </Button>
      }
      </NavButton>  */}

    </header>        

  )
}

export default Navbar