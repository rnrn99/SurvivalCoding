function updateHandler(toUpdate) {
  return Object
    .entries(toUpdate)
    .filter(([key, value]) => isTruthy(value))
    .reduce((result, [key, value]) => {
      result[key] = value;
      return result;
    }, {});
}

function isTruthy(data) {
  return !(data === null
    || data === undefined
    || data === false
    || data === ""
    || data === 0);
}

function fieldChecking(body, ...args) {
  return args
    .reduce((res, acc) => {
      res[acc] = isTruthy(body[acc]) ? body[acc] : null;
      return res;
    }, {});
}

export { updateHandler, isTruthy, fieldChecking }