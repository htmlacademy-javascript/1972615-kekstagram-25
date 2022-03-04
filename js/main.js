const getRandomInteger = (min, max) => Math.round(Math.random() * (max - min)) - min;
getRandomInteger(2, 10);

const checkStringLength = (string, number) => string <= number;
checkStringLength('djcn', 1234);


const getRandomPositiveInteger = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (elements) =>  elements[getRandomPositiveInteger(0, elements.length - 1)];


let id = 1;

const getId = () =>  id++;


let urlCount = 1;

const getUrl = () =>  `photos/${urlCount++}.jpg`;


let commentId = 1;

const getCommentId = () => commentId++;

let commentAvatarCount = 1;

const getCommentAvatar = () => `img/avatar-${commentAvatarCount++}.svg`;


const COMMENTS_MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
];

const DESCRIPTIONS = [
  'desck1',
  'desk2',
  'desk3',
  'desk4',
  'desk5',
];

const NAMES = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон',
];


const creatImage = () => ({
  id: getId(),
  url: getUrl(),
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomPositiveInteger(15, 200),
  comments: [
    {
      id: getCommentId(),
      avatar: getCommentAvatar(),
      message: getRandomArrayElement(COMMENTS_MESSAGES),
      name: getRandomArrayElement(NAMES)
    }
  ]

});

const IMAGES_COUNT = 25;

const IMAGES = Array.from({length: IMAGES_COUNT}, creatImage);
console.log(IMAGES[0].comments);

