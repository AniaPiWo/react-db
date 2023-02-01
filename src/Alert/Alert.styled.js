import styled from "styled-components";

export const StyledContainer = styled.div`
  width: 100px;
  height: 25px;
  background-color: ${(props) => (props.variant === "dark" ? "black" : "lime")};
`;

export const StyledText = styled.div`
  color: white;
  border: 1px solid black;
`;
