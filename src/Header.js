import PropTypes from "prop-types";
import "./Header.css";
import React from "react";
import css from "./Header.module.css";

const headerStyle = {
  color: "black",
  backgroundColor: "lightpink",
  padding: 10,
};

const getBgColor = (variant) => {
  switch (variant) {
    case "darkgrey":
      return {
        backgroundColor: "darkgrey",
        color: "white",
      };
    case "pink":
      return {
        backgroundColor: "pink",
        color: "white",
      };
    default:
      return {
        backgroundColor: "lime",
      };
  }
};

const headerStyleDynamic = ({ padding }) => ({
  color: "black",
  backgroundColor: "lightpink",
  padding: padding || 10, //wartosc przekazana || wartosc domyslna
});

export const Header = (props) => (
  <h2
    style={{
      ...headerStyle,
      ...headerStyleDynamic({ padding: props.padding }),
      ...getBgColor(props.variant),
    }}
  >
    {props.value}
  </h2>
);

export const Header2 = (props) => (
  <h2 className="header-style2">{props.value}</h2>
);

export const Header3 = ({ variant, value, isOutlined, isShadowed }) => {
  const classNames = ["header-style2", variant];

  if (isOutlined) classNames.push("outlined");
  if (isShadowed) classNames.push("shadowed");

  return <h2 className={classNames.join(" ")}>{value}</h2>;
};

export const Header5 = (props) => (
  <h2 className={css.headerStyle3}>{props.value}</h2>
);

/* export const Header4 = ({ variant, value, isOutlined, isShadowed }) => {
  //clsx

  const classNames = clsx(
    inputs: "first",
    variant,
    isOutlined && "outlined",
    isShadowed && "shadowed"
  );

  return <h2 className={classNames}>{value}</h2>;
}; */

Header.propTypes = {
  value: PropTypes.string.isRequired,
  variant: PropTypes.string,
  isOutlined: PropTypes.bool,
  isShadowed: PropTypes.bool,
};
