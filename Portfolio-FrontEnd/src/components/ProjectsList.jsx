import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import ProjectCard from './ProjectCard';
import ProjectsSkeleton from './ProjectsSkeleton';
import { useContext, useEffect, useState } from 'react';
import AddEditProject from '../AddEditProject/AddEditProject';
import UserContext from '../contexts/UserContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ReloadContext } from '../contexts/ReloadContext';

const ProjectsList = ({ isMyProjects = false }) => {
  // let projectsList = [
  //   {
  //     id: 1,
  //     img: 'src/assets/project-1.png',
  //     avatar: 'src/assets/project-1-profile.png',
  //     name: 'Camila Soares',
  //     title: 'Ecommerce One Page',
  //     date: '12/23',
  //     description: 'Temos o prazer de compartilhar com vocês uma variação do nosso primeiro recurso gratuito. É um modelo de IA. Tentamos redesenhar uma versão mais minimalista do nosso primeiro projeto.',
  //     link: 'https://gumroad.com/products/wxCSL',
  //     tags: [
  //       {
  //         id: 1,
  //         desc: 'UX',
  //       },
  //       {
  //         id: 2,
  //         desc: 'Web'
  //       }
  //     ]
  //   },
  // ]

  const {reload, setReload} = useContext(ReloadContext);

  const [projectsList, setProjectsList] = useState([]);

  const { user } = useContext(UserContext);

  const navigate = useNavigate();

  const [isAddOpen, setIsAddOpen] = useState(false);
  const handleAddOpen = () => setIsAddOpen(true);
  const handleAddClose = () => setIsAddOpen(false);

  const handleSearch = (e) => {
    let search = e.target.value;
    if(search.length > 1) {
      console.log(search);
    }
  }

  const handleSkeletonClick = () => {
    if (isMyProjects) {
      handleAddOpen();
    } else {
      navigate('/meuportfolio');
    }
  };

  useEffect(() => {
    if(reload) {
      if(isMyProjects) {
        axios.request({
          headers: {
            Authorization: `bearer ${user.token}`
          },
          method: 'GET',
          url: `https://orangeportfolioapi.azurewebsites.net/api/v1/projects/myprojects`,
        })
        .then((res) => {
          console.log(res);
          setProjectsList(res.data);
        })
      } else {
        axios.request({
          headers: {
            Authorization: `bearer ${user.token}`
          },
          method: 'GET',
          url: `https://orangeportfolioapi.azurewebsites.net/api/v1/projects`,
        })
        .then((res) => {
          console.log(res)
          setProjectsList(res.data);
        })
      }
    }
    setReload(false);
  }, [reload])

  return (
    <>
      <Box
        sx={{
          maxWidth: '723px',
          mb: '40px',
        }}
      >
        <TextField
          id="buscar-tags"
          label="Buscar tags"
          variant="outlined"
          fullWidth
          onChange={handleSearch}
        />
      </Box>

      <Box>
        <Grid container spacing={2} columnSpacing={'20px'}>
          {projectsList.length > 0 ? (
            projectsList.map((project) => {
              return (
                <Grid item key={project.id} xs={12} sm={6} md={4} xl={3}>
                  <ProjectCard isMyProjects={isMyProjects} project={project} />
                </Grid>
              );
            })
          ) : (
            <>
              <Grid item xs={12} sm={6} md={3.56} xl={3}>
                <ProjectsSkeleton handleClick={handleSkeletonClick} />
              </Grid>
            </>
          )}
        </Grid>
      </Box>

      <AddEditProject
        userData={user}
        open={isAddOpen}
        handleClose={handleAddClose}
      />
    </>
  );
};

export default ProjectsList;
