import * as React from 'react'
import { InputBase, alpha } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useTheme } from '@mui/material';
// import { GridSearchIcon } from '@mui/x-data-grid';
import SearchIcon from '@mui/icons-material/Search';

const useStyles = makeStyles(() => (
    {
        root: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: useTheme().spacing(2),
        },
        title: {
            flexGrow: 1,
            display: 'none',
            [useTheme().breakpoints.up('sm')]: {
                display: 'block',
            },
        },
        search: {
            position: 'relative',
            borderRadius: useTheme().shape.borderRadius,
            backgroundColor: alpha(useTheme().palette.common.white, 0.15),
            '&:hover': {
                backgroundColor: alpha(useTheme().palette.common.white, 0.25),
            },
            marginLeft: 0,
            width: '100%',
            [useTheme().breakpoints.up('sm')]: {
                marginLeft: useTheme().spacing(1),
                width: 'auto',
            },
        },
        searchIcon: {
            padding: useTheme().spacing(0, 2),
            height: '100%',
            position: 'absolute',
            pointerEvents: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        inputRoot: {
            color: 'inherit',
        },
        inputInput: {
            textAlign: 'right',
            padding: useTheme().spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${useTheme().spacing(4)}px)`,
            transition: useTheme().transitions.create('width'),
            width: '100%',
            [useTheme().breakpoints.up('sm')]: {
                width: '12ch',
                '&:focus': {
                    width: '20ch',
                },
            },
        },
        toolBarColor: {
            background: "grey"
        }
    }
)
)

export const SearchBar = ({ setSearchQuery }) =>  (
    <form>
        
        {/* <TextField
            id="search-bar"
            className="text"
            onInput={(e) => {
                setSearchQuery(e.target.value);
            }}
            label="Enter a city name"
            variant="outlined"
            placeholder="Search..."
            size="small"
        />
        <IconButton type="submit" aria-label="search">
            <GridSearchIcon style={{ fill: "blue" }} />
        </IconButton> */}
        {/* {classes = useStyles()} */}
        <div className={useStyles().search} style={{ paddingRight: '50px' }}>
                        <div className={useStyles().searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            id="search-bar"
                            className="text"
                            placeholder="Поиск..."
                            classes={{
                                root: useStyles().inputRoot,
                                input: useStyles().inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </div>
    </form>
);