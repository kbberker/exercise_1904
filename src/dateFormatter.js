export const format = (dateToFormatTimeMillis, systemDateTimeMillis) => {
  const dateToFormat = new Date(dateToFormatTimeMillis);
  const systemDate = new Date(systemDateTimeMillis);

  if (dateToFormat.toDateString() === systemDate.toDateString()) {
    return "TODAY";
  } else {
    // return dateToFormat.toLocaleString("en-GB");
    return Intl.DateTimeFormat("en-GB").format(dateToFormat);
  }
};
