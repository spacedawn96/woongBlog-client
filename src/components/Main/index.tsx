import styled from 'styled-components';
import media from '../../lib/styles/media';
import useWindowSize from '../../lib/styles/useWindowSize';
import Button from '../Common/TailButton';
import TailInput from '../Common/TailInput';

export type MainProps = {};

function Main({}: MainProps) {
  const WindowWidth = useWindowSize();

  return (
    <MainBlock className="max-w-7xl mx-auto px-4 sm:px-6">
      {WindowWidth.width > 768 ? (
        <MainTitle>
          The best design
          <br /> articles every day.
        </MainTitle>
      ) : (
        <MinMainTitle>The best design articles every day.</MinMainTitle>
      )}

      <MainSubTitle>Subscribe and get our weekly newsletter in your inbox.</MainSubTitle>
      <TailWrapper>
        <TailInput />
        <div>
          <Button className="text-sm !font-medium">Learn More</Button>
        </div>
      </TailWrapper>
    </MainBlock>
  );
}

const MainBlock = styled.div`
  margin: 0 auto;
  height: 16rem;
  margin-top: 5rem;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  ${media.custom(768)} {
    border: 1px solid red;
  }
`;

const MainTitle = styled.div`
  font-size: 2.875rem;
  font-weight: 600;
  line-height: 3.625rem;
  color: #1f2d3d;
  font-family: 'Matter';
  ${media.custom(768)} {
    font-size: 2rem;
  }
`;

const MinMainTitle = styled.div`
  font-size: 2.875rem;
  font-weight: 600;
  line-height: 3.625rem;
  width: 100%;
  text-align: center;

  color: #1f2d3d;
  font-family: 'Matter';
  ${media.custom(768)} {
    font-size: 2rem;
  }
`;
const MainSubTitle = styled.div`
  font-size: 1.125rem;
  font-weight: 300;
  line-height: 1.75rem;
  color: #3c4858;
  ${media.custom(768)} {
    text-align: center;
  }
`;

const TailWrapper = styled.div`
  ${media.custom(768)} {
    margin: 0 auto;
  }
`;
export default Main;
