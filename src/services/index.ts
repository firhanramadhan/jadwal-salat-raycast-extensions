import { ALADHAN_API_URL, LOCATION } from '../constants';
import { GetDailyPrayerTimesResponse } from '../types';

export const getDailyPrayerTimes = async (date: string) => {
  try {
     const response = await fetch(`${ALADHAN_API_URL}/timings/${date}?latitude=${LOCATION.LATITUDE}&longitude=${LOCATION.LONGITUDE}&method=20`);
     const data = await response.json() as GetDailyPrayerTimesResponse;

     return data
  } catch (_) {
    throw new Error('Failed to fetch data');
  }
}