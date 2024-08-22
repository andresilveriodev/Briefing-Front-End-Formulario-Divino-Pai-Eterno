import React, {useState} from 'react'
import { useForm, FormProvider, Controller} from 'react-hook-form';
import { FormContainer, TextFieldElement } from 'react-hook-form-mui';
import { Box, Button, Container, Typography, FormControl, Select, MenuItem} from '@mui/material';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import SendIcon from '@mui/icons-material/Send';
import {Link} from 'react-router-dom';
import {enviarFormulario} from '../services/apiService';

function BriefingMarketing() {

  

  const methods = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const response = await enviarFormulario(data);
      console.log('Resposta do backend:', response);
    } catch (error) {
      console.error('Erro ao enviar o formulário:', error);
    }
  };

  const [solicitando, setSolicitando] = useState('');

  const handleSolicitandoChange = (event) => {
    setSolicitando(event.target.value);
  };

  return (

    <div>

            <Container>

                    <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

                    <Box 
                        component="img" 
                        src="/Logotipo Vertical Principal.png"
                        alt="Logotipo"
                        sx={{ width: '120px', height: '30%' }}
                    />
                    
                    <Typography sx={{paddingTop: '30px', paddingBottom: '30px', display: 'flex', justifyContent: 'center', textAlign: 'center', color: '#B80D46'}} variant="h5" gutterBottom>Briefing para demandas <br/> de Comunicação e Marketing</Typography>
                      
                    </Box>



                  



                  <FormProvider {...methods}>

                    <FormContainer  onSuccess={onSubmit}>


                    <Box mb={2} sx={{ paddingTop: '20px' }}>

                    <Typography sx={{ color: '#626262' }}>Departamento:</Typography>

                    <FormControl fullWidth sx={{ marginTop: '10px' }}>
                          <Controller
                            name="solicitando"
                            defaultValue=""
                            rules={{ required: "Você precisa selecionar uma opção" }}
                            render={({ field }) => (
                              <Select
                                {...field}
                                placeholder="Selecione a Plataforma"
                                required
                              >
                                <MenuItem value="Agro">AGRO</MenuItem>
                                <MenuItem value="Almoxarifado">ALMOXARIFADO</MenuItem>
                                <MenuItem value="Call Center">CALL CENTER</MenuItem>
                                <MenuItem value="Contabilidade">CONTABILIDADE</MenuItem>
                                <MenuItem value="Contratos">CONTRATOS</MenuItem>
                                <MenuItem value="Controle E Processos">CONTROLE E PROCESSOS</MenuItem>
                                <MenuItem value="Facilities">FACILITIES</MenuItem>
                                <MenuItem value="Financeiro">FINANCEIRO</MenuItem>
                                <MenuItem value="Gestão De Pessoas">GESTÃO DE PESSOAS</MenuItem>
                                <MenuItem value="Jurídico">JURÍDICO</MenuItem>
                                <MenuItem value="Obra Santuário Basílica">OBRA SANTUÁRIO BASÍLICA</MenuItem>
                                <MenuItem value="Recursos Humanos">RECURSOS HUMANOS</MenuItem>
                                <MenuItem value="Sa Agencia">SA AGENCIA</MenuItem>
                                <MenuItem value="Santuário">SANTUÁRIO</MenuItem>
                                <MenuItem value="Secretaria Da Presidência">SECRETARIA DA PRESIDÊNCIA</MenuItem>
                                <MenuItem value="Suprimentos">SUPRIMENTOS</MenuItem>
                                <MenuItem value="Tecnologia Da Informação">TECNOLOGIA DA INFORMAÇÃO</MenuItem>
                                <MenuItem value="Outro">OUTRO</MenuItem>
                              </Select>
                            )}
                          />
                    </FormControl>


                  </Box>


                      <Box mb={2} sx={{display: 'flex', justifyContent:'space-between', flexWrap: 'wrap', gap: 2}}>
                        <TextFieldElement placeholder="Ex: Pe. Marco Aurélio" sx={{paddingTop: '8px', width: { xs: '100%', sm: '100%', md: '100%px'} }} name="solicitante" label="Solicitante" required rules={{ required: "O campo Solicitante é obrigatório." }}  />
                        <TextFieldElement placeholder="Ex: 24/08/2024" sx={{paddingTop: '8px', width: { xs: '100%', sm: '100%', md: '100%px'} }} name="data" label="Data:" required rules={{ required: "O campo Solicitante é obrigatório." }}  />
                     
                      </Box>
                      


                      <Box mb={2} sx={{paddingTop: '20px'}}>
                        <Typography sx={{color: '#626262'}}>1. Qual é o tipo de material a ser produzido?</Typography>
                        <TextFieldElement 
                          fullWidth 
                          name="material a ser produzido" 
                          id="outlined-multiline-static"
                          multiline
                          rows={4}
                          defaultValue="Default Value" required rules={{ required: "O campo 'Qual é o tipo de material a ser produzido?' é obrigatório." }}
                          placeholder="Ex: Peça Feed e Story para Instagram sobre a devoção ao Divino Pai Eterno"  
                          />
                      </Box>


                      <Box mb={2} sx={{paddingTop: '20px'}}>
                        <Typography sx={{color: '#626262'}}>2. Qual é o objetivo desta produção?</Typography>
                        <TextFieldElement 
                          fullWidth 
                          name="objetivo desta produção" 
                          id="outlined-multiline-static"
                          multiline
                          rows={4}
                          defaultValue="Default Value"  message="Preencher esse campo" required rules={{ required: "O campo 'Qual é o objetivo desta produção?' é obrigatório." }} 
                          placeholder="Ex: Fortalecer a fé das mulheres idosas na Igreja Católica"  
                          />
                      </Box>


                      <Box mb={2} sx={{paddingTop: '20px'}}>
                        <Typography sx={{color: '#626262'}}>3. Qual é o Público-Alvo da ação:</Typography>
                        <TextFieldElement 
                          fullWidth 
                          name="Público-Alvo" 
                          id="outlined-multiline-static"
                          multiline
                          rows={4}
                          defaultValue="Default Value" required rules={{ required: "O campo 'Qual é o Público-Alvo da ação' é obrigatório." }}
                          placeholder="Ex: Mulheres idosas devotas do Divino Pai Eterno"  
                           />
                      </Box>


                      <Box mb={2} sx={{paddingTop: '20px'}}>
                        <Typography sx={{color: '#626262'}}>4. Qual é a mensagem fundamental que deseja comunicar? Como ela ressoa com os
                          valores e necessidades do público-alvo?</Typography>
                        <TextFieldElement 
                          fullWidth 
                          name="mensagem fundamental" 
                          id="outlined-multiline-static"
                          multiline
                          rows={4}
                          defaultValue="Default Value" required rules={{ required: "O campo é obrigatório." }}
                          placeholder="Ex: Reafirmar a importância da fé e da devoção ao Divino Pai Eterno na vida das mulheres"  
                          />
                      </Box>


                      <Box mb={2} sx={{paddingTop: '20px'}}>
                      <Typography sx={{color: '#626262'}}>5. Liste todos os canais por meio dos quais as ações serão divulgadas, justificando a
                          escolha de cada um baseado no perfil do público-alvo.</Typography>
                        <TextFieldElement 
                          fullWidth 
                          name="público-alvo" 
                          id="outlined-multiline-static"
                          multiline
                          rows={4}
                          defaultValue="Default Value" required rules={{ required: "O campo é obrigatório." }} 
                          placeholder="Ex: Redes sociais do Pai Eterno," 
                          />
                      </Box>



                      <Box mb={2} sx={{paddingTop: '20px'}}>
                        <Typography sx={{color: '#626262'}}>6. Estabeleça um cronograma detalhado com marcos específicos, incluindo datas de
                          início, revisões e conclusão</Typography> 
                        <TextFieldElement 
                          fullWidth 
                          name="cronograma detalhado" 
                          id="outlined-multiline-static"
                          multiline
                          rows={4}
                          defaultValue="Default Value" required rules={{ required: "O campo é obrigatório." }} 
                          placeholder="Ex: Início: 01/10/2024, Revisão: 15/10/2024, Conclusão: 30/10/2024" 
                          />
                      </Box>


                      <Box mb={2} sx={{paddingTop: '20px'}}>
                        <Typography sx={{color: '#626262'}}>7. Especifique os formatos tamanhos e as especificações técnicas dos materiais criativos
                          necessários, considerando a consistência com a identidade visual da marca.</Typography> 
                        <TextFieldElement 
                          fullWidth 
                          name="formatos e as especificações" 
                          id="outlined-multiline-static"
                          multiline
                          rows={4}
                          defaultValue="Default Value" required rules={{ required: "O campo é obrigatório." }} 
                          placeholder="Ex: Imagem horizontal: 1080x566px, Imagens em alta resolução com símbolos do Pai Eterno, Imagens de Mulheres rezando na igreja" 
                          />
                      </Box>


                      <Box mb={2} sx={{paddingTop: '20px'}}>
                        <Typography sx={{color: '#626262'}}>8. Inclua qualquer informação adicional que possa impactar a execução do projeto, como
                          restrições legais, sazonalidades do mercado ou particularidades culturais.</Typography> 
                        <TextFieldElement 
                          fullWidth 
                          name="informação adicional" 
                          id="outlined-multiline-static"
                          multiline
                          rows={4}
                          defaultValue="Default Value" required rules={{ required: "O campo é obrigatório." }} 
                          placeholder="Ex: Restrições quanto ao uso de símbolos religiosos, preferências culturais das idosas devotas" 
                          />
                      </Box>

                      <Button endIcon={<SendIcon />} size='large' sx={{ backgroundColor: '#B80D46'}}  type="submit" variant="contained">Enviar</Button>

                    </FormContainer>

                  </FormProvider>

                  <Button sx={{marginTop: '30px'}} component={Link} to='/' >Voltar</Button>

          </Container>

    

    </div>

    
  )
}

export default BriefingMarketing
