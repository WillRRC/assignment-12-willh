import React from 'react'
interface Heroprop {
  heroinput: string;
}

const Hero = (props: Heroprop) => {
  return <img src={props.heroinput}></img>
}
export default Hero;