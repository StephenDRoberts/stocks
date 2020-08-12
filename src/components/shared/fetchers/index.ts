import axios from 'axios';


export async function get<T>(
    path: string
): Promise<T> {
    const { data } = await axios.get(path);
    console.log('in fetcher', data)
    return data;
};