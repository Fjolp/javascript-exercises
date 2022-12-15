const repeatString = function(str, num) {
    if (num < 0) return 'ERROR';
    let string = "";
    for (let i = 0; i < num; i++) {
        string += str;
      }
      return string;
};

repeatString('hey', 3);
repeatString('hey', 10);
repeatString('hey', 1);
repeatString('hey', 0);
repeatString('hey', -1);
repeatString('hey', Number);

// Do not edit below this line
module.exports = repeatString;
