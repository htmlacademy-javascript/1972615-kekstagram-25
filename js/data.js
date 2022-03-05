import { getRandomArrayElement } from './util';
import { getRandomPositiveInteger } from './util';
const IMAGES_COUNT = 25;

const COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
];

const DESCRIPTIONS = [
  'desk-1',
  'desk-2',
  'desk-3',
  'desk-4',
  'desk-5',
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

const countLike = {
  MIN: 15,
  MAX: 200,
};

const getUrl = (url) => `photos/${url}.jpg`;

const getCommentAvatar = (id) => `img/avatar-${id}.svg`;


const creatImage = (index) => ({
  id: `image-${index}`,
  url: getUrl(getRandomPositiveInteger(0, IMAGES_COUNT)),
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomPositiveInteger(countLike.MIN, countLike.MAX),
  comments: [
    {
      id: `comment-${index}`,
      avatar: getCommentAvatar(index),
      message: getRandomArrayElement(COMMENTS),
      name: getRandomArrayElement(NAMES)
    }
  ]
});

const images = Array.from({length: IMAGES_COUNT}).map((image, index) => (image = creatImage(index)));
export {images};
