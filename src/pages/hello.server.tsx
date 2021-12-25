import styled from 'styled-components';
import { Suspense } from 'react';

export type HelloProps = {};

export default function Hello({}: HelloProps) {
  return (
    <Suspense fallback={'Loading...'}>
      <div>hello</div>
    </Suspense>
  );
}

const HelloBlock = styled.div``;
