import React from 'react'
interface Imageprop {
  imageinput: string;
}

const Image = (props: Imageprop) => {
  return <img src={props.imageinput}></img>
}
export default Image;