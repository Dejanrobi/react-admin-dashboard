// Importing the color Mode Context
import {ColorModeContext, useMode} from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import Topbar from "./Scenes/Global/TopBar/TopBar"
import Sidebar from "./Scenes/Global/Sidebar/Sidebar";
import Dashboard from "./Scenes/Dashboard/Dashboard";
import Team from "./Scenes/Dashboard/Team/Team";
import Invoices from "./Scenes/Dashboard/Invoices/Invoices";
import Contacts from "./Scenes/Dashboard/Contacts/Contacts";
import Bar from "./Scenes/Dashboard/Bar/Bar";
import Form from "./Scenes/Dashboard/Form/Form";
import Line from "./Scenes/Dashboard/Line/Line";
import Pie from "./Scenes/Dashboard/Pie/Pie";
import Faq from "./Scenes/Dashboard/FAQ/Faq";
import Geography from "./Scenes/Dashboard/Geography/Geography";
import Calendar from "./Scenes/Dashboard/Calendar/Calendar";
import { Route, Routes } from 'react-router-dom';

import './App.css';

function App() {
  // Color Mode hook
  const [theme, colorMode] = useMode();


  return (
  <ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <div className="app">
        <Sidebar/>
        <main className='content'>
          <Topbar/>          
          <Routes>            
            <Route path="/" element={<Dashboard/>} />
            <Route path="/dashboard" element={<Dashboard/>} />
            <Route path="/team" element={<Team/>} />
            <Route path="/invoices" element={<Invoices/>} />
            <Route path="/contacts" element={<Contacts/>} />
            <Route path="/bar" element={<Bar/>} />
            <Route path="/form" element={<Form/>} />
            <Route path="/line" element={<Line/>} />
            <Route path="/pie" element={<Pie/>} />
            <Route path="/faq" element={<Faq/>} />
            <Route path="/geography" element={<Geography/>} />
            <Route path="/calendar" element={<Calendar/>} />
          </Routes>
        </main>
      </div>
    </ThemeProvider>  
  </ColorModeContext.Provider>
    
  );
}

export default App;
