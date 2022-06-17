import React, { useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { getDate, getCurrentDate } from '../utils/getCurrentDate';
import { testData, userData } from '../utils/consts';
import { IData } from '../types/popupTypes';

interface PopupPageProps {
}

const PopupPage: React.FC<PopupPageProps> = () => {
  const [data, setData] = useState<IData[]>(testData);
  const [user, setUser] = useState<string | null>(userData[0]);
  const [value, setValue] = useState<number>(0);
  const [comment, setComment] = useState<string>('');
  const [date, setDate] = React.useState<Date | null>(
    new Date(getCurrentDate()),
  );
  const handleChangeValue = (value: number) => {
    setValue(value);
  };
  const handleChangeComment = (value: string) => {
    setComment(value);
  };
  const handleChangeUser = (newUser: string | null) => {
    setUser(newUser);
  };
  const handleChangeDate = (newDate: Date | null) => {
    setDate(newDate);
  };
  const onAddData = () => {
    if (value) {
      const newData: IData = { value: value, date: date, user: user, comment: comment.trim() };
      setData((prev) => [...prev, newData]);
      setValue(0);
      setComment('');
    }
  };
  const onClosePopup = () => {
    window.close()
  };
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Value</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>User</TableCell>
            <TableCell>Comment</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data && data.map((item, i) => (
            <TableRow key={i}>
              <TableCell>{item.value}</TableCell>
              <TableCell>{getDate(item.date)}</TableCell>
              <TableCell>{item.user}</TableCell>
              <TableCell>{item.comment}</TableCell>
            </TableRow>
          ))}
          <TableRow>
            <TableCell>
              <TextField id="standard-basic" value={value} onChange={(e) => handleChangeValue(+e.target.value)} type="number" label="Set your value" variant="outlined" />
            </TableCell>
            <TableCell>
              <DesktopDatePicker
                label="Date desktop"
                inputFormat="MM/dd/yyyy"
                value={date}
                onChange={handleChangeDate}
                renderInput={(params) => <TextField {...params} />}
              />
            </TableCell>
            <TableCell>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                value={user}
                options={userData}
                onChange={(event: any, value: string | null) => handleChangeUser(value)}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="User" />}
              />
            </TableCell>
            <TableCell>
              <TextField id="standard-basic" value={comment} onChange={(e) => handleChangeComment(e.target.value)} label="Input for comment" variant="outlined" />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <Box display='flex' justifyContent='flex-end' width='100%' boxSizing='border-box' pr={5}>
        <Button>
          <Typography onClick={onAddData}>Add</Typography>
        </Button>
        <Button>
          <Typography onClick={onClosePopup}>Close</Typography>
        </Button>
      </Box>
    </TableContainer>
  )
}

export default PopupPage