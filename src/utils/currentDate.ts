type Fomat = "donts" | "numbers";

const setCurrentDate = (format: Fomat): string => {
  const newDate = new Date();
  const currentDate = newDate.toLocaleString().split(",")[0].toString();

  switch (format) {
    case "donts":
      return currentDate;

    case "numbers":
      return currentDate.replaceAll(".", "");
  }
};

export default setCurrentDate;
