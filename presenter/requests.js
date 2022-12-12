const customHeaders = {
    "Content-Type": "application/json",
}

export const addMessageRequest = async (message) => {
    try {
        return await axios.post('/addMessage', { message }, {
            headers: customHeaders,
        });
    } catch (error) {
        console.error(error);
    }
};

export const getAllMessagesRequest = async () => {
    try {
        return await axios.get('/getAllMessages');
    } catch (error) {
        console.error(error);
    }
};