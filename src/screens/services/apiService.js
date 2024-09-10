import axios from 'axios';

const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL || 'https://briefing-formulario-backend-af1j.onrender.com',
    
    //baseURL: 'http://localhost:3001',
});


export const enviarFormulario = async (formData) => {
    try {
        const response = await api.post('/send-email', formData); // Envia 'formData' diretamente
        console.log(response);
        return response.data;
    } catch (error) {
        console.error('Erro ao enviar o formulário', error);
        throw error;
    }
};
