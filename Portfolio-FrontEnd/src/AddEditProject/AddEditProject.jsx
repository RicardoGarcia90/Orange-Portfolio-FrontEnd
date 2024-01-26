/* eslint-disable react/prop-types */
import {
  Box,
  Container,
  TextField,
  Typography,
  styled,
  Button,
  IconButton,
  Modal,
} from "@mui/material";
import { useState } from "react";
import CollectionsIcon from "@mui/icons-material/Collections";

export default function AddEditProject({ isProjectBlank }) {
  const [projectImage, setProjectImage] = useState(null);
  const [projectTitle, setProjectTitle] = useState("123");
  const [projectDescription, setProjectDescription] = useState("");
  const [projectLink, setProjectLink] = useState("");
  const [projectTags, setProjectTags] = useState([""]);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setProjectImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleTextChange = (event, field) => {
    switch (field) {
      case "Título":
        setProjectTitle(event.target.value);
        break;
      case "Descrição":
        setProjectDescription(event.target.value);
        break;
      case "Link":
        setProjectLink(event.target.value);
        break;
      case "Tags":
        setProjectTags(event.target.value.split(","));
        break;
      default:
        break;
    }
  };

  const clickFunction = () => {
    alert(`
    Título do projeto: ${projectTitle}
    Link do projeto: ${projectLink}
    Descrição do projeto: ${projectDescription}
    Tags do projeto: ${projectTags.join(", ")}
    `);
  };

  return (
    <Modal open>
      <Container
        maxWidth="md"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          background: "#fefefe",
          width: "100%",
          height: "100%",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            maxWidth: "826px",
            mt: "24px",
          }}
        >
          {isProjectBlank ? "Adicionar projeto" : "Editar projeto"}
        </Typography>

        <Box
          id="input-form-container"
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: {
              xs: "column-reverse",
              sm: "column-reverse",
              md: "row",
            },
            alignItems: "flex-start",
            gap: "24px",
            mt: "24px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "16px",
            }}
          >
            <Typography
              variant="subtitle1"
              sx={{
                alignSelf: "stretch",
              }}
            >
              Selecione o conteúdo que você deseja fazer upload
            </Typography>

            <Box>
              {projectImage ? (
                <Box>
                  <img
                    src={projectImage}
                    alt="Project's image"
                    onClick={() => setProjectImage(null)}
                    style={{
                      width: "390px",
                      height: "307px",
                    }}
                  />
                </Box>
              ) : (
                <Box
                  sx={{
                    width: "390px",
                    height: "307px",
                    bgcolor: "#E6E9F2",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Box>
                    <IconButton
                      component="label"
                      variant="contained"
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "270px",
                        height: "122px",
                        gap: "16px",
                      }}
                    >
                      <CollectionsIcon fontSize="large" />
                      <Typography
                        variant="body2"
                        sx={{ display: "flex", justifyContent: "flex-start" }}
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
                  </Box>
                </Box>
              )}
            </Box>
          </Box>

          <Box
            sx={{
              width: "413px",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "16px",
              alignSelf: "stretch",
            }}
          >
            <InputText label="Título" handleTextChange={handleTextChange} />
            <InputText label="Tags" handleTextChange={handleTextChange} />
            <InputText label="Link" handleTextChange={handleTextChange} />
            <InputText label="Descrição" handleTextChange={handleTextChange} />
          </Box>
        </Box>

        <Box
          id="button-container"
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            gap: "16px",
            mt: "16px",
            mb: "24px",
          }}
        >
          <a href="/">
            <Typography variant="subtitle1">Visualizar publicação</Typography>
          </a>

          <Box
            id="buttons"
            sx={{
              display: "flex",
              alignItems: "flex-start",
              gap: "16px",
            }}
          >
            <SaveButton variant="contained" onClick={clickFunction}>
              <Typography variant="button">Salvar</Typography>
            </SaveButton>

            <CancelButton variant="contained" onClick={clickFunction}>
              <Typography variant="button">Cancelar</Typography>
            </CancelButton>
          </Box>
        </Box>
      </Container>
    </Modal>
  );
}

function InputText({ label, handleTextChange }) {
  return (
    <TextField
      label={label}
      variant="outlined"
      fullWidth
      multiline
      rows={label === "Descrição" ? 4 : 1}
      onChange={(event) => handleTextChange(event, label)}
    />
  );
}

const SaveButton = styled(Button)({
  backgroundColor: "#f52",
  color: "#FCFDFF",
});

const CancelButton = styled(Button)({
  backgroundColor: "rgba(0, 0, 0, 0.12)",
  color: "rgba(0, 0, 0, 0.38)",
});
