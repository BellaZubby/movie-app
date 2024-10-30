import { Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { menuItems } from './Header'
import MenuIcon from '@mui/icons-material/Menu'




const DrawerContainer = () => {
    const [openDrawer, setOpenDrawer] = React.useState(false);
    const drawerBtn = () => {
        setOpenDrawer(!openDrawer);
    }
  return (
    <>
        <Drawer open={openDrawer} onClose={drawerBtn} anchor="left">
            <List>
            {menuItems.map((items, i)=>(
                <NavLink  key={i} to={items.link} className='navLink'>
                <ListItemButton onClick={() => setOpenDrawer(false)}>
                 <ListItemIcon>
                     <ListItemText sx={{color:"blue"}}>
                        {items.name}
                     </ListItemText>
                 </ListItemIcon>
             </ListItemButton>
             </NavLink>
            ))}
            </List>
        </Drawer>
        <IconButton 
            sx={{marginLeft:"auto", color:"whitesmoke"}}
            onClick={drawerBtn}
        >
            <MenuIcon/>
        </IconButton>
    </>
  )
}

export default DrawerContainer