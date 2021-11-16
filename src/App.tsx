import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import MainPage from './pages/MainPage';
import { GlobalStyles } from './theming/GlobalStyles';
import { darkTheme, lightTheme } from './theming/themes';

function App() {
  const [theme, setTheme] = useState(true);

  const changeTheme = () => {
    setTheme(!theme);
  };

  return (
    <ThemeProvider theme={theme ? lightTheme : darkTheme}>
      <GlobalStyles />
      <div className='App'>
        <MainPage setTheme={changeTheme} theme={theme} />
      </div>
    </ThemeProvider>
  );
}

export default App;
