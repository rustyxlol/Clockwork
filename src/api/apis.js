export const getURL = (date, endpoint) => {
  let month = date.getMonth() + 1;
  let day = date.getDate();
  let url = `https://api.wikimedia.org/feed/v1/wikipedia/en/onthisday/${endpoint}/${month}/${day}`;
  return url;
};
