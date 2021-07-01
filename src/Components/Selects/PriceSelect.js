import React, {useState} from 'react'
import Select from 'react-select';
import price from "../../data/PriceManager.json";


export default function PriceSelect() {
    const [value, setValue] = useState('')
  
    const changeHandler = value => {
      setValue(value)
    }
    
    return <Select options={price} value={value} onChange={changeHandler}/>
  }
