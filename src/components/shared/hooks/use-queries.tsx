import { useState, useEffect } from 'react';
import { DailyPrices, DailyPrice, APIResponse } from '../types';
import { get } from '../fetchers';

export const useGetDailyPrices = async (ticker: string) => {
    const initialData: DailyPrice[] = [];
    const [data, setData] = useState<DailyPrice[]>(initialData);

    const fn = async () => {
        const { results } = await get<APIResponse>('./data/EPS_HISTORY.json');
        setData(results)
    }

    useEffect(() => {
        fn()
    }, []) // maybe even pass ticker in here as a dependancy so that it makes a new call when ticker changes

    return data;
}