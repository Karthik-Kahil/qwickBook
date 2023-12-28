function DateFormatter(dateString) {
  const date = new Date(dateString);
  const formattedDate = date.toLocaleString("en-US", {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return formattedDate;
}

export default DateFormatter;
