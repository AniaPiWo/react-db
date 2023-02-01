import css from "./Alert.module.css";
import React from "react";
import { StyledContainer, StyledText } from "./Alert.styled";

export const Alert = ({ text }) => (
  <div className={css.container}>
    <div className={css.text}>{text}</div>
  </div>
);

export const Alert2 = ({ text, variant }) => (
  <StyledContainer>
    <StyledText className={css.text}>{text}</StyledText>
  </StyledContainer>
);

export const Alert3 = ({ text }) => (
  <StyledContainer variant="dark">
    <StyledText className={css.text}>{text}</StyledText>
  </StyledContainer>
);
