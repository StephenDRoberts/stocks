export const formatCurrency = (value: number) => {

    return value.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}