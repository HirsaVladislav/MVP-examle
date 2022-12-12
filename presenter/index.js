import { addMessageRequest, getAllMessagesRequest } from "./requests.js";

window.addEventListener('load', async (event) => {
    const response = await getAllMessagesRequest();
    generateList(response.data);
});

const addMessage = async() => {
    const newMessage = document.getElementById("newMessage");
    const listDiv = document.getElementById('list');
    const response = await addMessageRequest(newMessage.value);
    listDiv.innerHTML = '';
    newMessage.value = '';
    generateList(response.data);
}

const generateList = (data) => {
    const listDiv = document.getElementById('list');
    const ul = document.createElement('ul');
    for (let i = 0; i < data.length; ++i) {
        const li = document.createElement('li');
        li.innerHTML = data[i].message;
        ul.appendChild(li);                                 
    }
    listDiv.appendChild(ul);
}