import React from 'react'
interface HoneProps {
  textinput: string;
}
const HOne = (props: HoneProps) => {
  return <h1>{props.textinput}</h1>;
}
export default HOne;