/* var string = 'These are some phone numbers 917-555-1234. Also, you can call me at 646.555.1234 and of course I am always reachable at (212)867-5309';
// 将匹配到所有的字符 g表示全局模式，会应用于所有的字符，而非发现第一个匹配项时立即停止， 返回所有匹配项组成的数组
var expression1 = /\w/g;
// 没有加g，表示发现第一个匹配项时，停止匹配  ["T", index: 0, input: "These are some phone numbers 917-555-1234. Also, y… of course I am always reachable at (212)867-5309"]
// var expression1 = /\w/;
var expression2 = /\w\w\w/g;
// 匹配连续的两个空格
var expression3 = /\s\s/g;

// 两种调用方式相同 返回一个数组
// const match1 = expression.exec(string);
const match1 = string.match(expression1);
const match2 = string.match(expression2);
const match3 = string.match(expression3);
console.log(match1); 
// ["The", "are", "som", "pho", "num", "ber", "917", "555", "123", "Als", "you", "can", "cal", "646", "555", "123", "and", "cou", "rse", "alw", "ays", "rea", "cha", "ble", "212", "867", "530"]
// 正则：匹配一个连续串的规则 number可以匹配到num、ber
console.log(match2);
console.log(match3); // null */


/* 需求：找出colors、colours、colour */
/* var str1 = 'The colors of the rainbow have many colours and the rainbow does not have a single colour';
var exp1 = /colou?rs?/g;
console.log(str1.match(exp1)); // ["colors", "colours", "colour"] */

/* 需求：找5个字母组成的单词 */
const str2 = 'These are some phone numbers 917-555-1234. Also, you can call me at 646.555.1234 and of course I am always reachable at (212)867-5309';
const exp2 = /\w{5}/g;
console.log(str2.match(exp2));  // ["These", "phone", "numbe", "cours", "alway", "reach"]
// 上述正则表达式找到的是5个连续的字母，而非五个字母组成的单词
const exp3 = /\w{5}\s{1}/g;
console.log(str2.match(exp3));  // ["These ", "phone ", "mbers ", "ourse ", "lways ", "hable "]
// exp3 找到的串包含了mbers，也是不正确的
const exp4 = /\b\w{5}\b/g;
console.log(str2.match(exp4));  // ["These", "phone"]   /b表示单词结界符
// 找刚才出现的电话号码 917-555-1234
const exp5 = /\d{3}-\d{3}-\d{3}/g;
console.log(str2.match(exp5));  // ["917-555-123"]
console.log(str2.match(/\w+/g));  // ["These", "are", "some", "phone", "numbers", "917", "555", "1234", "Also", "you", "can", "call", "me", "at", "646", "555", "1234", "and", "of", "course", "I", "am", "always", "reachable", "at", "212", "867", "5309"]
console.log(str2.match(/^\w+/g)); // ["These"]  匹配每一行的开头
console.log(str2.match(/\w+$/g)); // ['5309']  匹配每一行的结束


/* [] 表示逻辑|| [abc]表示 a || b || c  [-.] 表示- || . (.在[]中就表示.,若在外面想表达.的意思，需要使用转译符\.)*/
const str3 = "The lynk is quite a link don't you think? l nk l(nk";
/* 找到 lynk  link  l nk   l(nk */
console.log(str3.match(/l[yi (]nk/g)); // ["lynk", "link", "l nk", "l(nk"]

/* 匹配所有可能的电话号码 */
const str4 = `These are some phone numbers 915-134-3122. Also,
you can call me at 643.123.1333 and of course,
I'm always reachable at (212)867-5509`
// 在[]中使用特殊字符不需要转义，但在外面使用需要转义 \(? (0次或1次
console.log(str4.match(/\(?\d{3}[-.)]\d{3}[-.]\d{4}/g));  // ["915-134-3122", "643.123.1333", "(212)867-5509"]

// []特殊语法  [^ab]表示不是a || b ，是取反的意思
// [a-z] 表示从字符a到z  [-.]表示-或者.
// ()也可以表示或 (a|b)

/* 匹配所有的邮箱 */
const str5 = 'gaoyaqi411@126.com dyumc@google.net sam@sjtu.edu';
// 任何一个以word开头的一个或多个 \w
// @ \w+@
// 紧接着，一个或多个word  \w+@\w+
// .  \w+@\w+\.
// 接着com net edu
console.log(str5.match(/\w+@\w+\.(com|net|edu)/g));  // ["gaoyaqi411@126.com", "dyumc@google.net", "sam@sjtu.edu"]


/* 分组捕获 */
const str6 = `These are some phone numbers 915-134-3122. Also,
you can call me at 643.123.1333 and of course,
I'm always reachable at (212)867-5509`
