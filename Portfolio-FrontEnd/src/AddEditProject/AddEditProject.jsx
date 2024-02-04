/* eslint-disable react/prop-types */
import {
  Container,
  TextField,
  Typography,
  styled,
  Button,
  IconButton,
  Modal,
  Stack,
} from "@mui/material";
import { useContext, useState } from "react";
import CollectionsIcon from "@mui/icons-material/Collections";
import ProjectDetail from "../components/ProjectDetail";
import Project from "../model/Project";
import SuccessMessage from "./SuccessMessage";
import axios from "axios";
import UserContext from "../contexts/UserContext";

export default function AddEditProject({
  projectData,
  userData,
  open,
  handleClose,
}) {
  const date = new Date();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear();
  const projectDate = `${month}/${year}`;

  const [isProjectDetailOpen, setIsProjectDetailOpen] = useState(false);
  const handleDialogOpen = () => setIsProjectDetailOpen(true);
  const handleDialogClose = () => setIsProjectDetailOpen(false);

  const [isSuccessDialogOpen, setIsSuccessDialogOpen] = useState(false);
  const handleSuccessDialogOpen = () => setIsSuccessDialogOpen(true);
  const handleSuccessDialogClose = () => {
    setIsSuccessDialogOpen(false);
    handleClose();
  };

  const project = projectData
    ? projectData
    : 
    {
      title: "",
      description: "",
      link: "",
      projectsTags: [
        {
          tag: {
            name: "",
          }
        },
      ],
      image: "",
      uploadDate: projectDate,
    };

  const [newProjectTitle, setNewProjectTitle] = useState(project.title);
  const [newProjectDescription, setNewProjectDescription] = useState(
    project.description
  );
  const [newProjectLink, setNewProjectLink] = useState(project.link);
  const [newProjectsTags, setNewProjectsTags] = useState(project.projectsTags);
  const [newProjectImage, setNewProjectImage] = useState(project.image);
  const [uploadImage, setUploadImage] = useState(null);

  const { user } = useContext(UserContext);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setUploadImage(file);
    const reader = new FileReader();
    reader.onloadend = () => {
      const image = reader.result;
      setNewProjectImage(image);
    };
    reader.readAsDataURL(file);
  };

  const handleTextChange = (event, field) => {
    const tagsList = event.target.value.split(",");
    const tags = tagsList.map((tag) => ({
      tag: {
        name: tag.trim(),
      }
    }));
    switch (field) {
      case "Título":
        setNewProjectTitle(event.target.value);
        break;
      case "Descrição":
        setNewProjectDescription(event.target.value);
        break;
      case "Link":
        setNewProjectLink(event.target.value);
        break;
      case "Tags":
        setNewProjectsTags(tags);
        break;
      default:
        break;
    }
  };

  const convertTagsToString = (tags) => {
    if(tags) {
      return tags.map((tag) => tag.tag.name).join(", ")
    } else {
      return ""
    }
  }

  const handleSave = () => {

    const uploadTags = newProjectsTags.map(tag => tag.tag.name)
    
    if(projectData) {
      const editedProject = new Project(
        newProjectTitle,
        newProjectLink,
        newProjectDescription,
        uploadImage,
        uploadTags,
      );
      console.log(editedProject)

      axios.put(`https://orangeportfolioapi.azurewebsites.net/api/v1/projects/${projectData.id}`, 
        editedProject, {
        headers: {
          Authorization: `bearer ${user.token}`,
          'Content-Type': 'multipart/form-data'
        }
      }).then((res) => {
        console.log(res);
  
        if(res.status == 201 || res.status == 200) {
          handleSuccessDialogOpen();
        } else {
          alert(`Algo deu errado! ${res.statusText}`)
        }
  
      }).catch((err) => {
        console.log(err)
      })
    } else {
      const savedProject = new Project(
        newProjectTitle,
        newProjectLink,
        newProjectDescription,
        uploadImage,
        uploadTags,
      );
      console.log(savedProject)

      axios.post(`https://orangeportfolioapi.azurewebsites.net/api/v1/projects`, 
        savedProject, {
        headers: {
          Authorization: `bearer ${user.token}`,
          'Content-Type': 'multipart/form-data'
        }
      }).then((res) => {
        console.log(res);
  
        if(res.status == 201) {
          handleSuccessDialogOpen();
        } else {
          alert(`Algo deu errado! ${res.statusText}`)
        }
  
      }).catch((err) => {
        console.log(err)
      })
    }
    
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Container
        maxWidth={"md"}
        sx={{
          bgcolor: "#FEFEFE",
          flexDirection: "column",
          gap: "24px",
          pt: "24px",
          pb: "24px",
          overflowY: "auto",
          height: { xs: "100%", md: "auto" },
        }}
      >
        <Stack id="title-container">
          <Typography variant="h5">
            {projectData ? "Editar projeto" : "Adicionar projeto"}
          </Typography>
        </Stack>

        <Stack
          id="image-input-form-container"
          sx={{
            flexDirection: { xs: "column", sm: "row-reverse" },
            hight: { xs: "713px", sm: "336px" },
            width: { xs: "100%", sm: "826px" },
            gap: "16px",
            mt: "24px",
            mb: "16px",
          }}
        >
          <Stack
            id="input-side"
            sx={{
              width: { xs: "100%", sm: "413px" },
            }}
          >
            <Stack
              id="input-container"
              sx={{
                gap: "16px",
              }}
            >
              <InputText
                label="Título"
                defaultText={project.title}
                handleTextChange={handleTextChange}
              />
              <InputText
                label="Tags"
                defaultText={convertTagsToString(project.projectsTags)}
                handleTextChange={handleTextChange}
              />
              <InputText
                label="Link"
                defaultText={project.link}
                handleTextChange={handleTextChange}
              />
              <InputText
                label="Descrição"
                defaultText={project.description}
                handleTextChange={handleTextChange}
              />
            </Stack>
          </Stack>

          <Stack
            id="image-side-form"
            sx={{
              maxWidth: { xs: "100%", sm: "389px" },
              height: { xs: "353px", sm: "341px" },
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="subtitle1">
              Selecione o conteúdo que você deseja fazer upload
            </Typography>

            <Stack
              id="image-upload-container"
              sx={{
                bgcolor: "neutral.light",
                width: "100%",
                height: "304px",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {newProjectImage ? (
                <Stack
                  id="image-container"
                  sx={{ width: "100%", height: "100%" }}
                >
                  <img
                    src={newProjectImage}
                    alt="Project's image"
                    onClick={() => setNewProjectImage(null)}
                    id='projectImage'
                  />
                </Stack>
              ) : (
                <Stack
                  id="upload-container"
                  sx={{
                    bgcolor: "neutral.light",
                  }}
                >
                  <Stack id="upload-button">
                    <IconButton
                      component="label"
                      variant="contained"
                      sx={{
                        flexDirection: "column",
                        gap: "16px",
                      }}
                    >
                      <CollectionsIcon fontSize="large" />
                      <Typography
                        variant="body2"
                        sx={{
                          alignSelf: "flex-start",
                        }}
                      >
                        Compartilhe seu talento com milhares de pessoas
                      </Typography>
                      <input
                        type="file"
                        accept="image/*"
                        style={{ display: "none" }}
                        onChange={(event) => handleImageUpload(event)}
                      />
                    </IconButton>
                  </Stack>
                </Stack>
              )}
            </Stack>
          </Stack>
        </Stack>

        <Stack
          id="button-container"
          spacing={2}
          sx={{
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <Typography
            variant="subtitle1"
            onClick={handleDialogOpen}
            sx={{
              "&:hover": { cursor: "pointer" },
            }}
          >
            Visualizar publicação
          </Typography>
          
          <Stack
            id="buttons"
            sx={{
              flexDirection: "row",
              gap: "16px",
            }}
          >
            <SaveButton variant="contained" color="secondary" onClick={handleSave}>
              <Typography variant="button">Salvar</Typography>
            </SaveButton>

            <CancelButton variant="contained" onClick={handleClose}>
              <Typography variant="button">Cancelar</Typography>
            </CancelButton>
          </Stack>

          <ProjectDetail
            open={isProjectDetailOpen}
            handleClose={handleDialogClose}
            project={{
              title: newProjectTitle,
              description: newProjectDescription,
              link: newProjectLink,
              projectsTags: newProjectsTags,
              image: newProjectImage,
              uploadDate: projectDate,
              author: `${userData.name} ${userData.lastName}`,
              avatarAuthor: userData.avatar,
            }}
          />

          <SuccessMessage
            messageType={projectData ? "edit" : "add"}
            open={isSuccessDialogOpen}
            handleClose={handleSuccessDialogClose}
          />
  
        </Stack>
      </Container>
    </Modal>
  );
}

function InputText({ label, defaultText, handleTextChange }) {
  return (
    <TextField
      label={label}
      variant="outlined"
      multiline
      defaultValue={defaultText}
      rows={label === "Descrição" ? 4 : 1}
      onChange={(event) => handleTextChange(event, label)}
    />
  );
}

const SaveButton = styled(Button)({
  color: "#FCFDFF",
});

const CancelButton = styled(Button)({
  backgroundColor: "rgba(0, 0, 0, 0.12)",
  color: "rgba(0, 0, 0, 0.38)",
});
