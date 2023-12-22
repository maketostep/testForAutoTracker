import { Box, Button } from '@mui/material'
import * as React from 'react'
// import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { useGridApiRef } from '@mui/x-data-grid';
import { DataGridPro } from '@mui/x-data-grid-pro'

import { rows } from './values/tableRows'
import { columns } from './values/tableColumns'
import Error from '../modals.jsx/Error';
// import SearchBar from 'material-ui-search-bar';
// import { SearchBar } from './functionalComponents/SearchBar';
// import SearchBar from "material-ui-search-bar";

// console.log(await getRows())

// const CustomToolbar = (props) => (
//     <div>
//         {console.log({ ...props })}
//         <SearchBar value={'2'} />
//     </div>
// );
export default function GridData(props) {

    const apiRef = useGridApiRef()
    const [openError, setOpenError] = React.useState(false)
    const [errorText, setErrorText] = React.useState('Не выбрано ни одной строки')

    // const [searchText, setSearchText] = React.useState("");
    // const [tableData, setTableData] = React.useState(rows);
    // const requestSearch = (searchValue) => {
    //     const searchRegex = new RegExp(`.*${searchValue}.*`, "ig");
    //     const filteredRows = rows.filter((o) => {
    //         return Object.keys(o).some((k) => {
    //             return searchRegex.test(o[k].toString());
    //         });
    //     });
    //     setTableData(filteredRows);
    // };

    // const cancelSearch = () => {
    //     setSearchText("");
    //     requestSearch(searchText);
    // };

    function handleOpenError(title) {
        setOpenError(true)
    }
    const handleCloseError = () => setOpenError(false)

    async function deleteRow(id) {
        const selectedRowId = [...apiRef.current.getSelectedRows().keys()]
        const generateDeletesRow = () => {
            let text = '?'
            let lastEl = selectedRowId[selectedRowId.length - 1]
            for (let i = 0; i < selectedRowId.length; i++) {
                if (lastEl === selectedRowId[i]) text += `id=${selectedRowId[i]}`
                else text += `id=${selectedRowId[i]}&`
            }
            return text
        }
        // console.log(generateDeletesRow())
        if (generateDeletesRow() === '?') {
            setErrorText('Не выбрано ни одной строки!')
            handleOpenError()
        } else {
            try {
                const response = await fetch(`https://gps.autotracker.group/api/devices/${generateDeletesRow()}`, { method: 'DELETE' });
                if (response.ok === true) {
                    console.log('Успешное удаление строк с ID:', ...apiRef.current.getSelectedRows().keys())
                } if (response.ok === false) {
                    setErrorText('У вас нет прав на эту операцию')
                    return handleOpenError()
                }
            } catch (error) {
                return console.log('Error: ', error);
            }
        }
        // return errorText1
    }
    // console.log(tableData, columns)
    // const id = rows.find(async function (item) {
    //     return item.id === 2
    // })
    return (
        <Box
            sx={{
                height: 400,
                width: '100%',
                '&&& .updated': {
                    transition: (theme) =>
                        theme.transitions.create(['background-color', 'outline'], {
                            duration: theme.transitions.duration.standard,
                        }),
                },
                '&&& .updating': {
                    backgroundColor: 'rgb(92 199 68 / 20%)',
                    outline: '1px solid rgb(92 199 68 / 35%)',
                    outlineOffset: '-1px',
                    transition: 'none',
                },
            }}>
            <div style={{ height: 300, width: '100%' }}>

                {/* <DataGrid
                    disableColumnFilter
                    disableColumnSelector
                    disableDensitySelector
                    disableColumnMenu
                    disableEval
                    // initialState={{
                    //     filter: {
                    //         filterModel: {
                    //             items: [],
                    //             quickFilterValues: [],
                    //         },
                    //     },
                    // }}

                    // disableColumnFilter
                    // experimentalFeatures={{
                    //     ariaV7: true,
                    // }}
                    apiRef={apiRef}
                    rows={tableData}
                    columns={columns}
                    unstable_headerFilters
                    slots={{
                        // toolbar: GridToolbar,
                        headerFilterMenu: true
                    }}
                    slotProps={{
                        toolbar: {
                            showQuickFilter: false,
                            headerFilterMenu: null
                        },
                    }}
                    checkboxSelection
                /> */}
                <div style={{ height: 400, width: "100%" }}>
                    <DataGridPro
                        rows={rows}
                        columns={columns}
                        apiRef={apiRef}
                        disableColumnFilter
                        unstable_headerFilters
                        checkboxSelection
                    />
                </div>
            </div>
            <Button style={{ margin: '150px' }} variant='contained' color='error' onClick={deleteRow}>
                Удалить строку
            </Button>
            <Error title={errorText} open={openError} close={handleCloseError} />

        </Box>
    )
}