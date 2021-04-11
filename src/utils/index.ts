export const getDateDay = (date = new Date()) => {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
};

export const getOffsetedDay = (offset: number) => {
  return new Date(
    new Date().getFullYear(),
    new Date().getMonth(),
    new Date().getDate() + offset,
  );
};

export const getRandomPlaceholder = () => {
  const actions = [
    'call',
    'read',
    'dress',
    'buy',
    'ring',
    'hop',
    'skip',
    'jump',
    'look',
    'rob',
    'find',
    'fly',
    'go',
    'ask',
    'raise',
    'search',
  ];
  const bridges = [
    'the',
    'a',
    'an',
    'my',
    'as',
    'by',
    'to',
    'in',
    'on',
    'with',
  ];
  const targets = [
    'dog',
    'doctor',
    'store',
    'dance',
    'jig',
    'friend',
    'enemy',
    'business',
    'bull',
    'Mom',
    'Dad',
  ];

  const capitalizeFirstLetter = function (s: string) {
    return s.charAt(0).toUpperCase() + s.slice(1);
  };

  const randomWord = (list: string[]) => {
    return list[Math.floor(Math.random() * list.length)];
  };

  return `${capitalizeFirstLetter(randomWord(actions))} ${randomWord(
    bridges,
  )} ${randomWord(targets)}`;
};

export const getCurrentMonthDays = () => {
  const now = new Date();

  return new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
};

export const getFirstDayOffset = () => {
  const now = new Date();

  return new Date(now.getFullYear(), now.getMonth(), 0).getDay();
};
