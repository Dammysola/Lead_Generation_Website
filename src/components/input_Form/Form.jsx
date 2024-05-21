import React from 'react'
import Style from './Form.module.css'

const Form = (props) => {
    const {label,placeholder,type, value, name, OnChange, } = props
  return (
    <div>
        <label className={Style}>{label}</label>
        <input
        className={Style.input} 
        placeholder={placeholder}
        type={type}
        value={value}
        name={name}
        onChange={OnChange}
        />
    </div>
  )
}

export default Form