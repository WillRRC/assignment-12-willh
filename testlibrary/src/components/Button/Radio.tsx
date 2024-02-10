import React from 'react'
interface RadioProps {
  radionames: string;
  radiofalse: string;
}

const RadioButton = (props: RadioProps) => {
  return <form>
    <label>True</label>
  <input type="radio"></input>
  <label>false</label>
  <input type="radio"></input>
</form>;
};
export default RadioButton;