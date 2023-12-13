function longest(s1, s2) {
    return (s1+s2).split('').filter(function (value, index, self) {
         return self.indexOf(value) === index;
     }).sort().join('')
 }