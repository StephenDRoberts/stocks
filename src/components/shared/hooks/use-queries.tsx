import { useState, useEffect } from "react";
import { DailyPrice, DailyPriceAPIResponse, AnnualData, AnnualDataAPIResponse } from "../types";
import { get } from "../fetchers";

export const useGetDailyPrices = () => {
  const initialData: DailyPrice[] = [];
  const [data, setData] = useState<DailyPrice[]>(initialData);

  const fn = async () => {
    const { results } = await get<DailyPriceAPIResponse>("./data/SHARE_HISTORY_DTG.json");
    setData(results);
  };

  useEffect(() => {
    fn();
  }, []);

  return data;
};


export const useGetAnnualData = () => {
  const initialData: AnnualData[] = [];
  const [data, setData] = useState<AnnualData[]>(initialData);

  const fn = async () => {
    const { results } = await get<AnnualDataAPIResponse>("./data/DUMMY_DATA_ANNUAL.json");
    setData(results);
  };

  useEffect(() => {
    fn();
  }, []);

  return data;
};
