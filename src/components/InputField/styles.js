import styled from 'styled-components/native';

const colorPalet = [
  "#FFFFFF",
  "#F8E9E3",
  "#C75C71",
  "#EFD6CC",
  "#E1BAAB",
  "#791127"
]

export const Label = styled.Text`
  font-size: 25px;
  font-weight: bold;
  color : ${colorPalet[5]};
`;

export const Input = styled.TextInput`
  background-color: ${colorPalet[4]};
  color: ${colorPalet[2]};
  height: 60px;
  font-size: 50px;
  font-weight: bold;
  border-radius: 80px;
  text-align: center; /* Centraliza horizontalmente */
  text-align-vertical: center;
  border: 2px solid ${colorPalet[5]};
`;