import styled from 'styled-components';

export type ContainerProps = {};

function Container({}: ContainerProps) {
  return (
    <ContainerBlock>
      <div>snippet</div>
    </ContainerBlock>
  );
}

const ContainerBlock = styled.div``;

export default Container;
