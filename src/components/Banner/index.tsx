import styled from 'styled-components';

export type BannerProps = {};

function Banner({}: BannerProps) {
  return (
    <BannerBlock>
      <BannerText className='sans'>
        📹 New! Remote User Testing - Get video + voice feedback on designs and
        prototypes
      </BannerText>
    </BannerBlock>
  );
}

const BannerBlock = styled.div`
  height: 3.125rem;
  background-color: #7e5bef;
`;

const BannerText = styled.div`
  font-size: 1rem;
  letter-spacing: -0.2px;
  text-decoration: none solid rgb(255, 255, 255);
  color: #ffff;
  line-height: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3.125rem;
  outline: rgb(255, 0, 0) dashed 1px;
`;
export default Banner;
