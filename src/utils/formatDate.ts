// Function to display date in "Day Month" format
export const formatDateDM = (date: Date) => {
  const dateArr = date.toDateString().split(' ');
  // 11 May
  return dateArr[2] + ' ' + dateArr[1];
};

// Function to display date in "Day Month, Year" format
export const formatDateDMY = (date: Date) => {
  const dateArray = date.toDateString().split(' ');
  // 11 May, 2021
  return `${dateArray[2]} ${dateArray[1]}, ${dateArray[3]}`;
};
