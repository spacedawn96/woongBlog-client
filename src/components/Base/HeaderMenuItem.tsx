import styled from 'styled-components';

export type HeaderMenuItemProps = {
  icon: React.ReactNode;
  text: string;
};

function HeaderMenuItem(props: HeaderMenuItemProps) {
  return (
    <>
      <HeaderMenuItemBlock>
        {props.icon}
        {props.text}
      </HeaderMenuItemBlock>
    </>
  );
}

const HeaderMenuItemBlock = styled.div`
  display: flex;
`;

export default HeaderMenuItem;
