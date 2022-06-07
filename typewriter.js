/* This code takes in a sentence and display it as an animation
   This is possible by looping through the string and setting a 
   delay of 5oms on each char when we print the string 
*/


const sentence = "hello there from lighthouse labs";

let time = 0;
for (const char of sentence ) {
  setTimeout(() => {
    process.stdout.write(char + '\n');
  }, time)
 time += 50;
};
