import "./ButtonWithIcon.css";

import React from "react";
import { Button, Glyph } from "..";
import { joinClassNames } from "../Utils";

function ButtonWithIcon({
  className,
  primary,
  glyphNameLeft,
  glyphNameRight,
  children,
}) {
  return (
    <Button
      className={joinClassNames([
        "button_with_icon",
        {
          "button_with_icon--left": glyphNameLeft != null,
          "button_with_icon--right": glyphNameRight != null,
          "button_with_icon--no_child": children == null,
        },
        className,
      ])}
      primary={primary}
    >
      {glyphNameLeft ? (
        <Glyph name={glyphNameLeft} className="button_with_icon__glyph" />
      ) : null}
      {children}
      {glyphNameRight ? (
        <Glyph name={glyphNameRight} className="button_with_icon__glyph" />
      ) : null}
    </Button>
  );
}

export default ButtonWithIcon;
