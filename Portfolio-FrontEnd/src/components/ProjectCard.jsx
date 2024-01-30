import Avatar from "@mui/material/Avatar"
import Box from "@mui/material/Box"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"
import Card from "@mui/material/Card"
import CardActionArea from "@mui/material/CardActionArea"
import CardMedia from "@mui/material/CardMedia"
import Chip from "@mui/material/Chip"
import ProjectDetail from "./ProjectDetail"
import { useState } from "react"

const ProjectCard = ({project}) => {

  const [detailIsOpen, setDetailIsOpen] = useState(false);

  const handleCloseDetail = () => setDetailIsOpen(false);
  const handleOpenDetail = () => setDetailIsOpen(true);

  return (
    <>
      <Card elevation={0}>
        <CardActionArea onClick={handleOpenDetail}>
          <CardMedia 
            component="img"
            image={project.img}
            alt="Project 1 image"
            sx={{
              height: '258px',
              borderRadius: '4px',
            }}
          />
          <CardContent sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            p: '8px 0',
          }}>
            <Box sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              color: 'text.secondary'
            }}>
              <Avatar 
                alt="User photo" 
                src={project.avatar}
                sx={{ width: 24, height: 24}}
              />
              <Typography>
                {project.name}
              </Typography>
              <Typography>
                •
              </Typography>
              <Typography>
                {project.date}
              </Typography>
            </Box>
            <Box sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              {project.tags.map((tag) => {
                return <Chip label={tag.desc} key={tag.id} />
              })}
            </Box>
          </CardContent>
        </CardActionArea>
      </Card>
      
      <ProjectDetail open={detailIsOpen} handleClose={handleCloseDetail} project={project} />
    </>
  )
}

export default ProjectCard