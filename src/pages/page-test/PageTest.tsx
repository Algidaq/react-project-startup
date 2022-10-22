import { Stack } from '@mui/material';
import React from 'react';
import usePageState from './page-test-state/usePageState';

interface PageTestProps {}

const PageTest: React.FunctionComponent<PageTestProps> = () => {
  const { state, increment } = usePageState();
  return (
    <div style={{ margin: '0 auto' }}>
      <span
        style={{ display: 'inline-block', marginRight: '10px', color: 'black' }}
      >
        {state.count}
      </span>{' '}
      <button onClick={increment}> increment</button>
    </div>
  );
};

export default PageTest;
