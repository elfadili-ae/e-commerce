'use client'
import React, { ChangeEvent, useState } from 'react'

import classes from './index.module.scss'

type CheckboxProptypes = {
  label: string
  value: string
  isSelected: boolean
  onClickHandler: (value: string) => void
}

const Checkbox = ({ label, value, isSelected, onClickHandler }: CheckboxProptypes) => {
  const [isChecked, setIsChecked] = useState(isSelected)

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked)
    onClickHandler(value)
  }
  return (
    <label className={classes.checkboxWrapper}>
      <input
        type="checkbox"
        checked={isChecked}
        className={classes.checkbox}
        onChange={handleOnChange}
      />
      <span>{label}</span>
    </label>
  )
}

export default Checkbox
