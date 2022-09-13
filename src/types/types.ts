export type currentCountryProps = {
    name: {
        localCompare(name: { common: string }): number
        common: string
    }
    cca2: string
    fifa: string
    flags: {
        png?: string
        svg?: string
    }
    capital: Array<string>
}
export interface IOptions {
    value?: string | number
    description: string
}

export type ListProps = {
    page: number
    // value: string
    countries: currentCountryProps[]
}
export type ListItemProps = {
    country: currentCountryProps
}
export type PaginationProps = {
    page: number
    totalPages: number
    changePage(p: number): void
}

export type SelectProps = {
    select: string
    setSelect(select: string): void
    options: IOptions[]
    type: string
}

export type InputProps = {
    value: string
    placeholder: string
    onChange(e: React.ChangeEvent<HTMLInputElement>): void
}

