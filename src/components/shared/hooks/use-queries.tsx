import { useState, useEffect } from 'react';
import { DailyPrice, APIResponse } from '../types';
import { get } from '../fetchers';

export const useGetDailyPrices = () => {
    const initialData: DailyPrice[] = [];
    const [data, setData] = useState<DailyPrice[]>(initialData);

    const fn = async () => {
        const { results } = await get<APIResponse>('./data/SHARE_HISTORY_DTG.json');
        setData(results)
    }

    useEffect(() => {
        fn()
    }, [])

    return data;
}