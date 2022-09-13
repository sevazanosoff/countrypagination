import React from 'react'
import ListItem from './ListItem'

import { ListProps } from '../types/types'

import styles from '../styles/List.module.scss'

const List: React.FC<ListProps> = ({ page, countries }) => {
    const [isLoading, setLoading] = React.useState<boolean>(true)
    React.useEffect(() => {
        setLoading(false)
        setTimeout(() => setLoading(true), 0.1)
    }, [page])

    return (
        <>
            {isLoading &&
                <ul className={styles['countries__list']}>
                    {countries.length
                        ?
                        countries
                            .map((country, i) =>
                                <ListItem key={i} country={country} />
                            )
                        :
                        <div className={styles['countries__list-seacrh']}>Не удалось найти страну, попробуйте еще раз</div>
                    }
                </ul>
            }
        </>
    )
}

export default List
