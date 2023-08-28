// // import React, { useState, useEffect } from 'react';
// // import { db } from '../../../../firebase';
// // import { List, ListItem, ListItemText, Divider } from '@mui/material';

// // function NoteList() {
// //   const [notes, setNotes] = useState([]);

// //   useEffect(() => {
// //     const unsubscribe = db.collection('notes').onSnapshot((snapshot) => {
// //       const notesData = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
// //       setNotes(notesData);
// //     });

// //     return () => unsubscribe();
// //   }, []);

// //   return (
// //     <List>
// //       {notes.map((note) => (
// //         <div key={note.id}>
// //           <ListItem>
// //             <ListItemText primary={note.title} secondary={note.content} />
// //           </ListItem>
// //           <Divider />
// //         </div>
// //       ))}
// //     </List>
// //   );
// // }

// // export default NoteList;

// import React, { useState } from "react";
// import {
//   Container,
//   Typography,
//   TextField,
//   Button,
//   List,
//   ListItem,
//   ListItemText,
// } from "@mui/material";

// function Notes() {
//   const [notes, setNotes] = useState([]);
//   const [newNote, setNewNote] = useState("");

//   const addNote = () => {
//     if (newNote.trim() !== "") {
//       setNotes([...notes, newNote]);
//       setNewNote("");
//     }
//   };

//   return (
//     <Container maxWidth="sm" sx={{ marginTop: 4 }}>
//       <Typography variant="h4" gutterBottom>
//         Notes App
//       </Typography>
//       <TextField
//         label="Add a note"
//         fullWidth
//         variant="outlined"
//         value={newNote}
//         onChange={(e) => setNewNote(e.target.value)}
//         sx={{ marginBottom: 2 }}
//       />
//       <Button variant="contained" color="primary" onClick={addNote}>
//         Add Note
//       </Button>
//       <List sx={{ marginTop: 2 }}>
//         {notes.map((note, index) => (
//           <ListItem key={index} disablePadding>
//             <ListItemText primary={note} />
//           </ListItem>
//         ))}
//       </List>
//     </Container>
//   );
// }

// export default Notes;
import React, { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
} from "@mui/material";
import { AttachFile } from "@mui/icons-material";

function Notes() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  const addNote = () => {
    if (newNote.trim() !== "") {
      const newNoteObject = {
        note: newNote,
        description: newDescription,
        attachment: selectedFile,
      };
      setNotes([...notes, newNoteObject]);
      setNewNote("");
      setNewDescription("");
      setSelectedFile(null);
    }
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  return (
    <Container maxWidth="sm" sx={{ marginTop: 4 }}>
      <Typography variant="h4" gutterBottom>
        Notes App
      </Typography>
      <TextField
        label="Add a note"
        fullWidth
        variant="outlined"
        value={newNote}
        onChange={(e) => setNewNote(e.target.value)}
        sx={{ marginBottom: 2 }}
      />
      <TextField
        label="Add a description"
        fullWidth
        variant="outlined"
        value={newDescription}
        onChange={(e) => setNewDescription(e.target.value)}
        sx={{ marginBottom: 2 }}
      />
      <input
        type="file"
        accept=".pdf"
        onChange={handleFileChange}
        sx={{ marginBottom: 2 }}
      />
      <Button variant="contained" color="primary" onClick={addNote}>
        Add Note
      </Button>
      <List sx={{ marginTop: 2 }}>
        {notes.map((note, index) => (
          <ListItem key={index} disablePadding>
            <ListItemText primary={note.note} secondary={note.description} />
            {note.attachment && (
              <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="attachment">
                  <AttachFile />
                </IconButton>
              </ListItemSecondaryAction>
            )}
          </ListItem>
        ))}
      </List>
    </Container>
  );
}

export default Notes;
