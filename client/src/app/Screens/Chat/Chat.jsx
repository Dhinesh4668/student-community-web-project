import React, { useState } from 'react';
import { TextField, Button, Paper } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      setMessages([...messages, newMessage]);
      setNewMessage('');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <Paper elevation={3} style={{ padding: '10px' }}>
        <div style={{ marginBottom: '10px' }}>
          {messages.map((message, index) => (
            <div key={index}>{message}</div>
          ))}
        </div>
        <div style={{ display: 'flex' }}>
          <TextField
            label="Message"
            variant="outlined"
            fullWidth
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
          <Button
            variant="contained"
            color="primary"
            endIcon={<SendIcon />}
            onClick={handleSendMessage}
          >
            Send
          </Button>
        </div>
      </Paper>
    </div>
  );
};

export default Chat;
