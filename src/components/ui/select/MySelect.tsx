import React from 'react'
import { SelectProps } from '../../../types/types'
import styles from './MySelect.module.scss'

const MySelect: React.FC<SelectProps> = ({ select, setSelect, options, type }) => {
    return (
        <>
            <select className={styles['select']} value={select} onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setSelect(e.target.value)}>
                <option className={styles['select__option']} value="default" hidden>{type}</option>
                {options.map((obj, i) => (
                    <option className={styles['select__option']}
                        key={i}
                        value={obj.value}>{obj.description}</option>
                ))}
            </select>
        </>
    )
}

export default MySelect
