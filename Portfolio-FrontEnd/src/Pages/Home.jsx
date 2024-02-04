import Navbar from "../components/Navbar"
import ProjectsList from "../components/ProjectsList"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import { useContext, useEffect } from "react"
import { ReloadContext } from "../contexts/ReloadContext"

const Home = () => {

  const { setReload } = useContext(ReloadContext);

  useEffect(() => {
    setReload(true)
  }, [])

  return (
    <>
      <Navbar />

      <Box sx={{
        mx: {xs: '24px', md: '32px', xl: '10%'},
        mb: '100px'
      }}>
        <Typography variant="h4" component="h1" color={'primary'}
        sx={{
          maxWidth: '744px',
          textAlign: 'center',
          marginX: {sm: 'auto', md: 'auto'},
          marginTop: {xs: '64px', md: '112px'},
          marginBottom: {xs: '40px', md: '112px'},
          fontWeight: '400',
          fontSize: {xs: '24px', md: '34px'},
          letterSpacing: '0.25px',
        }}
        >
          Junte-se à comunidade de inovação, inspiração e descobertas, transformando experiências em conexões inesquecíveis
        </Typography>

        <ProjectsList />
      </Box>
    </>
  )
}

export default Home