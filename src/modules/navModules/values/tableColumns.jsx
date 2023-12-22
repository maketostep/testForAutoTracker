
// const columns = [
//     { field: 'col1', headerName: 'Column 1', width: 150 },
//     { field: 'col2', headerName: 'Column 2', width: 150 },
// ];

export const columns = [
    { field: 'id', headerName: '№', width: 150 },
    {
        field: 'name',
        headerName: 'Name',
        width: 200,
        editable: true,
        renderHeaderFilter: () => null
    },
    {
        field: 'uniqueId',
        headerName: 'Unique ID',
        width: 150,
        editable: true,
    },
    {
        field: 'status',
        headerName: 'Status',
        type: 'boolean',
        width: 110,
        editable: true,
        renderHeaderFilter: () => null
    },
    {
        field: 'lastUpdate',
        headerName: 'Last Update',
        type: 'Date',
        description: 'Активность',
        width: 250,
        renderHeaderFilter: () => null
    },
];