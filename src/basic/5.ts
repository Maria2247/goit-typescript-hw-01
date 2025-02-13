enum DayOfWeek {
  Monday = "Monday",
  Tuesday = "Tuesday",
  Wednesday = "Wednesday",
  Thursday = "Thursday",
  Friday = "Friday",
  Saturday = "Saturday",
  Sunday = "Sunday",
}

export const isWeekend = (day: string): boolean => {
  if (day === DayOfWeek.Saturday || day === DayOfWeek.Sunday) {
    return false;
  } else {
    return true;
  }
};
