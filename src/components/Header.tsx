import { AppBar, Toolbar, Typography, Tab, useTheme, useMediaQuery } from '@mui/material'
import { NavbarWrapper } from '@/styles/Styles.modules'
import DrawerContainer from './DrawerContainer';
import { NavLink } from 'react-router-dom';



export const menuItems = [
    {name: "Home", link: "/"},
    {name: "Now Playing", link: "now_playing"},
    {name: "Popular", link: "popular"},
    {name: "Tv Shows", link: "tv_shows"}
]

const Header = () => {
    const themes = useTheme();
    const isMatching = useMediaQuery(themes.breakpoints.down("md"))
  return (
    <NavbarWrapper>
        <AppBar sx={{padding:"10px", backgroundColor:"#063970"}}>
            <Toolbar>
               <Typography className='logo'>MovieHouse</Typography>
                    {
                        isMatching ? (
                            <DrawerContainer/>  
                        ): (
                            <>
                            <div className='navLinks'>
                            {menuItems.map((item, i) => (
                                <NavLink  key={i}  to={item.link}>
                                     <Tab className='links' label={item.name} />
                                </NavLink>
                               
                   ))} 
                   </div>
                     </>
                        )
                    }
            </Toolbar>
        </AppBar>
        
    </NavbarWrapper>
  )
}

export default Header