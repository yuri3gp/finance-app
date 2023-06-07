import styled from 'styled-components/native';

const colorPalet = [
  "#FFFFFF",
  "#F8E9E3",
  "#C75C71",
  "#EFD6CC",
  "#E1BAAB",
  "#791127"
]

export const Container = styled.KeyboardAvoidingView`
  margin-top: 10%;
  justify-content: center;
  background-color: ${colorPalet[1]};
`;