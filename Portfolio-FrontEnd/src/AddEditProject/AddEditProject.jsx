/* eslint-disable react/prop-types */
import { TextField, styled } from "@mui/material";
import "./AddEditProjectStyle.css";
import Button from "@mui/material/Button";

export default function AddEditProject({ isProjectBlank, srcImage }) {
  return (
    <div id="card">
      
      <h5 id="card-title">
        {isProjectBlank ? "Adicionar projeto" : "Editar projeto"}
      </h5>
      
      <div id="input-form-container">
        
        <div id="left-side-form-container">

          <p id="upload-selection-text">Selecione o conteúdo que você deseja fazer upload</p>
          <div id="image-container">
            {!isProjectBlank && <img src={srcImage} alt="Project's image" id="project-image"/>}
            <input type="file" id="image-picker" accept="image/*"/>
          </div>
        </div>

        <form id="right-side-form-container">
          <InputText placeholder="Título" />
          <InputText placeholder="Tags" />
          <InputText placeholder="Link" />
          <InputText placeholder="Descrição" />
        </form>

      </div>

      <div id="button-container">
        <a href="#" id="project-preview-button">Visualizar publicação</a>
        <div id="buttons">
          <SaveButton variant="contained">Salvar</SaveButton>
          <CancelButton variant="contained">Cancelar</CancelButton>
        </div>
      </div>

    </div>
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
  backgroundColor: "#f52",
  color: "#FCFDFF",
  fontFamily: "'Roboto', sans-serif",
  fontSize: "15px",
  fontStyle: "normal",
  fontWeight: 500,
  lineHeight: "26px" /* 173.333% */,
  letterSpacing: "0.46px",
  textTransform: "uppercase",
});

const CancelButton = styled(Button)({
  backgroundColor: "rgba(0, 0, 0, 0.12)",
  color: "rgba(0, 0, 0, 0.38)",
  fontFamily: "'Roboto', sans-serif",
  fontSize: "15px",
  fontStyle: "normal",
  fontWeight: 500,
  lineHeight: "26px" /* 173.333% */,
  letterSpacing: "0.46px",
  textTransform: "uppercase",
});
