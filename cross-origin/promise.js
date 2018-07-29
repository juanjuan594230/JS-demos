/* 调用形式 */
/* pjsonp(url, params, options) */
const enc = encodeURIComponent
let uid = 0;
const defaultOptions = {
  prefix: '__jp',
  timeout: 60000,
  param: 'callback'
}

function isEmptyObj(obj) {
  return JSON.stringify(obj) === '{}';
}

function doNothing() {}

function pjsonp(url, params = {}, options = {}) {
  if (!options) {
    options = params;
    params = {};
  }
  if (!options) options = {};

  options = Object.assign({}, defaultOptions, options);
  const callbackName = options.name || options.prefix + uid++;

  let timer,
      script,
      target;
  
  // remove a jsonp request, the callback function and the script tag
  // this is important for performance problems caused by closure(闭包)
  function clean() {
    script.parentNode && script.parentNode.removeChild(script)
    timer && clearTimeout(timer)
    window[callbackName] = doNothing // use nothing function instead of null to avoid crash
  }

  // 拼接url
  url += url.indexOf('?') > 0 ? '' : '?';
  for (let attr in params) {
    let value = param[key] || '';
    url += `&${enc(key)}=${enc(value)}`
  }
  url += `&${options.param}=${enc(callbackName)}`;
  url = url.replace('?&', '?');


  // insert the script to DOM and here we go!
  target = document.body;
  script = document.createElement('script');
  script.src = url;
  target.appendChild(script);

  /**
   * returns a Promise to tell user if this request succeeded or failed
   * as less code as possible here for clarity
   */
  return new Promise((reslove, reject) => {
    /**
     * bind a function on window[id] so the scripts arrived, this function could be triggered
     * data would be a JSON object from the server
     */
    window[callbackName] = function(data) {
      clean();
      reslove(data);
    }

    if (options.timeout) {
      timer = setTimeout(() => {
        clean();
        reject('[Error] Time out.')
      }, options.timeout);
    }
  })
}

pjsonp('http://example.com/ip');


// data为可选，url & options为必须
function _pjsonp(url, data = {}, options = {}) {
  
  if (isEmptyObj(options) && !isEmptyObj(data)) {
    options = data;
    data = {};
  }

  options = Object.assign({}, defaultOptions, options);
  const callbackName = options.name || options.prefix + uid++;

  function clean() {
    script.parentNode && script.parentNode.removeChild(script)
    timer && clearTimeout(timer)
    window[callbackName] = doNothing // use nothing function instead of null to avoid crash
  }

  let timer,
      script,
      target;

  // 拼接url
  url += url.indexOf('?') > 0 ? '' : '?';
  for (let attr in data) {
    if (data.hasOwnProperty(attr)) {
      url += `&${enc(attr)}=${enc(data[attr])}`;
    }
  }
  url += `&${options.param}=${enc(callbackName)}`;
  url = url.replace('?&', '?');

  // create script 
  target = document.body;
  script = document.createElement('script');
  script.setAttribute('type', 'text/javascript');
  script.src = url;
  target.appendChild(script);

  const promise = new Promise((resolve, reject) => {
    window[callbackName] = function(data) {
      clean();
      resolve(data);
    }

    if (options.timeout) {
      clean();
      timer = setTimeout(() => {
        reject('[Error] Time out.');
      }, options.timeout);
    }

    script.onerror = function() {
      clean();
      reject('load error');
    }
  });
  
  return promise;
}