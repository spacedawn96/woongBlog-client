import styled from 'styled-components';
import { Button as EvergreenButton, ButtonProps as BP } from 'evergreen-ui';

export type ButtonProps = {
  size: number;
  children: React.ReactNode;
};

function Button(props: ButtonProps) {
  return <EvergreenButton>{props.children}</EvergreenButton>;
}

const ButtonBlock = styled.div``;

export default Button;
