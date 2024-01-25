import Box from "@mui/material/Box"
import TextField from "@mui/material/TextField"

const ProjectsList = () => {
  return (
    <>
      <Box 
        sx={{
          maxWidth: '723px',
        }}>
        <TextField id="buscar-tags" label="Buscar tags" variant="outlined" fullWidth/>
      </Box>
    </>
  )
}

export default ProjectsList