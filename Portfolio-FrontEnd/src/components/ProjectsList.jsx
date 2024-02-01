import Box from "@mui/material/Box"
import TextField from "@mui/material/TextField"
import Grid from "@mui/material/Grid"
import ProjectCard from "./ProjectCard"
import ProjectsSkeleton from "./ProjectsSkeleton"
import { useEffect } from "react"

const ProjectsList = ({isMyProjects = false}) => {

  let projectsList = [
    // { 
    //   id: 1,
    //   img: 'src/assets/project-1.png',
    //   avatar: 'src/assets/project-1-profile.png',
    //   name: 'Camila Soares',
    //   title: 'Ecommerce One Page',
    //   date: '12/23',
    //   description: 'Temos o prazer de compartilhar com vocês uma variação do nosso primeiro recurso gratuito. É um modelo de IA. Tentamos redesenhar uma versão mais minimalista do nosso primeiro projeto.',
    //   link: 'https://gumroad.com/products/wxCSL',
    //   tags: [
    //     {
    //       id: 1,
    //       desc: 'UX',
    //     },
    //     {
    //       id: 2,
    //       desc: 'Web'
    //     }
    //   ]
    // },
  ]

  const handleSkeletonClick = () => {
    if(isMyProjects) {
      // Open add Project
    } else {
      // Navigate to my portfolio
    }
  }

  useEffect(() => {
    if(isMyProjects) {
      // Fetch my projects
    } else {
      // Fetch all projects
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
          {
            projectsList.length > 0 
            ?
            projectsList.map((project) => {
              return (
              <Grid item key={project.id} xs={12} sm={6} md={4} xl={3}>
                <ProjectCard isMyProjects={isMyProjects} project={project} />
              </Grid>
              )
            })
            :
            <>
            <Grid item xs={12} sm={6} md={3.56} xl={3}>
              <ProjectsSkeleton handleClick={handleSkeletonClick} />
            </Grid>
            </>
          }
          
        </Grid>
      </Box>
    </>
  )
}

export default ProjectsList