import React, { ChangeEvent } from 'react'

import classes from './index.module.scss'

type RadioButtonPropTypes = {
  label: string
  value: string
  isSelected: boolean
  onRadioChange: (val: string) => void
  groupName: string
}

const RadioButton = ({
  label,
  value,
  isSelected,
  onRadioChange,
  groupName,
}: RadioButtonPropTypes) => {
  const handleOnChange = () => {
    onRadioChange(value)
  }
  return (
    <label className={classes.radioWrapper}>
      <input
        className={classes.radio}
        type="radio"
        checked={isSelected}
        onChange={handleOnChange}
        name={groupName}
      />
      <span>{label}</span>
    </label>
  )
}

export default RadioButton
