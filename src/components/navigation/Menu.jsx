import useDashboard from '../../stores/dashboard';

import styled from 'styled-components';

let fadeSpeed = '0.2s';

const MenuBox = styled.button`
  transition: background-color ${fadeSpeed} ease-in-out;

  display: flex;
  justify-content: start;
  align-items: center;
  gap: 10px;

  width: 100%;
  height: 44px;
  padding: 10px;
  border-radius: 6px;

  box-sizing: border-box;

  background-color: transparent;
  outline: none;
  border: none;

  &:hover {
    cursor: pointer;
    background-color: #ffffff08;
  }

  & > p {
    transition: color ${fadeSpeed} ease-in-out;
    color: #465566;
    font-size: 14px;
  }

  & > img {
    transition: opacity ${fadeSpeed} ease-in-out;
    opacity: 0.3;
  }

  &.selected {
    background-color: #112337;
    color: white;
  }

  &.selected > p {
    color: white;
  }

  &.selected > img {
    opacity: 1;
  }
`;

export const Menu = ({ children = {}, onClick = {}, icon, name = 'menu' }) => {
  const { SelectedDashboardMenu } = useDashboard();

  return (
    <MenuBox
      className={SelectedDashboardMenu == name ? 'selected' : ''}
      onClick={onClick}
    >
      <img src={icon} />
      <p style={{ margin: 0, padding: 0 }}>{children}</p>
    </MenuBox>
  );
};
