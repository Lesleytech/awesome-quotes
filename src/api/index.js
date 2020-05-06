import axios from "axios";

export const fetchQuotes = async () => {
  const url = "https://type.fit/api/quotes";

  try {
    const { data: quotes } = await axios.get(url);
    return quotes;
  } catch (error) {
    console.log(error);
  }
};
