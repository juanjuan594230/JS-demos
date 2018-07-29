const preloadImage = function (path) {
    return new Promise((resolve, reject) => {
        var image = new Image();
        image.onload = resolve;
        image.onerror = reject;
        image.src = path;
    })
}

const path = 'http://img.zcool.cn/community/0117e2571b8b246ac72538120dd8a4.jpg@1280w_1l_2o_100sh.jpg'
preloadImage(path).then(() => {
    console.log('hello');
})