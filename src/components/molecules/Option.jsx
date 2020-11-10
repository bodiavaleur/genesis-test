import React from "react";
import { OptionSvg } from "../atoms";

export function Option(props) {
  return (
    <OptionSvg
      {...props}
      width='320'
      height='56'
      viewBox='0 0 320 56'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      onClick={props.select}
    >
      <path d='M303 28L320 28' stroke='#D0D0D8' />
      <path d='M0 28L17 28' stroke='#D0D0D8' />
      <path
        d='M32.8175 5.31576C34.9762 2.29361 38.4615 0.5 42.1754 0.5H277.825C281.539 0.5 285.024 2.29361 287.183 5.31576L303.386 28L287.183 50.6842C285.024 53.7064 281.539 55.5 277.825 55.5H42.1754C38.4615 55.5 34.9762 53.7064 32.8175 50.6842L16.6145 28L32.8175 5.31576Z'
        fill='white'
        stroke='#D0D0D8'
      />
      <text
        x='15%'
        y='50%'
        dominantBaseline='middle'
        fontSize='14px'
        textAnchor='middle'
        fill='var(--primary)'
      >
        {props.option}
      </text>

      <text
        x='50%'
        y='50%'
        dominantBaseline='middle'
        fontSize='14px'
        textAnchor='middle'
        fill='var(--text-black)'
      >
        {props.answer}
      </text>
    </OptionSvg>
  );
}
