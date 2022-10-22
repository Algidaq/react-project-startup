import { useState } from 'react';
import { PageTestState } from './PageTestState';

function usePageState() {
  const [state, setState] = useState<PageTestState>(new PageTestState());
  const increment = () =>
    setState((prev) => prev.copyWith({ count: prev.count + 1 }));
  return { state, increment };
}
export default usePageState;
