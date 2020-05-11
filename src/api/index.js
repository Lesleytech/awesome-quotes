import axios from 'axios';

export const fetchQuotes = async () => {
  const quotes = localStorage.getItem('quotes');
  if (quotes) {
    return JSON.parse(quotes);
  } else {
    const url = 'https://type.fit/api/quotes';

    try {
      const { data: quotes } = await axios.get(url);

      localStorage.setItem('quotes', JSON.stringify(quotes));

      return quotes;
    } catch (error) {
      console.log(error);
    }
  }
};
