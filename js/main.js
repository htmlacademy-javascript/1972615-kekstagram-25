const getRandomInteger = (min, max) => Math.round(Math.random() * (max - min)) - min;
getRandomInteger(2, 10);

const checkStringLength = (string, number) => string <= number;
checkStringLength('djcn', 1234);
