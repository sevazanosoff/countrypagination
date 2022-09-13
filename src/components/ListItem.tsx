import React from 'react'
import { Link } from "react-router-dom";

import { ListItemProps } from '../types/types';

import styles from '../styles/ListItem.module.scss'


const ListItem: React.FC<ListItemProps> = ({ country }) => {
    return (
        <li className={styles['country__item']}>
            <img className={styles['country__item-flag']} src={country.flags.png} alt="flag" />
            <Link className={styles['country__item-link']} to={`/country/${country.name.common}`}>{country.name.common}</Link>
        </li>
    )
}

export default ListItem
