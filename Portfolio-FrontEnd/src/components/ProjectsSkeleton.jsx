import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CollectionsIcon from '@mui/icons-material/Collections';

const ProjectsSkeleton = ({handleClick}) => {
  return (
    <Card
      elevation={0}
      sx={{
        bgcolor: "neutral.light",
        height: "258px",
      }}
    >
      <CardActionArea onClick={handleClick}>
        <Box
          sx={{
            boxSizing: 'border-box',
            height: '258px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            py: '68px',
            px: {xs: '10%', md: '14%'}
          }}
        >
          <CollectionsIcon fontSize='large' sx={{m: '0 auto'}} />
          <Typography variant='body1' align='left' sx={{opacity: '60%'}}>
            Adicione seu primeiro projeto
          </Typography>
          <Typography variant='body2' align='left' sx={{opacity: '60%'}}>
            Compartilhe seu talento com milhares de pessoas
          </Typography>
        </Box>
      </CardActionArea>
    </Card>
  );
};

export default ProjectsSkeleton;
