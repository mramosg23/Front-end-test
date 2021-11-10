import './App.css';
import { ThemeProvider } from '@mui/material/styles';
import {themeAmaphone} from './styles/Theme.js'
import Header from './components/Header';
import Items from './components/Items';
import { CssBaseline } from '@mui/material';

function App() {
  

  return (
    <ThemeProvider theme={themeAmaphone}>
      <div className="App">
      <CssBaseline/>
        <Header/>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <Items/>
      </div>
    </ThemeProvider>
  );
}

export default App;
