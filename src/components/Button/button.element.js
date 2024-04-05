import styled from "@emotion/styled";

export const ButtonElement = styled.button`
  bottom: 0;
  width: 100%;
  max-width: 240px;
  height: 60px;
  background-color: rgb(255, 71, 71);;
  cursor: pointer;
  opacity: 1;
  transition: all .25s ease;
  border-radius: 8px;
  &:hover {
      opacity: 0.7;
  }
  color: #FFFFFF;
  font-size: 16px;
  position: relative;
  text-align: center;
`;