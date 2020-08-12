import { useState } from 'react';
import { DailyPrices } from '../types';
import { get } from '../fetchers';

export const useGetDailyPrices = async (ticker: string) => {
    const { results } = await get<DailyPrices>('./data/EPS_HISTORY.json')

    return { results }
}