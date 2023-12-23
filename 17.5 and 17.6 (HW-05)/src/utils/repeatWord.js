export const repeatWord = (word, count) => {
  if (typeof word !== "string" || typeof count !== "number" || count < 1) {
    return "Некорректные входные данные";
  }
  if( count===0){
    return 'Ноль не доступен для ввода'
  }

  const repeatedWords = Array.from(
    { length: count },
    (_, index) => `${word}${index + 1}`
  );
  const result = repeatedWords.join(", ");
  return result;
};
repeatWord("Слово", 2);