import React from "react";
import { joinClassNames } from "../Utils";

import "../index.css";
import "./Checkbox.css";

function Checkbox({ className, disabled, checked, name, onChange, label, markType }) {
  return (
    <label className={joinClassNames(["checkbox", className])}>
      <input type="checkbox" checked={checked} name={name} disabled={disabled} onChange={onChange} />
      {markType==='line'? <span className="checkbox__line" /> : <span className="checkbox__checkmark" />}
      {label && <span className="checkbox__label" >{label}</span>}
    </label>
  );
}

Checkbox.defaultProps = {
  className: "",
  disabled: false,
  checked: false,
  name: "checkbox",
  onChange: () => {},
  label: '',
};

export default Checkbox;
