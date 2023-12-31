import React from 'react'
import {BrowserRouter , Route, Routes} from 'react-router-dom'
import Meet from './app/Screens/MeetingScreen/Meet'
import Nav from './app/NavigationBar/Nav'
// import Login from './app/Auth/Login'
import NoteList from './app/Screens/Notes/Notes'
import Mail from './app/Mail/Mail'
import Dashbord from './app/Screens/HomeScreen/Dashbord'
import Editer from './app/Word/Editer'
import PageNotFound from './app/404page/PageNotFound'
import Chat from './app/Screens/Chat/Chat'

const App = () => {
  return (
    <BrowserRouter>
    <Nav />
    <Routes>
      <Route path='/' element={<Dashbord />} />
      <Route path='/notes' element={<NoteList />} />
      <Route path="/meet" element={<Meet />}/>
      {/* <Route path='/login' element={<Login />} /> */}
      <Route path='/mail' element={<Mail />} />
      <Route path='/doc' element={<Editer />} />
      <Route path='/*' element={<PageNotFound />} />
      <Route path='/chat' element={<Chat />} />
    </Routes>
    </BrowserRouter>
  )
}



export default App

