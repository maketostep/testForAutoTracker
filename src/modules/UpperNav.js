import * as React from 'react';
import { BottomNavigation, BottomNavigationAction, Box, CssBaseline } from '@mui/material';
import AssignmentIcon from '@mui/icons-material/Assignment';
import NotificationsIcon from '@mui/icons-material/Notifications';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
// import Paper from '@mui/material/Paper';
import './navigation.css'
// import SignIn from './authorization';
// function disableBtn(isAuth) {
//   isAuth === false ? `${disabled}` : ''
// }

export default function UpperNav(props) {
  
  const ref = React.useRef(null);
  const isAuth = props.isAuth
  return (
    <Box style={{padding: '0'}} sx={{ pb: 7 }} ref={ref}>
        <CssBaseline/>
        
        {/* <Paper sx={{ position: 'absolute', top: 0, left: 0, right: 0 }} elevation={5}> */}
            <BottomNavigation
                style={{margin: '0px', padding: '0px'}}
                value={props.value}
                onChange={props.currentPage}
            >
                <BottomNavigationAction value='profiles' label="Учетная запись" icon={<AccountBoxIcon />} />
                <BottomNavigationAction disabled={isAuth === false} value='users' label="Пользователи" icon={<PeopleAltIcon />} />
                <BottomNavigationAction disabled={isAuth === false} value='objects' label="Объекты" icon={<EmojiObjectsIcon />} />
                <BottomNavigationAction disabled={isAuth === false} value='drivers' label="Водители" icon={<DirectionsCarIcon />} />
                <BottomNavigationAction disabled={isAuth === false} value='notifications' label="Уведомления" icon={<NotificationsIcon />} />
                <BottomNavigationAction disabled={isAuth === false} value='tasks' label="Задания" icon={<AssignmentIcon />} />
            </BottomNavigation>
        {/* </Paper> */}
           
    </Box>
  );
}