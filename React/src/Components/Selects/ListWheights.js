import React, {useState} from 'react'
import Select from 'react-select';
import weights from "../../data/ListWeights.json";


export default function ListWheights() {
    const [value, setValue] = useState('')
  
    const changeHandler = value => {
      setValue(value)
    }
    
    return <Select options={weights} value={value} onChange={changeHandler}/>
  }

