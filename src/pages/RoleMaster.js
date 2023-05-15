import React,{useState,useEffect} from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import PageTitle from '../layouts/PageTitle';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import VirtualizedTable from '../components/table/VirtualizedTable'
import TablePagination from '@mui/material/TablePagination';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from "@mui/material/IconButton";
import SearchIcon from '@mui/icons-material/Search';
import SearchBar from '../components/SearchBar';
import { Typography } from '@mui/material';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';

import TableRow from '@mui/material/TableRow';
import StickyHeadTable from '../components/table/StickyHeadTable';
const RoleMaster = () => {
  const name='Role Master'
  const name2='Role List'
  function createData(id,SNo ,Name,RoleCode, RoleDescription,RoleCreationDate,Action) {
    return {  id,SNo,Name,RoleCode, RoleDescription,RoleCreationDate,Action};
  }
  const sample = [
   [1,'Human Resource','HR','Manages man power','14-03-2023 11:28 AM',
   <Stack direction="row" spacing={2}>

  <Button variant="contained" sx={{color:'black',backgroundColor:'white',":hover":{color:'black',backgroundColor:'white'},borderRadius:'4px'}} endIcon={<EditIcon />}>
   
 Edit
   
 </Button>
   
<Button variant="contained" sx={{color:'white',backgroundColor:'#286cb4',":hover":{color:'white',backgroundColor:'#286cb4'},borderRadius:'4px'}} startIcon={<DeleteIcon />}>
   
   Delete
   
 </Button>
   
   </Stack>],
   [2,'Human Resource','HR','Manages man power','14-03-2023 11:28 AM',<Stack direction="row" spacing={2}>

   <Button variant="contained" sx={{color:'black',backgroundColor:'white',":hover":{color:'black',backgroundColor:'white'},borderRadius:'4px'}} endIcon={<EditIcon />}>
    
  Edit
    
  </Button>
    
 <Button variant="contained" sx={{color:'white',backgroundColor:'#286cb4',":hover":{color:'white',backgroundColor:'#286cb4'},borderRadius:'4px'}} startIcon={<DeleteIcon />}>
    
    Delete
    
  </Button>
    
    </Stack>],
   [3,'Human Resource','HR','Manages man power','14-03-2023 11:28 AM',<Stack direction="row" spacing={2}>

   <Button variant="contained" sx={{color:'black',backgroundColor:'white',":hover":{color:'black',backgroundColor:'white'},borderRadius:'4px'}} endIcon={<EditIcon />}>
    
  Edit
    
  </Button>
    
 <Button variant="contained" sx={{color:'white',backgroundColor:'#286cb4',":hover":{color:'white',backgroundColor:'#286cb4'},borderRadius:'4px'}} startIcon={<DeleteIcon />}>
    
    Delete
    
  </Button>
    
    </Stack>],
   [4,'Human Resource','HR','Manages man power','14-03-2023 11:28 AM',<Stack direction="row" spacing={2}>

   <Button variant="contained" sx={{color:'black',backgroundColor:'white',":hover":{color:'black',backgroundColor:'white'},borderRadius:'4px'}} endIcon={<EditIcon />}>
    
  Edit
    
  </Button>
    
 <Button variant="contained" sx={{color:'white',backgroundColor:'#286cb4',":hover":{color:'white',backgroundColor:'#286cb4'},borderRadius:'4px'}} startIcon={<DeleteIcon />}>
    
    Delete
    
  </Button>
    
    </Stack>],
   [5,'Human Resource','HR','Manages man power','14-03-2023 11:28 AM',<Stack direction="row" spacing={2}>

   <Button variant="contained" sx={{color:'black',backgroundColor:'white',":hover":{color:'black',backgroundColor:'white'},borderRadius:'4px'}} endIcon={<EditIcon />}>
    
  Edit
    
  </Button>
    
 <Button variant="contained" sx={{color:'white',backgroundColor:'#286cb4',":hover":{color:'white',backgroundColor:'#286cb4'},borderRadius:'4px'}} startIcon={<DeleteIcon />}>
    
    Delete
    
  </Button>
    
    </Stack>],
   [6,'Human Resource','HR','Manages man power','14-03-2023 11:28 AM',<Stack direction="row" spacing={2}>

   <Button variant="contained" sx={{color:'black',backgroundColor:'white',":hover":{color:'black',backgroundColor:'white'},borderRadius:'4px'}} endIcon={<EditIcon />}>
    
  Edit
    
  </Button>
    
 <Button variant="contained" sx={{color:'white',backgroundColor:'#286cb4',":hover":{color:'white',backgroundColor:'#286cb4'},borderRadius:'4px'}} startIcon={<DeleteIcon />}>
    
    Delete
    
  </Button>
    
    </Stack>],
   [7,'Human Resource','HR','Manages man power','14-03-2023 11:28 AM',<Stack direction="row" spacing={2}>

   <Button variant="contained" sx={{color:'black',backgroundColor:'white',":hover":{color:'black',backgroundColor:'white'},borderRadius:'4px'}} endIcon={<EditIcon />}>
    
  Edit
    
  </Button>
    
 <Button variant="contained" sx={{color:'white',backgroundColor:'#286cb4',":hover":{color:'white',backgroundColor:'#286cb4'},borderRadius:'4px'}} startIcon={<DeleteIcon />}>
    
    Delete
    
  </Button>
    
    </Stack>],
   [8,'Human Resource','HR','Manages man power','14-03-2023 11:28 AM',<Stack direction="row" spacing={2}>

   <Button variant="contained" sx={{color:'black',backgroundColor:'white',":hover":{color:'black',backgroundColor:'white'},borderRadius:'4px'}} endIcon={<EditIcon />}>
    
  Edit
    
  </Button>
    
 <Button variant="contained" sx={{color:'white',backgroundColor:'#286cb4',":hover":{color:'white',backgroundColor:'#286cb4'},borderRadius:'4px'}} startIcon={<DeleteIcon />}>
    
    Delete
    
  </Button>
    
    </Stack>],
   [9,'Human Resource','HR','Manages man power','14-03-2023 11:28 AM',<Stack direction="row" spacing={2}>

   <Button variant="contained" sx={{color:'black',backgroundColor:'white',":hover":{color:'black',backgroundColor:'white'},borderRadius:'4px'}} endIcon={<EditIcon />}>
    
  Edit
    
  </Button>
    
 <Button variant="contained" sx={{color:'white',backgroundColor:'#286cb4',":hover":{color:'white',backgroundColor:'#286cb4'},borderRadius:'4px'}} startIcon={<DeleteIcon />}>
    
    Delete
    
  </Button>
    
    </Stack>]
  
  
  ]; 
  const columns = [
    {
      width: 70,
      label: 'SI No.',
      id: 'id',
    },
    {
      width: 180,
      label: 'Name',
      id: 'Name',
    },
    {
      width: 120,
      label: 'Role Code',
      id: 'RoleCode',
      // numeric: true,
    },
    {
      width: 160,
      label: 'Role Description',
      id: 'RoleDescription',
      // numeric: true,
    },
    {
      width: 200,
      label: 'Role Creation Date',
      id: 'RoleCreationDate',
      // numeric: true,
    },
    {
      width:300,
      label:'Action',
      id:'Action'
    }

    
  ];
  
  const rows = Array.from({ length: 20 }, (_, index) => {
    const randomSelection = sample[Math.floor(Math.random() * sample.length)];
    return createData(index+1, ...randomSelection);
  });
 
  
  const [nm, setName] = React.useState('');
  const [rolecode, setRolecode] = React.useState('');
  const [roledescription, setRoledescription] = React.useState('');
  
  const resetForm = () => {
   
    setName("")
    setRolecode("")
    setRoledescription("")
   
  }
  

  return (
   <>
   <Card className="Searchcard" variant='outlined'> 
    <CardContent>
    <PageTitle name={name}/>
    <Grid
            container
            direction="row"
            rowSpacing={0}
            columnSpacing={2}
            justify="flex-end"
            alignItems="center"
            
          >
            <Grid item xs={12} sm={4} md={4} lg={4}>
            <TextField id="name" label="Name" placeholder='Name' margin="0"
                required
                size="small"
                value={nm}
                onChange={(event, newValue) => {
                  setName(newValue);
                }}
                fullWidth />

            </Grid>
            <Grid item xs={12} sm={4} md={4} lg={4}>
            <TextField id="Role Code" label="Role Code" 
                placeholder='Role Code'
                margin="0"
                required
                size="small"
                value={rolecode}
                onChange={(event, newValue) => {
                  setRolecode(newValue);
                }}
                fullWidth  />

            </Grid>
            <Grid item xs={12} sm={4} md={4} lg={4}>
            <TextField id="Role Description" 
                 placeholder='Role Description'
                 label="Role Description"   
                 margin="0"
                required
                size="small"
                value={roledescription}
                onChange={(event, newValue) => {
                  setRoledescription(newValue);
                }}
                fullWidth/>

            </Grid>
            
    </Grid>
    <Stack spacing={2} justifyContent='right' alignItems='right' direction="row"  >
            <Button variant="contained">Submit</Button>
            <Button variant="outlined" onClick={() => resetForm()}>Reset</Button>
            </Stack>
    </CardContent>

   </Card>
   <Card  className="Searchcard" variant='outlined'>
    <CardContent>
    <PageTitle name={name2}/>
        <Stack spacing={2} justifyContent='right' alignItems='right' direction="row"  >
       
       <TextField id="search" l placeholder="search" size='small'/>
       <Button variant='contained' arial-label='search' size='small' sx={{height:35}}><SearchIcon /></Button>
       </Stack>
       <StickyHeadTable columns={columns} rows={rows}/>
    </CardContent>
   </Card>
   </>
  )
}

export default RoleMaster
