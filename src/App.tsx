import React from "react";
import axios from "axios";

import List from "./components/List";
import CoutriesTitle from "./components/CoutriesTitle";

import Pagination from "./components/ui/pagination/Pagination";
import Loading from "./components/ui/Loading/Loading";
import MySelect from "./components/ui/select/MySelect";
import MyInput from "./components/ui/input/MyInput";

import { getTotalPages } from './utils/getTotalPages'

import { currentCountryProps, IOptions } from "./types/types";

import styles from './styles/App.module.scss'



const App: React.FC = () => {
  const [countries, setCountries] = React.useState<currentCountryProps[]>([])
  const [loading, setLoading] = React.useState<boolean>(false)
  const [page, setPage] = React.useState<number>(1)
  const [limit, setLimit] = React.useState<number>(10)
  const [select, setSelect] = React.useState<string>('')
  const [selectFilter, setSelectFilter] = React.useState<string>('')
  const [value, setValue] = React.useState('')
  const lastCountry: number = page * limit
  const firstCountry: number = lastCountry - limit
  // С фильтрацией получилось плохо потому-что не могу нормально в ссылке указать и регион и имя страны
  // получается что если я что-то ввожу оно обновляет и правильно выводит, но если стираю выводит список все стран без учтения региона
  const currentCountry = countries
    .filter(country =>
      country.cca2 !== 'RU' &&
      country.cca2 !== 'BY' &&
      country.name.common.toLowerCase().includes(value.toLowerCase()))
    .slice(firstCountry, lastCountry)
  // Filter case
  switch (selectFilter) {
    case 'По алфавиту от А до Я':
      currentCountry.sort((a, b) => a.name.common.localeCompare(b.name.common))
      break
    case 'По алфавиту от Я до А':
      currentCountry.sort((a, b) => b.name.common.localeCompare(a.name.common))
      break
  }
  const totalPages = value ? getTotalPages(currentCountry, limit) : getTotalPages(countries, limit)

  const options: IOptions[] = [
    { value: 20, description: '20' },
    { value: 100, description: 'Все' }
  ]

  const optionsFilter: IOptions[] = [
    { description: 'По алфавиту от А до Я' },
    { description: 'По алфавиту от Я до А' }
  ]

  const fetchCountries = async () => {
    setLoading(true)
    const res = await axios.get(`https://restcountries.com/v3.1/region/europe`)
    setCountries(res.data)
    setLoading(false)
  }

  React.useEffect(() => {
    fetchCountries()
  }, [])

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  React.useEffect(() => {
    // Pagination case
    switch (+select) {
      case options[0].value:
        setLimit(20)
        break
      case options[1].value:
        setLimit(countries.length)
        break
      default:
        setLimit(10)
        break
    }
  }, [select])

  console.log(select)

  return (
    <div className={styles['countries']}>
      <div className={styles['wrapper']}>
        <div className={styles['countries__selects']}>
          <MySelect
            select={select}
            setSelect={setSelect}
            options={options}
            type={'Вывести кол-во стран:'}
          />
          <MySelect
            select={selectFilter}
            setSelect={setSelectFilter}
            options={optionsFilter}
            type={'Отфильтровать по:'}
          />
        </div>
        <MyInput
          value={value}
          onChange={onChangeInput}
          placeholder='Найти страну...'
        />
        <CoutriesTitle />
        {loading ? <Loading /> : <List page={page} countries={currentCountry} />}
        <Pagination totalPages={totalPages} page={page} changePage={(p: number) => setPage(p)} />
      </div>
    </div>
  );
}

export default App;
