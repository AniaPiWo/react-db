import css from "./Alert.module.css";

export const Alert = ({ text }) => (
  <div className={css.container}>
    <div className={css.text}>{text}</div>
  </div>
);
