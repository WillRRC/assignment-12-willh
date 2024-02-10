import React from 'react'
interface LabelProps {
  labelname: string;
}

const Label = (props: LabelProps) => {
  return <label>{props.labelname}</label>;
}
export default Label;