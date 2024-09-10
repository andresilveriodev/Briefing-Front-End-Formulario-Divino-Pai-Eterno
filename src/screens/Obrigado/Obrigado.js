import { Button, Box, Typography } from '@mui/material';
import React from 'react'
import {Link} from 'react-router-dom';
import FastRewindIcon from '@mui/icons-material/FastRewind';



function Obrigado() {

  return (
    <div>

     <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>

          <Box 
                  component="img" 
                  src="/Logotipo Vertical Principal.png"
                  alt="Logotipo"
                  sx={{ width: '120px', height: '30%', marginBottom: '30px' }}
            />

            <Box 
                  component="img" 
                  src="/check.png"
                  alt="check"
                  sx={{ width: '120px', height: '30%', marginBottom: '30px' }}
            />

            <Box sx={{display: 'flex', flexDirection: 'column'}}>
            <Typography sx={{paddingTop: '30px', paddingBottom: '30px', display: 'flex', justifyContent: 'center', textAlign: 'center', color: '#B80D46'}} variant="h5" gutterBottom>Seu Formulário Foi Enviado com sucesso! :)</Typography>
            </Box>

            <Button  sx={{marginTop: '30px'}} component={Link} to='/' > <FastRewindIcon/>  Voltar para os formulários </Button>

     </Box>
     


    </div>

  )
}

export default Obrigado;
