import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import { Stack } from '@mui/system';
import PageTest from './pages/page-test/PageTest';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Stack
      width='100vw'
      height='100vh'
      justifyContent='center'
      alignItems='center'
    >
      <PageTest />
    </Stack>
  );
}

export default App;
