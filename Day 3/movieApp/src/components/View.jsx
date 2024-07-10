import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
  
let rows = [    
    {
        Name:"Angry Birds",
        Category:"Animation",
        Director:"Clay Kaytis",
        Releaseyear:"2016",
        image:"https://upload.wikimedia.org/wikipedia/en/f/f9/The_Angry_Birds_Movie_poster.png",
    },
    {
      Name:"Inside Out",
      Category:"Animation",
      Director:"Kelsey Mann",
      Releaseyear:"2015",
      image:"https://lumiere-a.akamaihd.net/v1/images/p_insideout_19751_af12286c.jpeg",
    },
    {
      Name:"Your Name",
      Category:"Animation",
      Director:"Makoto Shinkai",
      Releaseyear:"2016",
      image:"https://m.media-amazon.com/images/M/MV5BNGYyNmI3M2YtNzYzZS00OTViLTkxYjAtZDIyZmE1Y2U1ZmQ2XkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_.jpg",
    },
];

const View = () => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Category </TableCell>
            <TableCell align="center">Director</TableCell>
            <TableCell align="center">Release year</TableCell>
            <TableCell align="center">Poster</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="center" component="th" scope="row">
                {row.Name}
              </TableCell>
              <TableCell align="center">{row.Category}</TableCell>
              <TableCell align="center">{row.Director}</TableCell>
              <TableCell align="center">{row.Releaseyear}</TableCell>
              <TableCell align="center"><img src={row.image} style={{ width: '100px', height: 'auto' }} /></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default View