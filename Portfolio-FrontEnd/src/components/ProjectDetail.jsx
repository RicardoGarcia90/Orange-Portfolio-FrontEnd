import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import CloseIcon from '@mui/icons-material/Close';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';

const ProjectDetail = ({open = false, handleClose, project}) => {
  return (
    <Modal
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
          mt: {xs: '100px', md: '176px'},
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
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
          }}>
            <Avatar alt="User photo" src={project.avatar} sx={{width: '40px', height: '40px',}} />
            <Box sx={{display: 'flex', flexDirection: 'column', gap: '8px',}}>
              <Typography component="p" sx={{color: 'neutral.colorNeutral120'}}>
                {project.name}
              </Typography>
              <Typography component="p" sx={{color: 'neutral.colorNeutral110',}}>
                {project.date}
              </Typography>
            </Box>
          </Box>

          <Typography variant='h5' component='h2'>
            {project.title}
          </Typography>

          <Box 
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            {project.tags.map((tag) => {
              return <Chip label={tag.desc} key={tag.id} />
            })}
          </Box>
        </Box>

        <Box sx={{
          width: '100%',
          mt: '32px',
          mb: '64px'
        }}>
          <img src={project.img} />
        </Box>

        <Typography variant='body1' component='p'>
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