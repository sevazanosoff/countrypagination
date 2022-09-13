import React from 'react'
import { InputProps } from '../../../types/types'
import styles from './MyInput.module.scss'
const MyInput: React.FC<InputProps> = (props) => {
    return (
        <input
            className={styles['input']}
            {...props}
        />
    )
}

export default MyInput
