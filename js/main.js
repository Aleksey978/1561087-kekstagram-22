let checkLineLength = function (line, maxLength) {
  if (line.length > maxLength) {
    return false;
  }
  return true;
};

checkLineLength('привет медвед', 10);

const NAMES = [
  'Иван',
  'Алексей',
  'Мария',
  'Александра',
  'Виктор',
  'Юлия',
  'Олег',
  'Илья',
];
const COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const MAX_ID = 25;
const MIN_LIKES = 15;
const MAX_LIKES = 200;

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const createUrl = (photoNum) => {
  return 'photos/' + photoNum + '.jpg';
}

const createPhotoDescription = (photoId) => {
  const randomNameIndex = getRandomInt(0, NAMES.length - 1);
  const randomCommentsIndex = getRandomInt(0, COMMENTS.length - 1);
  const randomId = getRandomInt(0, photos.length - 1);

  return {
    name: NAMES[randomNameIndex],
    url: createUrl(photoId),
    likes: getRandomInt(MIN_LIKES, MAX_LIKES),
    comment: COMMENTS[randomCommentsIndex],
    id: randomId,
  };
};

let photos = [];
for (let i = 1; i < MAX_ID+1; i++) {
  photos.push(createPhotoDescription(i));
}

console.log(photos);

