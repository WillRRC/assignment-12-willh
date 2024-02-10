import React from 'react'
interface DropDownProps {
  dropdowninput1: string;
  dropdowninput2: string;
  dropdowninput3: string;
  dropdowninput4: string;
}

const DropDown = (props: DropDownProps) => {
  return <select>
  <option>{props.dropdowninput1}</option>
  <option>{props.dropdowninput2}</option>
  <option>{props.dropdowninput3}</option>
  <option>{props.dropdowninput4}</option>
</select>;
}
export default DropDown;