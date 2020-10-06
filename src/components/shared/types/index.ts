export interface DailyPrices {
  total: number;
  offset: number;
  results: DailyPrice[];
  responseStatus: string | null;
}
export interface DailyPrice {
  date: string;
  open: number;
  high: number;
  low: number;
  last: number;
  volume: number;
}

//TODO - Make a generic APIResponse that uses a passed in <T> reference
export interface DailyPriceAPIResponse {
  results: DailyPrice[];
}

//TODO - Make a generic APIResponse that uses a passed in <T> reference
export interface AnnualDataAPIResponse {
  results: AnnualData[];
}

export interface AnnualData {
  incomeStatement: any;
  cashflowStatement: any;
  balanceSheet: any;
  startDate: string;
  endDate: string;
}
