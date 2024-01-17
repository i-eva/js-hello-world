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

//questions about sort: checking my answer 
// I think [23, 350, 47, 'Tech', 'coder'] is the correct answer

let charles = ['coder', 'Tech', 47, 23, 350];
charles.sort();
console.log(charles);

//Woot! got it!
//question: Which statement converts the string 
//str = 'LaunchCode students rock!' into the array 
//['LaunchCode', 'students', 'rock!']?
// I think str.split(" "); will split the string at each space

let strOne = 'LaunchCode students rock!';
let arrOne = [];
arrOne = strOne.split(" ");
console.log(arrOne);

//woo hoo! vindicated!!
//What is printed by the following program?
//my answer before running program:
//['chips', 'cucumbers', 'edamame']

let groceryBag = ['bananas', 'apples', 'edamame', 'chips', 'cucumbers', 'milk', 'cheese'];
let selectedItems = [];

selectedItems = groceryBag.slice(2, 5).sort();
console.log(selectedItems);

//YAY!! I can read code I just can't write it YET
//
// Question: What are the two dimensional indexes for "Jones"?

let school = [
    ["science", "computer", "art"],
    ["Jones", "Willoughby", "Rhodes"]
];

// My answer: the outer array index is 0, 1. 1 is the outer index for "Jones"
// The inner array index is 0, 1, 2. 0 is the inner index for "Jones"

//How would you add "dance" to the array at school[0]?

//I guess this question is looking at the first inner array
//this looks like a list of classes
//we want to "push" another class into outer array 0, inner array 3.
//multiArrayName[indexOfInnerArray].method();

let danceClass = 'dance';
school[0].push(danceClass);
console.log(school[0]);

//Whew that took some fiddling around

//How would you add "Holmes" to the array at school[1]?

let danceTeacher = 'Holmes';
school[1].push(danceTeacher);
console.log(school[1]);

//Easier the second time!

//trying something again...

cityName = "Vienna";
stateName = "Virginia";
location = cityName + ", " + stateName;

console.log(location.length);

//testing to see what gets counted as part of length 
