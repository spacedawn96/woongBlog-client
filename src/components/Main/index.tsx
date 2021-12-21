import styled from 'styled-components';
import Button from '../Common/TailButton';
import TailInput from '../Common/TailInput';

export type MainProps = {};

function Main({}: MainProps) {
  return (
    <MainBlock>
      <MainTitle>
        The best design
        <br /> articles every day.
      </MainTitle>
      <MainSubTitle>Subscribe and get our weekly newsletter in your inbox.</MainSubTitle>
      <TailInput />
      <Button className="text-sm !font-medium">Main</Button>
    </MainBlock>
  );
}

const MainBlock = styled.div`
  width: 82.5rem;
  margin: 0 auto;
  height: 21.8125rem;
  margin-top: 5rem;
`;

const MainTitle = styled.div`
  font-size: 2.875rem;
  font-weight: 600;
  line-height: 3.625rem;
  color: #1f2d3d;
`;

const MainSubTitle = styled.div`
  font-size: 1.125rem;
  font-weight: 300;
  line-height: 1.75rem;
  color: #3c4858;
`;
export default Main;
