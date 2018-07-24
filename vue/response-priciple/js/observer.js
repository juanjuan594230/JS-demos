function observer(data) {
  if (!data || typeof data !== 'object') {
    return;
  }
  for (let attr in data) {
    Object.defineProperty(data, attr, {
      configurable: true,
      enumerable: true,
      get: function() {
        return data[attr];
      },
      set: function(newVal) {
        console.log(`${attr}值修改了`);
        data[attr] = newVal;
      }
    });
    // if (data.hasOwnProperty(attr)) {
    //   // if (typeof data[attr] === 'object') {
    //   //   observer(data[attr]);
    //   // }
    //   Object.defineProperty(data, attr, {
    //     configurable: true,
    //     enumerable: true,
    //     get: function() {
    //       return data[attr];
    //     },
    //     set: function(newVal) {
    //       console.log(`${attr}值修改了`)
    //       data[attr] = newVal;
    //     }
    //   });
    // }
  }
}