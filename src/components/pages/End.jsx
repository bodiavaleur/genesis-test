import React from "react";
import { Overview } from "../templates";

export function End() {
  return (
    <Overview
      score
      title='$8000 earned'
      buttonLabel='Try again'
      redirectTo='/'
    />
  );
}
