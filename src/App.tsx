import { ThemeProvider } from 'styled-components';
import MainPage from './pages/MainPage';
import { GlobalStyles } from './theming/GlobalStyles';
import { lightTheme } from './theming/themes';

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />
      <div className='App'>
        <MainPage />
      </div>
    </ThemeProvider>
  );
}

export default App;
