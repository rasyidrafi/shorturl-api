const renderParam = (param = {}, baseUrl) => {
  let url = baseUrl;
  let first = true;
  for (let key in param) {
    if (first) {
      url += `?${key}=${param[key]}`;
      first = false;
    } else {
      url += `&${key}=${param[key]}`;
    }
  }
  return url;
};

const isUrl = (url) => {
  if (
    !/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/.test(url)
  ) {
    return false;
  }

  return true;
}

module.exports = {
  renderParam,
  isUrl
}