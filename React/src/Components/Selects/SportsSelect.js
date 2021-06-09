import React, { useState} from 'react';
import Select from 'react-select';
import sports from "../../data/ListSports";

export default function SportsSelect() {
    const [value, setValue] = useState('')
  
    const changeHandler = value => {
      setValue(value)
    }
    
    return <Select options={sports} value={value} onChange={changeHandler}/>
  }
