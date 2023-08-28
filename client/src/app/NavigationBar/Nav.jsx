// // import React from 'react'
// // import './Nav.css'
// // import { Link } from 'react-router-dom'
// // const Nav = () => {
// //   return (
// //     <nav className='container'>
// //         <div className='left-container'>
// //             <Link to='/'>Student <span>studeyPlace</span></Link>
// //         </div>
// //         <div className='right-container'>
// //             <Link to='/' style={{paddingRight: '15px'}}>Home</Link>
// //             <Link to='/meet' style={{paddingRight: '15px'}}>Meeting</Link>
// //             <Link to='/notes' style={{paddingRight: '15px'}}>Notes</Link>
// //             <Link to='/mail' style={{paddingRight: '15px'}}>Mail</Link>
// //         </div>
// //     </nav>
// //   )
// // }

// // export default Nav
// import React, { useState } from 'react';
// import './Nav.css';
// import { Link } from 'react-router-dom';
// import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';
// import { makeStyles } from '@mui/styles';
// import Container from '@mui/material/Container';

// const useStyles = makeStyles((theme) => ({
//   navContainer: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     padding: theme.spacing(2),
//     [theme.breakpoints.down('sm')]: {
//       flexDirection: 'column',
//       alignItems: 'center',
//     },
//   },
//   rightContainer: {
//     display: 'flex',
//     alignItems: 'center',
//     [theme.breakpoints.down('sm')]: {
//       marginTop: theme.spacing(1),
//     },
//   },
//   menuItem: {
//     padding: theme.spacing(1),
//   },
// }));

// const Nav = () => {
//   const classes = useStyles();
//   const [anchorEl, setAnchorEl] = useState(null);

//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   return (
//     <Container className={classes.navContainer}>
//       <div className='left-container'>
//         <Link to='/'>
//           Student <span>studyPlace</span>
//         </Link>
//       </div>
//       <div className={classes.rightContainer}>
//         <Link to='/' className={classes.menuItem}>
//           Home
//         </Link>
//         <Link
//           to='/meet'
//           className={classes.menuItem}
//           aria-controls='meeting-menu'
//           aria-haspopup='true'
//           onClick={handleClick}
//         >
//           Meeting
//         </Link>
//         <Link to='/notes' className={classes.menuItem}>
//           Notes
//         </Link>
//         <Link to='/mail' className={classes.menuItem}>
//           Mail
//         </Link>
//         <Menu
//           id='meeting-menu'
//           anchorEl={anchorEl}
//           keepMounted
//           open={Boolean(anchorEl)}
//           onClose={handleClose}
//         >
//           <MenuItem onClick={handleClose}>Create Meeting</MenuItem>
//           <MenuItem onClick={handleClose}>Upcoming Meetings</MenuItem>
//           <MenuItem onClick={handleClose}>Past Meetings</MenuItem>
//         </Menu>
//       </div>
//     </Container>
//   );
// };

// export default Nav;
import React, { useState } from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const Nav = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <nav className='nav-container'>
      <div className='left-container'>
        <Link to='/'>
          Student <span>studyPlace</span>
        </Link>
      </div>
      <div className='right-container'>
        <Link to='/' className='menu-item'>
          Home
        </Link>
        <Link
          to='/meet'
          className='menu-item'
          aria-controls='meeting-menu'
          aria-haspopup='true'
          onClick={handleClick}
        >
          Meeting
        </Link>
        <Link
          to='/doc'
          className='menu-item'
          onClick={handleClick}
        >
          Doc
        </Link>
        <Link to='/notes' className='menu-item'>
          Notes
        </Link>
        <Link to='/mail' className='menu-item'>
          Mail
        </Link>
        <Menu
          id='meeting-menu'
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>Create Meeting</MenuItem>
          <MenuItem onClick={handleClose}>Upcoming Meetings</MenuItem>
          <MenuItem onClick={handleClose}>Past Meetings</MenuItem>
        </Menu>
      </div>
    </nav>
  );
};

export default Nav;
