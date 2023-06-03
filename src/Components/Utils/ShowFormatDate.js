const ShowFormatDate = (value) => {
  const date = new Date(value);

  const options = {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  };

  // return date.toLocaleDateString("en-GB", options);
  return date.toLocaleDateString("en-US", options);
}

export default ShowFormatDate;