let isRainy = true;
let isWindy = true;


if (isRainy === true && isWindy === true) {
  console.log('Wow, careful outside, there is a bad weather !')
}
else if (isRainy === true && isWindy === false) {
  console.log('Do not forget your umbralla, it is raining !')
}
else if (isRainy === false && isWindy === true) {
  console.log('Take your coat, it is windy !')
}
else {
  console.log('What a beautiful sky, i can go outside naked !')
}