import React from "react";
import { joinClassNames } from "../Utils";

import "../index.css";
import "./Switcher.css";

function Switcher({ className, disabled, checked, name, onChange }) {
  return (
    <div
      className={joinClassNames([
        "switcher",
        className,
      ])}
    >
        <input
          checked={checked}
          disabled={disabled}
          onChange={onChange}
          type="checkbox"
          name={name}
          className="switcher__input"
        />
    </div>
  );
}

Switcher.defaultProps = {
  className: "",
  disabled: false,
  checked: false,
  name: "switcher",
  onChange: () => {},
};

export default Switcher;
