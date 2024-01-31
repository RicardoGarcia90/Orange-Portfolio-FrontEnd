import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import NotificationsIcon from '@mui/icons-material/Notifications';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Divider from "@mui/material/Divider";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
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
      position="static"
      sx={{
        backgroundColor: 'primary.dark', 
        display: 'flex', 
        flexDirection: 'row', 
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: {xs: '12px 24px', md: '16px 32px', xl: '16px 10%'},
        height: {xs: '64px', md: '73px'},
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
          anchorOrigin={{
            horizontal: 'left',
            vertical: 56,
          }}
          transformOrigin={{
            horizontal: 'center',
            vertical: 'top',
          }}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": 'menu-button',
          }}
          sx={{fontSize: '16px'}}
        >
          <MenuItem onClick={handleClose}>
            <Link href="#" underline="none" color="inherit">
              Meus Projetos
            </Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link href="#" underline="none" color="inherit">
              Descobrir
            </Link>
          </MenuItem>
          <Divider />
          <MenuItem onClick={handleClose}>
            <Link href="#" underline="none" color="inherit">
              Configurações
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