import React, {useState} from 'react'
import { useForm, FormProvider, Controller } from 'react-hook-form';
import { FormContainer, TextFieldElement } from 'react-hook-form-mui';
import { Box, Typography, TextField, MenuItem, Select, FormControl, InputLabel, Button, Container, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import SendIcon from '@mui/icons-material/Send';
import {Link} from 'react-router-dom';
import EventIcon from '@mui/icons-material/Event';
import {enviarFormulario} from '../services/apiService';


function BriefingMarketing() {

  const methods = useForm();


  // Função para formatar o conteúdo do e-mail
  function formatEmailData(formData) {
    return `
      <div style="font-family: Arial, sans-serif; line-height: 1.6;">
        <h2 style="background-color: #B80D46; color: white; padding: 10px; text-align: center;">Resumo do Briefing</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="background-color: #f2f2f2; padding: 8px;"><strong>Departamento:</strong></td>
            <td style="padding: 8px;">${formData.solicitando}</td>
          </tr>
          <tr>
            <td style="background-color: #f2f2f2; padding: 8px;"><strong>Solicitante:</strong></td>
            <td style="padding: 8px;">${formData.solicitante}</td>
          </tr>
          <tr>
            <td style="background-color: #f2f2f2; padding: 8px;"><strong>Profissional responsável pela cobertura:</strong></td>
            <td style="padding: 8px;">${formData.profissional}</td>
          </tr>
          <tr>
            <td style="background-color: #f2f2f2; padding: 8px;"><strong>Data da solicitação:</strong></td>
            <td style="padding: 8px;">${formData.data}</td>
          </tr>
          <tr>
            <td style="background-color: #f2f2f2; padding: 8px;"><strong>Retranca:</strong></td>
            <td style="padding: 8px;">${formData.retranca}</td>
          </tr>
          <tr>
            <td style="background-color: #f2f2f2; padding: 8px;"><strong>Cobertura de nº/agosto:</strong></td>
            <td style="padding: 8px;">${formData.cobertura}</td>
          </tr>
          <tr>
            <td style="background-color: #f2f2f2; padding: 8px;"><strong>Data e horário do evento:</strong></td>
            <td style="padding: 8px;">${formData.eventDateTime}</td>
          </tr>
          <tr>
            <td style="background-color: #f2f2f2; padding: 8px;"><strong>Local (endereço completo):</strong></td>
            <td style="padding: 8px;">${formData.local}</td>
          </tr>
          <tr>
            <td style="background-color: #f2f2f2; padding: 8px;"><strong>Assunto da pauta:</strong></td>
            <td style="padding: 8px;">${formData.pauta}</td>
          </tr>
          <tr>
            <td style="background-color: #f2f2f2; padding: 8px;"><strong>Objetivo do conteúdo:</strong></td>
            <td style="padding: 8px;">${formData.objetivo}</td>
          </tr>
          <tr>
            <td style="background-color: #f2f2f2; padding: 8px;"><strong>Tipo de imagem desejada:</strong></td>
            <td style="padding: 8px;">${formData.imagem}</td>
          </tr>
          <tr>
            <td style="background-color: #f2f2f2; padding: 8px;"><strong>Quantidade de conteúdos derivados:</strong></td>
            <td style="padding: 8px;">${formData.conteudo}</td>
          </tr>
          <tr>
            <td style="background-color: #f2f2f2; padding: 8px;"><strong>Plataformas e objetivos específicos:</strong></td>
            <td style="padding: 8px;">${formatPlatformsAndObjectives(formData.objetivo)}</td>
          </tr>
          <tr>
            <td style="background-color: #f2f2f2; padding: 8px;"><strong>Pessoas a serem entrevistadas:</strong></td>
            <td style="padding: 8px;">${formatInterviewees(formData.interviewees)}</td>
          </tr>
          <tr>
            <td style="background-color: #f2f2f2; padding: 8px;"><strong>Informações adicionais:</strong></td>
            <td style="padding: 8px;">${formData.informacoesAdicionais}</td>
          </tr>
        </table>
      </div>
    `;
  }

  // Função auxiliar para formatar plataformas e objetivos
  function formatPlatformsAndObjectives(objetivo) {
    return Object.keys(objetivo)
      .map(platform => `<strong>${platform}:</strong> ${objetivo[platform]}`)
      .join('<br/>');
  }

  // Função auxiliar para formatar entrevistados
  function formatInterviewees(interviewees) {
    return interviewees
      .map(interviewee => `
        <p>
          <strong>Nome:</strong> ${interviewee.name}<br/>
          <strong>Cargo:</strong> ${interviewee.role}<br/>
          <strong>Contato:</strong> ${interviewee.contact}
        </p>`)
      .join('<hr/>');
  }



const onSubmit = async (data) => {
  console.log(data);
  const emailContent = formatEmailData(data); // Formatar os dados como HTML
  try {
    const response = await enviarFormulario({ emailContent }); // Enviar os dados formatados
    console.log('Resposta do backend:', response);
  } catch (error) {
    console.error('Erro ao enviar o formulário:', error);
  }
};



  const [plataforma, setPlataforma] = useState('');
  const [solicitando, setSolicitando] = useState('');
  const [objetivo, setObjetivo] = useState({});

  const handleSolicitandoChange = (event) => {
    setSolicitando(event.target.value);
  };

  const handlePlataformaChange = (event) => {
    setPlataforma(event.target.value);
  };

  const handleObjetivoChange = (event) => {
    setObjetivo((prev) => ({
      ...prev,
      [plataforma]: event.target.value,
    }));
  };
  

  const methodss = useForm();
  const [interviewees, setInterviewees] = useState([{ name: '', role: '', contact: '' }]);

  const onSubmitt = (data) => {
    console.log(data);
  };

  const addInterviewee = () => {
    setInterviewees([...interviewees, { name: '', role: '', contact: '' }]);
  };

  const removeInterviewee = (index) => {
    setInterviewees(interviewees.filter((_, i) => i !== index));
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
                    
                    <Typography sx={{paddingTop: '30px', paddingBottom: '30px', display: 'flex', justifyContent: 'center', textAlign: 'center', color: '#13435C'}} variant="h5" gutterBottom>Briefing de Cobertura<br/> para Redes Sociais</Typography>
                      
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

                        <TextFieldElement placeholder="Ex: Pe. Marco Aurélio"  sx={{paddingTop: '8px', width: { xs: '100%', sm: '100%', md: '100%px'} }} name="solicitante" label="Solicitante:" required rules={{ required: "O campo Solicitante é obrigatório." }}/>
                        <TextFieldElement placeholder="Ex: Roberta" sx={{paddingTop: '8px', width: { xs: '100%', sm: '100%', md: '100%px'} }} name="profissional" label="Profissional responsável pela cobertura:" required rules={{ required: "O campo Profissional responsável pela cobertura é obrigatório." }}  />
                        <TextFieldElement placeholder="Ex: 20/07/2024" sx={{paddingTop: '8px', width: { xs: '100%', sm: '100%', md: '100%px'} }} name="profissional" label="Data da solicitação:" required rules={{ required: "O campo Data é obrigatório." }}  />
                        <TextFieldElement placeholder="Ex: Roberta" sx={{paddingTop: '8px', width: { xs: '100%', sm: '100%', md: '100%px'} }} name="profissional" label="Retranca:" required rules={{ required: "O campo Profissional responsável pela cobertura é obrigatório." }}  />
                        <TextFieldElement placeholder="Ex: 20/07/2024" sx={{paddingTop: '8px', width: { xs: '100%', sm: '100%', md: '100%px'} }} name="profissional" label="Cobertura de nº_______/agosto" required rules={{ required: "O campo Data é obrigatório." }}  />

                      </Box>




                      


                      <Box mb={2} sx={{paddingTop: '20px'}}>
                        <Typography sx={{color: '#626262'}}>1. Data e horário do evento:</Typography>
                        <TextFieldElement 
                          fullWidth 
                          name="material a ser produzido" 
                          id="outlined-multiline-static"
                          multiline
                          rows={4}
                          defaultValue="Default Value" required rules={{ required: "O campo 'Data e horário do evento' é obrigatório." }}
                          placeholder="Ex: Dia 27/08/2024 as 13:00 no Santuário Basílica do Divino Pai Eterno"  
                          />
                      </Box>


                      <Box mb={2} sx={{paddingTop: '20px'}}>
                        <Typography sx={{color: '#626262'}}>2. Local (endereço completo):</Typography>
                        <TextFieldElement 
                          fullWidth 
                          name="objetivo desta produção" 
                          id="outlined-multiline-static"
                          multiline
                          rows={4}
                          defaultValue="Default Value"  message="Preencher esse campo" required rules={{ required: "O campo 'Local (endereço completo)' é obrigatório." }} 
                          placeholder="Ex: Local: Santuário Basílica do Divino Pai Eterno. Endereço: Praça Dom Antônio Ribeiro de Oliveira, s/n - Santuário, Trindade - GO. "  
                          />
                      </Box>


                      <Box mb={2} sx={{paddingTop: '20px'}}>
                        <Typography sx={{color: '#626262'}}>3. Assunto da pauta.</Typography>
                        <TextFieldElement 
                          fullWidth 
                          name="Público-Alvo" 
                          id="outlined-multiline-static"
                          multiline
                          rows={4}
                          defaultValue="Default Value" required rules={{ required: "O campo 'Assunto da pauta' é obrigatório." }}
                          placeholder="Ex: Devoto do Rio de Janeiro"  
                           />
                      </Box>


                      <Box mb={2} sx={{paddingTop: '20px'}}>
                        <Typography sx={{color: '#626262'}}>4. Objetivo do conteúdo:</Typography>
                        <TextFieldElement 
                          fullWidth 
                          name="mensagem fundamental" 
                          id="outlined-multiline-static"
                          multiline
                          rows={4}
                          defaultValue="Default Value" required rules={{ required: "O campo 'Objetivo do conteúdo' é obrigatório." }}
                          placeholder="Ex: Entrevista devotos eles falarem seu testemunho"  
                          />
                      </Box>


                      <Box mb={2} sx={{paddingTop: '20px'}}>
                      <Typography sx={{color: '#626262'}}>5. Qual é o tipo de imagem que se pretende obter nesta cobertura? Seja detalhista.</Typography>
                        <TextFieldElement 
                          fullWidth 
                          name="público-alvo" 
                          id="outlined-multiline-static"
                          multiline
                          rows={4}
                          defaultValue="Default Value" required rules={{ required: "O campo é obrigatório." }} 
                          placeholder="Ex: Imagem dos devotos da expressão deles e imagem da Caiza conversando com eles" 
                          />
                      </Box>


                      <Box mb={2} sx={{paddingTop: '20px'}}>
                        <Typography sx={{color: '#626262'}}>6. Quantidade de Conteúdos Derivados que se pretende obter?</Typography>
                        <TextFieldElement 
                          fullWidth 
                          name="orçamento sugerido" 
                          id="outlined-multiline-static"
                          multiline
                          rows={4}
                          defaultValue="Default Value" required rules={{ required: "O campo é obrigatório." }}
                          placeholder="Ex: Para TV e Rede Social" 
                          />
                      </Box>


                      <Box mb={2} sx={{ paddingTop: '20px' }}>
                            <Typography sx={{ color: '#626262' }}>7. Plataformas e objetivos específicos:</Typography>
                            <FormControl fullWidth sx={{ marginTop: '10px' }}>  
                              <Select
                                value={plataforma}
                                onChange={handlePlataformaChange}
                                placeholder="Selecione a Plataforma"
                                defaultValue="Default Value" required rules={{ required: "Você precisa seleciona uma" }} 
                              >
                                <MenuItem value="Instagram">Instagram</MenuItem>
                                <MenuItem value="Facebook">Facebook</MenuItem>
                                <MenuItem value="YouTube">YouTube</MenuItem>
                                <MenuItem value="TikTok">TikTok</MenuItem>
                                <MenuItem value="Outras">Outras</MenuItem>
                              </Select>
                            </FormControl>

                            {plataforma && (
                              <TextField
                                fullWidth
                                name={`objetivo-${plataforma}`}
                                value={objetivo[plataforma] || ''}
                                onChange={handleObjetivoChange}
                                id="outlined-multiline-static"
                                multiline
                                rows={4}
                                defaultValue="Default Value"
                                required
                                rules={{
                                  required: "O campo 'Plataformas e objetivos específicos' é obrigatório.",
                                }}
                                placeholder={`Objetivo para ${plataforma}`}
                                sx={{ marginTop: '20px' }}
                              />
                            )}
                    </Box>

                   <Box>

                          {/* Outros campos de formulário... */}
                          <Box mb={2} sx={{ paddingTop: '20px' }}>
                            <Typography sx={{ color: '#626262' }}>8. Pessoas a serem entrevistadas:</Typography>
                            {interviewees.map((interviewee, index) => (
                              <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                                <TextFieldElement
                                  name={`interviewees[${index}].name`}
                                  label="Nome"
                                  sx={{ flex: 1 }}
                                  required
                                />
                                <TextFieldElement
                                  name={`interviewees[${index}].role`}
                                  label="Cargo/Função"
                                  sx={{ flex: 1 }}
                                  required
                                />
                                <TextFieldElement
                                  name={`interviewees[${index}].contact`}
                                  label="Contato"
                                  sx={{ flex: 1 }}
                                  required
                                />
                                <IconButton onClick={() => removeInterviewee(index)} disabled={interviewees.length === 1}>
                                  <RemoveIcon />
                                </IconButton>
                              </Box>
                            ))}
                            <Button startIcon={<AddIcon />} onClick={addInterviewee}>
                              Mais
                            </Button>
                          </Box>


                   </Box>

      

                      <Box mb={2} sx={{paddingTop: '20px'}}>
                        <Typography sx={{color: '#626262'}}>9. Informações adicionais:</Typography>
                        <TextFieldElement 
                          fullWidth 
                          name="departamentos envolvidos" 
                          id="outlined-multiline-static"
                          multiline
                          rows={4}
                          defaultValue="Default Value" required rules={{ required: "O campo 'Informações adicionais' é obrigatório." }} 
                          placeholder="Ex: No final da entrevista fazer uma foto dos 3 juntos da Caiza e do casal" 
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
