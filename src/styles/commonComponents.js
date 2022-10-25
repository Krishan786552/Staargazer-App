import styled from "styled-components";
export const H1Component = styled.h1`
  font-family: "Lato", sans-serif;
  text-align: center;
  text-transform: uppercase;
  font-weight: 200;
  font-size: 26px;
  line-height: 10em;
  letter-spacing: 5px;
  color: #fff;
`;
export const DivComponent = styled.div`
  display: inline-block;
  justify-content: space-between;
  border-radius: 30px;
  color: #808080;
  margin: 12px;
  padding: 10px;
  width: 15%;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
`;

export const InputContainer = styled.div`
  background: transparent;
  color: white;
  padding: 0.25em 1em;
  text-align: center;
  margin: 0 8% 0 8%;
`;

export const ButtonContainer = styled.button`
  background: transparent;
  border-radius: 15px;
  border: 1.5px solid white;
  color: white;
  margin: 0 1em;
  padding: 0.25em 1em;
`;

export const TextBoxContainer = styled.input`
  border-radius: 15px;
  border: 1.5px solid white;
  background-color: transparent;
  color: #fff;
  margin: 0 1em;
  padding: 0.25em 1em;
  width: 30em;
  box-sizing: border-box;
`;
