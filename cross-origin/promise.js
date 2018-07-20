/* 调用形式 */
/* pjsonp(url, params, options) */
const enc = encodeURIComponent
let uid = 0;
const defaultOptions = {
  prefix: '__jp',
  timeout: 60000,
  param: 'callback'
}

function doNothing() {}

function pjsonp(url, params = {}, options) {
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