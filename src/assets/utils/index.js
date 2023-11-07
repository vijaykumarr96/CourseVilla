export const truncateText = (text = "", count = 22, separator = " ") => {
  if (text?.length < count) {
    return text;
  } else {
    return truncate(text, { length: count, separator: separator });
  }
};
