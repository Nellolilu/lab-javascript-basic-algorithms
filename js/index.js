// Iteration 1: Names and Input

// Iteration 2: Conditionals

// Iteration 3: Loops

// bonus 1.2 ;
let threeParagraphs = `frst par lorem ispum
secnd par  lorem ispum
thrd Par lorem ispum`;
console.log(threeParagraphs);
function NumberOf() {
  let words = threeParagraphs.match(/\w+/g).length;
  let lines = threeParagraphs.split(/\r\n|\r|\n/).length;

  let characters = threeParagraphs.length;

  console.log("Number of words:", words);
  console.log("Number of lines:", lines);
  console.log("Number of characters:", characters);
}
NumberOf();
