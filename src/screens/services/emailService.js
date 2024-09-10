import axios from 'axios';

export async function sendEmailToBackend(formData, formType) {
    try {
        const response = await axios.post('/send-email', {
            formData,
            formType
        });
        return response.data;
    } catch (error) {
        console.error('Erro ao enviar o e-mail:', error);
        throw error;
    }
}
