import Navbar from '../components/Navbar';
import ProjectsList from '../components/ProjectsList';
import Box from '@mui/material/Box';
import UserDataComponent from '../UserDataComponent/UserDataComponent';
import { Typography } from '@mui/material';
import userMock from '../model/User';
import projectMock from '../model/Project';

const MeuPortfolio = () => {
  
  const projectsList = [
    projectMock,
    {
      title: "Project test",
      description: "",
      link: "",
      tags: [
        {
          id: 0,
          desc: "",
        },
      ],
      image: "",
      date: "Today",
      author: userMock
    }
  ]

  const saveProject = (project) => {
    projectsList.push(project)
  }

  const deleteProject = (project) => {
    const index = projectsList.indexOf(project)
    projectsList.splice(index, 1)
  }
  
  return (
    <>
      <Navbar />

      <Box
        sx={{
          mx: { xs: '24px', md: '32px', xl: '10%' },
          mb: '100px',
        }}
      >
        <UserDataComponent user={userMock} ></UserDataComponent>
        
        <Typography variant="subtitle1" sx={{ mb: "16px"}}>Meus projetos</Typography>

        <ProjectsList user={userMock} projectsList={projectsList} onSave={saveProject} onDelete={deleteProject} isMyProjects={true} />
      </Box>
    </>
  );
};

export default MeuPortfolio;
