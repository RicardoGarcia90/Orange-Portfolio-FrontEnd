/* eslint-disable react/prop-types */
import {
  Box,
  Container,
  TextField,
  Typography,
  styled,
  Button,
} from "@mui/material";

export default function AddEditProject({ isProjectBlank, srcImage }) {
  return (
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
          mt: "24px"
        }}
      >
        {isProjectBlank ? "Adicionar projeto" : "Editar projeto"}
      </Typography>

      <Box
        id="input-form-container"
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: { sm: "column-reverse", md: "row" },
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
          <img src={srcImage} alt="Project's image" style={{
            width: "390px",
            height: "307px"
          }} />
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
          <InputText placeholder="Título" />
          <InputText placeholder="Tags" />
          <InputText placeholder="Link" />
          <InputText placeholder="Descrição" />
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
  );
}

function InputText({ placeholder }) {
  return (
    <TextField
      label={placeholder}
      variant="outlined"
      fullWidth
      multiline
      rows={placeholder === "Descrição" ? 4 : 1}
    />
  );
}

const SaveButton = styled(Button)({
  backgroundColor: "#FF5522",
  color: "#FCFDFF",
});

const CancelButton = styled(Button)({
  backgroundColor: "rgba(0, 0, 0, 0.12)",
  color: "rgba(0, 0, 0, 0.38)",
});

const clickFunction = () => {
  alert("Clicked");
};