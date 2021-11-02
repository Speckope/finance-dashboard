import { ThemeProvider } from 'styled-components';
import Contents from './areas/Contents';
import LeftSideBar from './areas/LeftSideBar';
import RightSideBar from './areas/RightSideBar';
import { lightTheme } from './theming/themes';

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <div className='App'>
        <LeftSideBar />
        <Contents />
        <RightSideBar />
      </div>
    </ThemeProvider>
  );
}

export default App;
