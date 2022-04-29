import React from "react";
import { joinClassNames } from "../Utils";

import "../index.css";
import "./Radiobutton.css";

function Radiobutton({ className, disabled, checked, name, onChange, label }) {
  return (
    <label className={joinClassNames(["radiobutton", className])}>
      <input type="radio" checked={checked} name={name} disabled={disabled} onChange={onChange} />
      <span className="radiobutton__checkmark" />
      {label && <span className="radiobutton__label" >{label}</span>}
    </label>
  );
}

Radiobutton.defaultProps = {
  className: "",
  disabled: false,
  checked: false,
  name: "radiobutton",
  onChange: () => {},
  label: '',
};

export default Radiobutton;
