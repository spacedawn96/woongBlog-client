import styled from 'styled-components';

export type GridProps = {};

function Grid({}: GridProps) {
  return (
    <GridBlock>
      <FirstWrapper className="grid grid-cols-3 gap-4 ">
        <FirstGrid className="border border-black col-start-1 col-end-4 ">04</FirstGrid>
        <div className="border border-black   ...">01</div>
        <div className="border border-black   ...">02</div>
        <div className="border border-black  ...">03</div>
        <div className="border border-black  ...">03</div>
        <div className="border border-black  ...">03</div>
        <div className="border border-black  ...">03</div>
        <div className="border border-black  ...">03</div>
        <div className="border border-black  ...">03</div>
        <div className="border border-black  ...">03</div>
        <div className="border border-black  ...">03</div>
      </FirstWrapper>
    </GridBlock>
  );
}

const GridBlock = styled.div`
  width: 82.5rem;
  border: 1px solid red;
  margin: 0 auto;
`;

const FirstWrapper = styled.div`
  grid-template-rows: 39.375rem;
  grid-auto-rows: 30rem;
`;

const FirstGrid = styled.section``;

export default Grid;
