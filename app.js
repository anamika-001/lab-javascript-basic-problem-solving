// Important Note - No Built-in functions to be used
 

 

// Progression 1: Names and Input

// 1.1 Create a variable `ProGrad-1` with the driver's name.
// 1.2 Print `"The driver's name is XXXX"`.
// 1.3 Create a variable `ProGrad-2` with the navigator's name.
// 1.4 Print `"The navigator's name is YYYY"`.
let prograd_1="anamika";
 console.log("the drive name is "+prograd_1);
 let prograd_2="gupta";
 console.log("the navigator's is "+prograd_2);
 let n_1=prograd_1.length;
 let n_2=prograd_2.length;

 //console.log(n_1);
 //console.log(n_2);

// Progression 2: Control Statements - 1
// 2.1. Depending on which name is longer, print:
// - The driver has the longest name, it has XX characters. or
// - It seems that the navigator has the longest name, it has XX characters. or
// - Wow, you both have equally long names, XX characters!.
if(n_1==n_2)
{
    console.log("we both have same number "+n_1);
}else if(n_1>n_2){
    console.log("n_1 is greater "+n_1);
}
else{
    console.log("n_2 is greater "+n_2);
}


// 2.2. Check if the string contains vowels or not.
// - If it contains vowels, print the number of name, and also print the vowel letters along with the vowel characters. or
// - print no vowels
var x='ProGrad';
var count=0;
for(let i=0;i<x.length;i++){

    if(x[i]=='A'||x[i]=='E'||x[i]=="I"||x[i]=="O"||x[i]=="U"||x[i]=="a"||x[i]=="e"||x[i]=="i"|x[i]=="o"|x[i]=="u"){
       console.log(x[i]);
      count++;
    }
   
    if(count==0){
        
        console.log("no vowel");

    }
    else
        console.log(count);
    
}

// 2.3. Check if the string contains uppercase and lowercase characters Xx
// - Print the number of upper case characters
// - Print the number of lower case characters

var x="alPHAbet"
var count_U=0;
var count_L=0;
for(let i=0;i<x.length;i++){
    if(x[i]>='a'  && x[i]<='z'){
        count_L=count_L+1;
       }
    else{
       
       count_U=count_U+1;
       
    }
    console.log("lower case count :" + count_L);
    console.log("upper case count :" + count_U);
}

// Progression 3: Control Statements - 2
// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "ProGrad"
    let char1="Prograd";
    var i=0;
    while (char1[i]!=0) {

        
        console.log(char1[i]+" ");
        i++;
 }
// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "darGorP"
let char2="anamika";


    for(let i=char2.length;i=>1;i++){
        console.log(char2[i]+" ");
    }

// 3.3 Merge both the characters such that driver is followed by Navigator like "ProGrad FACEPrep"
// - Now bring the FACEPrep to the start and send ProGrad to the back like "FACEPrep ProGrad"

// 3.3 Depending on the lexicographic order of the strings, print:
// - The driver's name goes first.
// - Yo, the navigator goes first definitely.
// - What?! You both have the same name?

//Story time lab?

// Bonus Time!
// Bonus 1:
// Go to lorem ipsum generator and:
// Generate 3 paragraphs. Store the text in a variable type of string.
// Make your program count the number of words in the string.
// Make your program count the number of times the Latin word et appears.
// Bonus 2:
// Create a new variable phraseToCheck and have it contain some string value. Write a code that will check if the value we assigned to this variable is a Palindrome. Here are some examples of palindromes:

// "A man, a plan, a canal, Panama!"
// "Amor, Roma"
// "race car"
// "stack cats"
// "step on no pets"
// "taco cat"
// "put it up"
// "Was it a car or a cat I saw?" and "No 'x' in Nixon".

// Hint: If you use Google to help you to find solution to this iteration, you might run into some solutions that use advanced string or array methods (such as join(), reverse(), etc.). However, try to apply the knowledge you currently have since you can build pretty nice solution with just using for loop, if-else statements with some break and continue... Just sayin' 
