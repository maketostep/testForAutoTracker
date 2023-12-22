import * as React from 'react'
import { AppBar, Button, ButtonGroup, Toolbar } from '@mui/material'

import GridData from './GridData';
// import { SearchBar } from './functionalComponents/SearchBar';
// import { filterData } from './functionalComponents/filterData';

// const useStyles = makeStyles(() => (
//     {
//         root: {
//             flexGrow: 1,
//         },
//         menuButton: {
//             marginRight: useTheme().spacing(2),
//         },
//         title: {
//             flexGrow: 1,
//             display: 'none',
//             [useTheme().breakpoints.up('sm')]: {
//                 display: 'block',
//             },
//         },
//         search: {
//             position: 'relative',
//             borderRadius: useTheme().shape.borderRadius,
//             backgroundColor: alpha(useTheme().palette.common.white, 0.15),
//             '&:hover': {
//                 backgroundColor: alpha(useTheme().palette.common.white, 0.25),
//             },
//             marginLeft: 0,
//             width: '100%',
//             [useTheme().breakpoints.up('sm')]: {
//                 marginLeft: useTheme().spacing(1),
//                 width: 'auto',
//             },
//         },
//         searchIcon: {
//             padding: useTheme().spacing(0, 2),
//             height: '100%',
//             position: 'absolute',
//             pointerEvents: 'none',
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center',
//         },
//         inputRoot: {
//             color: 'inherit',
//         },
//         inputInput: {
//             textAlign: 'right',
//             padding: useTheme().spacing(1, 1, 1, 0),
//             // vertical padding + font size from searchIcon
//             paddingLeft: `calc(1em + ${useTheme().spacing(4)}px)`,
//             transition: useTheme().transitions.create('width'),
//             width: '100%',
//             [useTheme().breakpoints.up('sm')]: {
//                 width: '12ch',
//                 '&:focus': {
//                     width: '20ch',
//                 },
//             },
//         },
//         toolBarColor: {
//             background: "grey"
//         }
//     }
// )
// )


export default function Objects() {
    // const data = ['Gay', 'Day']
    // const [searchQuery, setSearchQuery] = React.useState("");
    // const dataFiltered = filterData(searchQuery, data);
    // const theme = (e) => (theme() = e)
    return (
        <div>
            <AppBar position='static'>
                <Toolbar style={{ background: 'gray' }}>
                    <ButtonGroup style={{ marginRight: '25px' }} variant='contained' color='success' aria-label='contained primary button group'>
                        <Button>Объекты</Button>
                        <Button disabled>Группы</Button>
                    </ButtonGroup>
                    {/* <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} /> */}
                </Toolbar>
            </AppBar>
            <GridData />
        </div>
    )
}