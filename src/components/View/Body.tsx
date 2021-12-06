import styled from 'styled-components';

export type BodyProps = {};

function Body({}: BodyProps) {
  return (
    <BodyBlock>
      <div>snippet</div>
    </BodyBlock>
  );
}

const BodyBlock = styled.div``;

export default Body;
