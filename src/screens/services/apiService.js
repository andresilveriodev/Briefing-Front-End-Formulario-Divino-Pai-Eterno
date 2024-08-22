import axios from 'axios';

const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL || 'https://briefing-formulario-backend.onrender.com', 
});

export const enviarFormulario = async (dados) => {
    try {
        const response = await api.post('/send-email', dados); // Envia 'dados' diretamente
        console.log(response);
        return response.data;
    } catch (error) {
        console.error('Erro ao enviar o formulário', error);
        throw error;
    }
};
