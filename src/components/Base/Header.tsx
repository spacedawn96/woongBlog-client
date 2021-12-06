import styled from 'styled-components';
import Image from 'next/image';
import HeaderMenuItem from './HeaderMenuItem';

export type HeaderProps = {};

const primaryItems = ['hello'];
const secondaryItems = ['hellllll'];
function Header({}: HeaderProps) {
  return (
    <HeaderBlock>
      <HeaderUlBlock>
        <li>
          <div>
            <Image
              src='/logo.png'
              alt='Picture of the author'
              width={337}
              height={81}
            />
          </div>
        </li>
        {primaryItems.map((itemProps) => (
          <li key={itemProps}>
            <HeaderMenuItem />
          </li>
        ))}
      </HeaderUlBlock>
      <ul>
        {/* {secondaryItems.map((itemProps) => (
          <li key={itemProps}>
            <HeaderMenuItem />
          </li>
        ))} */}
      </ul>
    </HeaderBlock>
  );
}

const HeaderBlock = styled.nav`
  border: 1px solid red;
  width: 80%;
  margin: 0 auto;
`;

const HeaderUlBlock = styled.ul`
  display: flex;
  align-items: center;
`;

export default Header;
