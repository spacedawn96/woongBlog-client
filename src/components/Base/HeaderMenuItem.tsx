import styled from 'styled-components';

export type HeaderMenuItemProps = {};

function HeaderMenuItem({}: HeaderMenuItemProps) {
  return (
    <HeaderMenuItemBlock>
      <div>snippet</div>
      <div>snippet</div>
      <div>snippet</div>
    </HeaderMenuItemBlock>
  );
}

const HeaderMenuItemBlock = styled.div`
  display: flex;
`;

export default HeaderMenuItem;
