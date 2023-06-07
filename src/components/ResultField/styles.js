import styled from 'styled-components/native';

const colorPalet = [
  "#FFFFFF",
  "#F8E9E3",
  "#C75C71",
  "#EFD6CC",
  "#E1BAAB",
  "#791127"
]

export const LabelResult = styled.Text`
  font-size: 25px;
  font-weight: bold;
  color : ${colorPalet[4]};
`;

export const Result = styled.View`
  align-items: center;
  background-color: ${colorPalet[5]};
  border-radius: 30px;
`;

export const Value = styled.Text`
  font-size: 25px;
  font-weight: bold;
  color : ${colorPalet[0]};
`;