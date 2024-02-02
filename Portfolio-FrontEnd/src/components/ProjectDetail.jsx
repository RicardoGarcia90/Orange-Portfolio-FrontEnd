import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import CloseIcon from '@mui/icons-material/Close';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const ProjectDetail = ({open, handleClose, project}) => {

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Modal
      hideBackdrop={isMobile}
      open={open}
      onClose={handleClose}
      aria-labelledby="project-modal"
      sx={{
        overflowY: 'auto',
      }}
    >
      <Box 
        sx={{
          position: 'relative',
          maxWidth: '1042px',
          bgcolor: 'background.default',
          mt: {xs: '0', sm: '100px', md: '176px'},
          mx: {xs: '0', sm: '10%', md: '119px'},
          p: {xs: '61px 24px', md: '61px 112px'},
          height: {xs: '100%', md: 'auto'},
        }}
      >
        <Box sx={{
          position: 'absolute',
          right: '16px',
          top: '16px',
        }}>
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </Box>

        <Box 
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Box sx={{
            display: {xs: 'none', md: 'flex'},
            alignItems: 'center',
            gap: '12px',
          }}>
            <Avatar alt="User photo" src={project.author.avatar} sx={{width: '40px', height: '40px',}} />
            <Box sx={{display: 'flex', flexDirection: 'column', gap: '8px',}}>
              <Typography component="p" sx={{color: 'neutral.colorNeutral120'}}>
                {project.author.name} {project.author.lastName}
              </Typography>
              <Typography component="p" sx={{color: 'neutral.colorNeutral110',}}>
                {project.date}
              </Typography>
            </Box>
          </Box>

          <Typography variant='h5' component='h2' align='center' sx={{m: '0 auto'}}>
            {project.title}
          </Typography>

          <Box 
            sx={{
              display: {xs: 'none', md: 'flex'},
              alignItems: 'center',
              gap: '8px'
            }}
          >
            {project.projectsTags.map((tag, index) => {
              return <Chip label={tag.tag.name} key={index} />
            })}
          </Box>
        </Box>

        <Box sx={{
          width: '100%',
          mt: '32px',          
        }}>
          <img src={project.image} />
        </Box>

        <Box 
          sx={{
            display: {xs: 'flex', sm: 'flex', md: 'none'},
            alignItems: 'center',
            justifyContent: 'space-between',
            mt: '8px',
          }}
        >
          <Box sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}>
            <Avatar alt="User photo" src={project.author.avatar} sx={{width: '40px', height: '40px',}} />
            
            <Typography component="p" sx={{color: 'neutral.colorNeutral110'}}>
              {project.author.name} {project.author.lastName} • {project.date}
            </Typography>
            
          </Box>

          <Box 
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            {project.projectsTags.map((tag, index) => {
              return <Chip label={tag.tag.name} key={index} />
            })}
          </Box>
        </Box>

        <Typography variant='body1' component='p'
          sx={{
            mt: {xs: '16px', md: '64px'},
          }}
        >
          {project.description}
        </Typography>
        
        <Typography variant='subtitle1' component='h3' sx={{mt: '32px'}}>
          Download
        </Typography>
        
        <Link href={project.link} target='_blank' variant='body2' sx={{color: 'info.colorInfo80',}}>
          {project.link}
        </Link>

      </Box>
    </Modal>
  )
}

export default ProjectDetail