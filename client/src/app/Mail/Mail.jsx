import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Button, Container, TextField, Typography } from '@mui/material';

const Mail = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_pqzk3ea', 'template_pdh6eqh', form.current, '36LRBFPuW-rs_PX30')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <Container maxWidth="md" sx={{ marginTop: 4 }}>
      <Typography variant="h4" gutterBottom>
        Send an Email
      </Typography>
      <form ref={form} onSubmit={sendEmail}>
        <TextField
          label="Name"
          variant="outlined"
          fullWidth
          margin="normal"
          name="user_name"
        />
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          name="user_email"
        />
        <TextField
          label="Message"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          margin="normal"
          name="message"
        />
        <Button variant="contained" color="primary" type="submit">
          Send
        </Button>
      </form>
    </Container>
  );
};

export default Mail;
