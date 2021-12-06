import React from 'react';
import styled from 'styled-components';

const ListItemTap = styled.div<{
  color?: string;
}>`
  display: flex;
  font-size: 1.2rem;
  font-weight: 600;
  transition: color 0.25s;
  cursor: pointer;
  padding: 0 0.5rem;
`;

export type ListItemProps = {
  items: string;
  color?: string;
};

function ListItem(props: ListItemProps) {
  return <ListItemTap {...props}>{props.items}</ListItemTap>;
}

export default ListItem;
