import { FIVE_PRAYERS_KEY } from "../types";

export const ALADHAN_API_URL = 'https://api.aladhan.com/v1';
export const LOCATION = {
  LATITUDE: -6.247266,
  LONGITUDE: 106.711914
}
export const PRAYER_NAMES: {
  [key in FIVE_PRAYERS_KEY]: string
} = {
  Fajr: 'Subuh',
  Dhuhr: 'Dzuhur',
  Asr: 'Ashar',
  Maghrib: 'Maghrib',
  Isha: 'Isya'
}