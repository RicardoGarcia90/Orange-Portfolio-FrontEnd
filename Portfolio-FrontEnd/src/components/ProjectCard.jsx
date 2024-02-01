import EditIcon from '@mui/icons-material/Edit'
import Avatar from "@mui/material/Avatar"
import Box from "@mui/material/Box"
import Card from "@mui/material/Card"
import CardActionArea from "@mui/material/CardActionArea"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Chip from "@mui/material/Chip"
import IconButton from "@mui/material/IconButton"
import Menu from "@mui/material/Menu"
import MenuItem from "@mui/material/MenuItem"
import Typography from "@mui/material/Typography"
import { useState } from "react"
import AddEditProject from "../AddEditProject/AddEditProject"
import DeleteConfirmation from "../AddEditProject/DeleteConfirmation"
import ProjectDetail from "./ProjectDetail"

const ProjectCard = ({project, onDelete, isMyProjects}) => {

  const [detailIsOpen, setDetailIsOpen] = useState(false);
  const [editAnchor, setEditAnchor] = useState(null);
  const editOpen = Boolean(editAnchor);

  const handleCloseDetail = () => setDetailIsOpen(false);
  const handleOpenDetail = () => setDetailIsOpen(true);
  
  const handleOpenEdit = (event) => setEditAnchor(event.currentTarget);
  const handleCloseEdit = () => setEditAnchor(null);

  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const handleEditDialogOpen = () => setIsEditDialogOpen(true);
  const handleEditDialogClose = () => setIsEditDialogOpen(false);

  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const handleDeleteDialogOpen = () => setIsDeleteDialogOpen(true);
  const handleDeleteDialogClose = () => setIsDeleteDialogOpen(false);

  const handleEditDelete = (action) => {
    switch (action) {
      case 'Editar':
        handleEditDialogOpen()
        break;
      case 'Excluir':
        handleDeleteDialogOpen()
        break;
      default:
        break;
    }
  } 

  return (
    <>
      <Card elevation={0} sx={{position: 'relative'}}>
        <CardActionArea onClick={handleOpenDetail}>
          <CardMedia 
            component="img"
            image={project.image}
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
              <Typography component='p'>
                {project.name} • {project.date}
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

        {isMyProjects && 
          <Box sx={{
            position: 'absolute',
            top: '18px',
            right: '18px',
          }}>
            <IconButton 
              size='small' 
              aria-label='edit'
              id='edit-btn'
              onClick={handleOpenEdit}
              sx={{
                bgcolor: 'secondary.light',
                '&:hover': {
                  bgcolor: 'secondary.light',
                }
              }}
            >
              <EditIcon />
            </IconButton>
            <Menu
              id='edit-menu'
              anchorEl={editAnchor}
              open={editOpen}
              onClose={handleCloseEdit}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: -5,
                horizontal: 'right',
              }}
              sx={{
                width: '208px',
              }}
            >
              {["Editar", "Excluir"].map((item) => {
                return (
                <MenuItem key={item} onClick={() => {handleEditDelete(item)}} 
                  sx={{
                    width: '208px',
                    '&:hover': {
                      bgcolor: 'secondary.colorSecondary60',
                    }
                  }}
                >
                  {item}
                </MenuItem>
                )
              })}
            </Menu>
          </Box>
        }
      </Card>
      
      <AddEditProject projectData={project} userData={project.author} open={isEditDialogOpen} handleClose={handleEditDialogClose} />
      <DeleteConfirmation open={isDeleteDialogOpen} handleClose={handleDeleteDialogClose} project={project} onDelete={onDelete}/>
      <ProjectDetail open={detailIsOpen} handleClose={handleCloseDetail} project={project} />
    </>
  )
}

export default ProjectCard