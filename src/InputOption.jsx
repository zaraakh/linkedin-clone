import React from 'react'
import './InputOption.css'

function InputOption({Icon, title, color}) {
  return (
    <div className='inputOption'>
     <Icon style={{ color: color }} />
     <div className='feed__title'>{title}</div>
    </div>
  )
}

export default InputOption
