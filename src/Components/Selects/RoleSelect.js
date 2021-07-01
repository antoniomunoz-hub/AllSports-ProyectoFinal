import React, {useState} from 'react';
import Select from 'react-select';
import role from "../../data/RolesUser.json";

export default function RoleSelect() {
    const [value, setValue] = useState('')
  
    const changeHandler = value => {
      setValue(value)
    }
    
    return <Select options={role} value={value} onChange={changeHandler}/>
  }


