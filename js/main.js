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

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const createPhotoDescription = () => {
  const randomNameIndex = _.random(0, NAMES.length - 1);
  const randomCommentsIndex = _.random(0, COMMENTS.length - 1);

  return {
    name: NAMES[randomNameIndex],
    url: 'photos/' + getRandomInt(1, 25) + '.jpg',
    description: '',
    likes: getRandomInt(15, 200),
    comment: COMMENTS[randomCommentsIndex],
  };
};

console.log(
  createPhotoDescription()
);
