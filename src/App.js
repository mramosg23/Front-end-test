import './App.css';
import { ThemeProvider } from '@mui/material/styles';
import {themeAmaphone} from './styles/Theme.js'
import { CssBaseline } from '@mui/material';
import { BrowserRouter } from "react-router-dom";
import { RouterConfig } from '../src/navigation/RouterConfig';

function App() {
  

  return (
    <ThemeProvider theme={themeAmaphone}>
      <div className="App">
      <CssBaseline/>
        <BrowserRouter>
          <RouterConfig></RouterConfig>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
