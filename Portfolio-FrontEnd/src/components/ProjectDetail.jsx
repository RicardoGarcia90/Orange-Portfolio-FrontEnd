import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'

const ProjectDetail = ({open = false, handleClose, project}) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="project-modal"
    >
      <Box 
        sx={{
          maxWidth: '1042px',
          bgcolor: 'background.default',
          mt: '176px',
          mx: '119px',
          p: '61px 112px'
        }}
      >
        <Typography>
          {project.name}
        </Typography>
      </Box>
    </Modal>
  )
}

export default ProjectDetail