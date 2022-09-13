import React from 'react'
import axios from 'axios'
import Loading from '../ui/Loading/Loading'
import { useParams, Link } from 'react-router-dom'

import { currentCountryProps } from '../../types/types'

import styles from '../../styles/ListItemBig.module.scss'

const ListItemBig = () => {
    const [country, setCountry] = React.useState<currentCountryProps[]>([])
    const [loading, setLoading] = React.useState<boolean>(false)
    const params = useParams()

    const fetchCountries = async () => {
        setLoading(!loading)
        if (!!params.name) {
            const res = await axios.get<currentCountryProps[]>(`https://restcountries.com/v3.1/name/${params.name.toLowerCase()}`)
            setCountry(res.data)
        }
        setLoading(!loading)
    }
    React.useEffect(() => {
        fetchCountries()
    }, [])

    return (
        <>
            {country.length === 1
                ?
                <div className={styles['country__big']}>
                    <img className={styles['country__big-img']} src={country[0].flags.png} alt="flag" />
                    <h1 className={styles['country__big-title']}>Country: {`${country[0].name.common}`} || Fifa: {`${country[0].fifa}`}</h1>
                    <p className={styles['country__big-text']}>Capital: {`${country[0].capital[0]}`}</p>
                    <Link className={styles['country__big-back']} to='/'>Вернутся назад</Link>
                </div>
                :
                <div className={styles['country__big']}>
                    <Loading />
                </div>
            }
        </>
    )
}

export default ListItemBig
