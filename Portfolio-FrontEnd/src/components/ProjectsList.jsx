import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import TextField from "@mui/material/TextField"
import { useEffect } from "react"
import EmptyProjectList from "./EmptyProjectList"
import ProjectCard from "./ProjectCard"

const ProjectsList = ({user, projectsList, onSave, onDelete, isMyProjects = false}) => {

  useEffect(() => {
    if(isMyProjects) {
      console.log("Fetch my projects");
    } else {
      console.log("Discover projects");
    }
  })

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
          {projectsList.length >= 1 ? 
          projectsList.map((project) => { 
            return (
            <Grid item key={project.id} xs={12} sm={6} md={4} xl={3}>
              <ProjectCard isMyProjects={isMyProjects} project={project} onDelete={onDelete}/>
            </Grid>
            )
          })
        : <EmptyProjectList user={user} onSave={onSave}/>
        }
          
        </Grid>
      </Box>
    </>
  )
}

export default ProjectsList