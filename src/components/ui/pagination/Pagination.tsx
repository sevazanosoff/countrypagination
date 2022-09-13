import React from 'react'
import { PaginationProps } from '../../../types/types'
import styles from './Pagination.module.scss'
const Pagination: React.FC<PaginationProps> = ({ page, totalPages, changePage }) => {
    const totalPagesArray = []
    for (let i = 0; i < totalPages; i++) {
        totalPagesArray.push(i + 1)
    }
    return (
        <div className={styles['page__wrapper']}>
            {totalPagesArray.map((p) =>
                <span
                    key={p}
                    onClick={() => changePage(p)}
                    className={page === p ? styles['page__current'] : styles['page']}
                >
                    {p}
                </span>
            )}
        </div>
    )
}

export default Pagination
