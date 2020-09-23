// get Date string in YYYY-DD-MM format from date millis
const getDateStringFromMillis = (millis) => {
  let dateObj = new Date(millis);
  return `${dateObj.getFullYear()}-${
    dateObj.getMonth()+1 < 10 ? "0" : ""
  }${dateObj.getMonth()+1}-${dateObj.getDate() < 10 ? "0" : ""}${dateObj.getDate()}`;
};

const getMillisFromDateString = (dateString) => {
  return new Date(dateString).getTime();
};

export { getDateStringFromMillis, getMillisFromDateString };
