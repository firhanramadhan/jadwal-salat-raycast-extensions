export type Response<T> = {
  code: number;
  status: string;
  data: T;
}

export type Timings = {
  Fajr: string;
  Sunrise: string;
  Dhuhr: string;
  Asr: string;
  Sunset: string;
  Maghrib: string;
  Isha: string;
  Imsak: string;
  Midnight: string;
  Firstthird: string;
  Lastthird: string;
}


export type FIVE_PRAYERS_KEY = keyof Pick<Timings, 'Fajr' | 'Dhuhr' | 'Asr' | 'Maghrib' | 'Isha'>

export type GetDailyPrayerTimesResponse = Response<Timings>