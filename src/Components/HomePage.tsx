import React, { useEffect, useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { PopupAssets } from '../utils/consts';
import { ITable } from '../types/homeTypes';

const HomePage: React.FC = () => {
  const [tables, setTables] = useState<ITable[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const onClickCell = () => {
    window.open(
      "http://localhost:3000/popup",
      "Popup",
      PopupAssets
    );
  }
  useEffect(() => {
    (async () => {
      const obj = await fetch('./db.json')
      const data = await obj.json()
      setTables(data);
      setIsLoading(true)
    })()
  }, [])
  if (!isLoading) {
    return <h1 className='loadingItem'>Loading...</h1>
  }
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Regions</TableCell>
            {tables && tables[0].obj.map((item) => (
              <TableCell sx={{ textAlign: 'center' }} key={item.name}>
                {item.name}
                <TableRow sx={{ display: 'flex', justifyContent: 'space-around' }}>
                  {item.obj.map((date) => <TableCell key={date.name}>{date.name}</TableCell>)}
                </TableRow>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {tables && tables.map((item) => (
            <TableRow key={item.name}>
              <TableCell>{item.name}</TableCell>
              {item && item.obj.map((item: any) => (
                <TableCell sx={{ textAlign: 'center' }} key={item.name}>
                  <TableRow sx={{ display: 'flex', justifyContent: 'space-around' }}>
                    {item && item.obj.map((date: any, index: number) => <TableCell onClick={onClickCell} sx={{ cursor: 'pointer' }} key={index}>{date.obj.value}</TableCell>)}
                  </TableRow>
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default HomePage