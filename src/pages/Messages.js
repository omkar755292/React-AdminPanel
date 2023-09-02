import React, { useEffect, useState } from 'react'
import MessageCard from '../component/MessageCard'
import api from '../asset/api/api';

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const retriveMessage = async()=>{
    const response = await api.get("/api/contact");
    console.log(response);
    return response.data;
  }
  useEffect(() => {
    const getAllMessages = async ()=>{
      const allMessages = await retriveMessage();
      if (allMessages) {
        setMessages(allMessages);
      }
    }
    getAllMessages();
  }, [])

  const renderMessages = messages.map((message) =>{
    return <MessageCard key={message.id} message = {message}/>
  })
  return (
    <div className='container py-3'>
      <div class="list-group">
        {renderMessages}
      </div>
    </div>
  )
}

export default Messages