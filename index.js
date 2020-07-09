const names = ["Lisa", "Kaitlin", "Jan"];

function writeCards(names, event) {
for (let i = 0; i < names.length; i++) {
  console.log("Thank you, ${name} for the wonderful ${event} gift!")
}
return names
}

function countDown(num) {
  while (num > 0) {
  console.log(num--);
}

}
