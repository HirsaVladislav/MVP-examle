const customHeaders = {
    "Content-Type": "application/json",
}

const addMessageRequest = async (message) => {
    try {
        return await axios.post('/addMessage', { message }, {
            headers: customHeaders,
        });
    } catch (error) {
        console.error(error);
    }
};

const getAllMessagesRequest = async () => {
    try {
        return await axios.get('/getAllMessages');
    } catch (error) {
        console.lerrorog(error);
    }
};