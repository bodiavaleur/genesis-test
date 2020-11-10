import React from "react";
import { Overview } from "../templates";

export function Start() {
  return (
    <Overview
      triangle
      title='Who wants to be a millionaire?'
      buttonLabel='Start'
      redirectTo='/game'
    />
  );
}
