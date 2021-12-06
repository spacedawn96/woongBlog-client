import styled from 'styled-components';

export type SideProps = {};

function Side({}: SideProps) {
  return (
    <SideBlock>
      <div>snippet</div>
    </SideBlock>
  );
}

const SideBlock = styled.div``;

export default Side;
