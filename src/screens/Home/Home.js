import { Button, Box } from '@mui/material';
import React from 'react'
import {Link} from 'react-router-dom';



function Home() {

  return (
    <div>

     <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>

          <Box 
                  component="img" 
                  src="/Logotipo Vertical Principal.png"
                  alt="Logotipo"
                  sx={{ width: '120px', height: '30%', marginBottom: '30px' }}
            />

            <Box sx={{display: 'flex', flexDirection: 'column'}}>
                  <Button sx={{marginBottom: {xs: '10px'},backgroundColor: '#B80D46',}} variant='contained' component={Link} to='/BriefingMarketing' >BRIEFING PROJETOS MKT</Button>
                  <Button sx={{marginBottom: {xs: '10px'},backgroundColor: '#13435C',}} variant='contained' component={Link} to='/BriefingRedesSociais' >BRIEFING COBERTURAS | PUBLICAÇÕES REDES SOCIAIS</Button>
            </Box>

     </Box>
     


    </div>

  )
}

export default Home;
