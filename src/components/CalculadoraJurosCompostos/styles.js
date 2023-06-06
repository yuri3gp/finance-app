import styled from 'styled-components/native';

const colorPalet = [
  "#FFFFFF",
  "#F8E9E3",
  "#F4DDD4",
  "#EFD6CC",
  "#E1BAAB"
]

const Container = styled.KeyboardAvoidingView`
  margin-top: 10%;
  justify-content: center;
  background-color: ${colorPalet[1]};
`;

const Heading = styled.Text`
  color: black;
`;

const Label = styled.Text`
  font-size: 25px;
  font-weight: bold;
  color : ${colorPalet[4]};
`;

const Input = styled.TextInput`
  background-color: ${colorPalet[4]};
  color: ${colorPalet[2]};
  height: 60px;
  font-size: 50px;
  font-weight: bold;
  border-radius: 30px;
  align-items: center;
`;

const Result = styled.View`
  align-items: center;
  background-color: ${colorPalet[5]};
  border-radius: 30px;
`;

const Value = styled.Text`
  font-size: 25px;
  font-weight: bold;
  color : ${colorPalet[0]};
`;

export { Container, Heading, Label, Input, Result, Value }