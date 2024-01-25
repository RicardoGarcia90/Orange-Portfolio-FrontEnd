import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import NotificationsIcon from '@mui/icons-material/Notifications';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Menu, MenuItem } from "@mui/material";
import { useState } from "react";

const Navbar = () => {

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleOpen = (e) => {
    setAnchorEl(e.currentTarget);
  }
  const handleClose = () => {
    setAnchorEl(null);
  }

  return (
    <AppBar 
      sx={{
        backgroundColor: 'primary.dark', 
        display: 'flex', 
        flexDirection: 'row', 
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: {xs: '12px 24px', md: '16px 30px'},
        height: '73px',
        }}>

      <Box sx={{
        display: {xs: 'none', md: 'flex'},
        flexDirection: 'row',
        gap: '100px',
        alignItems: 'center',
      }}>
        <Box sx={{height: '41px'}}>
          <img src="src/assets/orange-portfolio-logo.png" alt="Logo do Orange Portfólio" />
        </Box>

        <Box sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: '14px',
          fontWeight: '400',
          fontSize: '20px',
        }}>
          <Link href="#" underline="none" color="inherit">
            Meus Projetos
          </Link>
          <Link href="#" underline="none" color="inherit">
            Descobrir
          </Link>
        </Box>
      </Box>

      <Box sx={{
        display: {xs: 'flex', md: 'none'},
        flexDirection: 'row',
        gap: '6px',
        alignItems: 'center',
      }}>
        <IconButton id="menu-button" color="inherit"
          aria-label="Open menu" 
          aria-controls={open ? 'nav-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleOpen}
        >
          <MenuIcon />
        </IconButton>
        
        <Menu
          id="nav-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": 'menu-button',
          }}
          sx={{fontSize: '16px'}}
        >
          <MenuItem onClick={handleClose} sx={{'&:hover': {backgroundColor: 'secondary.light'}}}>
            <Link href="#" underline="none" color="inherit">
              Meus Projetos
            </Link>
          </MenuItem>
          <MenuItem onClick={handleClose} sx={{'&:hover': {backgroundColor: 'secondary.light'}}}>
            <Link href="#" underline="none" color="inherit">
              Descobrir
            </Link>
          </MenuItem>
        </Menu>

        <Box sx={{height: '41px'}}>
          <img src="src/assets/orange-portfolio-logo.png" alt="Logo do Orange Portfólio" />
        </Box>
      </Box>
        
      <Box sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: '16px',
      }}>
        <Avatar src="src/assets/profile-pic.png" />
        <NotificationsIcon />
      </Box>
    </AppBar>
  )
}

export default Navbar