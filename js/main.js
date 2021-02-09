let checkLineLength = function (line, maxLength) {
  if (line.length > maxLength) {
    return false;
  }
  return true;
};

checkLineLength('привет медвед', 10);
