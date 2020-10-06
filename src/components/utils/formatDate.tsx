export const formatDate = (date: string) => {
    const dateSplit = date.split("-")
    console.log(dateSplit)
    
    const year = dateSplit[0]
    const month = dateSplit[1]
    const day = dateSplit[2]

    return `${day}-${month}-${year}`
}