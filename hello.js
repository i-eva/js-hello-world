/*  
Welcome, new coder. 
Enter your code on line 7 to print 'Hello, World!' 
to the console (the panel on the right)
*/

console.log('Hello, World!');

/*  
Next, PLAY! 
Modify your code on line 7 to try to accomplish the tasks listed below:

   1. Change the message that is printed. DONE
   2. Figure out what the parentheses do. Will the code work without them? NO
   3. Remove one or both quotation marks. Do we need to include both opening and closing quote marks? YES for text, NO for numbers Is there a difference between using a single or a double quote (' vs. ")? YES
   4. Remove the semi-colon, ;. Code still ran
   5. Print a number. (Bonus: Print two numbers added together). DONE
   6. Print multiple messages one after the other. DONE
   7. Print two messages on the same line. DONE
   8. Print a message that contains quote marks, such as Quoth the Raven "Nevermore". DONE for single quotes only
   9. Other. You choose! 
*/

//Chapter 8 doodling around: Q - how many items in each array?

//checking against my answers: 1 and 3

let classes = ["science, computer, art"];
console.log(classes.length);

let teachers = ["Jones", "Willoughby", "Rhodes"];
console.log(teachers.length);

//YAY OK now
//How can you change the classes array declaration to have 
//the same number of items as the teachers array?

//As they helpfully pointed out, it all has to do with where the 
//quotation marks end up

classes = ["science", "computer", "art"];
console.log(classes.length);

teachers = ["Jones", "Willoughby", "Rhodes"];
console.log(teachers.length);
