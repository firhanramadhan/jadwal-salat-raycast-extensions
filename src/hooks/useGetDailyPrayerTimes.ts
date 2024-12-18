import { usePromise } from "@raycast/utils";
import { getDailyPrayerTimes } from "../services";

export const useGetDailyPrayerTimes = () => {
  const date = new Date();
  const formattedDate = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;

  return usePromise(async () => {
    const res = await getDailyPrayerTimes(formattedDate);

    return res.data.timings;
  })
}