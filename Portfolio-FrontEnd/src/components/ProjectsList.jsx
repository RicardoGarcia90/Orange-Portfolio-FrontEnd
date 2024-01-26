import Box from "@mui/material/Box"
import TextField from "@mui/material/TextField"
import Grid from "@mui/material/Grid"
import ProjectCard from "./ProjectCard"

const ProjectsList = () => {

  let projectsList = [
    { 
      id: 1,
      img: 'src/assets/project-1.png',
      avatar: 'src/assets/project-1-profile.png',
      name: 'Camila Soares',
      date: '12/23',
      tags: [
        {
          id: 1,
          desc: 'UX',
        },
        {
          id: 2,
          desc: 'Web'
        }
      ]
    }
  ]

  return (
    <>
      <Box 
        sx={{
          maxWidth: '723px',
          mb: '40px'
        }}>
        <TextField id="buscar-tags" label="Buscar tags" variant="outlined" fullWidth/>
      </Box>

      <Box>
        <Grid container spacing={2} columnSpacing={'20px'}>
          {projectsList.map((project) => {
            return (
            <Grid item key={project.id} xs={12} sm={6} md={4} xl={3}>
              <ProjectCard project={project} />
            </Grid>
            )
          })}
          
        </Grid>
      </Box>
    </>
  )
}

export default ProjectsList