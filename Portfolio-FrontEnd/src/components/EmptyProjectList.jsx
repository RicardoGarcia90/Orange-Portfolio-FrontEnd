import CollectionsIcon from "@mui/icons-material/Collections";
import { Stack } from "@mui/material";
import Card from "@mui/material/Card";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import AddEditProject from "../AddEditProject/AddEditProject";

const EmptyProjectList = ({ user, onSave }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const handleDialogOpen = () => setIsDialogOpen(true);
  const handleDialogClose = () => setIsDialogOpen(false);

  return (
    <>
      <Card elevation={0} sx={{ position: "relative" }}>
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
          <IconButton
            component="label"
            variant="contained"
            onClick={handleDialogOpen}
            sx={{
              flexDirection: "column",
              gap: "16px",
            }}
          >
            <CollectionsIcon fontSize="large" />
            <Typography variant="subtitle1">
              Adicione seu primeiro projeto
            </Typography>
            <Typography variant="body2">
              Compartilhe seu talento com milhares de pessoas
            </Typography>
          </IconButton>
        </Stack>
      </Card>

      <AddEditProject
        userData={user}
        open={isDialogOpen}
        handleClose={handleDialogClose}
        onSave={onSave}
      />
    </>
  );
};

export default EmptyProjectList;
