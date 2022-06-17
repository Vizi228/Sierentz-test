import './App.css';
import AppRouter from './Components/AppRouter';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'

function App() {
  return (
    <div className="App">
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <AppRouter />
      </LocalizationProvider>
    </div>
  );
}

export default App;
