function dealQueryParams(data) {
  let queryString = '';
  if (data && JSON.stringify(data) !== '{}' && typeof data === 'object') {
    for (let attr in data) {
      if (data.hasOwnProperty(attr)) {
        queryString = queryString ? `${queryString}&${attr}=${data[attr]}` : `${attr}=${data[attr]}`;
      }
    }
  }
  return queryString;
}

// 回调函数形式的JSONP
// function requestCallback(url) {
//   const script = document.createElement('script');
//   script.setAttribute('type', 'text/javascript');
//   script.src = url;
//   document.body.appendChild(script);
// }

// function handleResp(data) {
//   console.log(data);
// }
// request('http://example.com/ip?callback=handleResp');

/* 改进 */
function requestCallback2(url, data, fn) {
  const args = Array.prototype.slice.call(arguments);
  const script = document.createElement('script');
  if (typeof args[1] === 'function') {
    fn = args[1];
    data = null;
  }
  if (!url || !fn) {
    return;
  }
  let queryString = dealQueryParams(data);
  queryString = queryString ? `${queryString}&callback=${fn}` : `callback=${fn}`;
  url = `${url}?${queryString}`;
  script.setAttribute('type', 'text/javascript');
  script.src = url;
  document.body.appendChild(script);
}
requestCallback2('http://example.com/ip', {}, handleResp.name);

function request_promise(url, data) {
  return new Promise((reslove, reject) => {

  })
}

