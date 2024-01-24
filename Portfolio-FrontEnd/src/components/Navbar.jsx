import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import NotificationsIcon from '@mui/icons-material/Notifications';

const Navbar = () => {

  return (
    <AppBar 
      sx={{
        backgroundColor: 'primary.dark', 
        display: 'flex', 
        flexDirection: 'row', 
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '16px 30px',
        height: '73px',
        }}>

      <Box sx={{
        display: 'flex',
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