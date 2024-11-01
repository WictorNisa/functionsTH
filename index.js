// Level Easy

// Segment 1: Functions with No Parameters and No Return Values
// 1. Basic Greeting
// const greet = () => {
//   console.log("Hello, World!");
// };

// greet();

// 2. Favorite Number

// const favouriteNumber = () => {
//     console.log("I dont have a favourite number, maybe 5?")
// }

// favouriteNumber();

// 3. Magic Eight Ball
// let eightBallArray = ["Yes", "No", "Maybe", "Ask again later"];
// const magicEightBall = () => {
//   let randomAnswer = eightBallArray[Math.floor(Math.random() * eightBallArray.length)]
//   console.log(randomAnswer);
// };

// magicEightBall();

// 4. Current Year
// const getCurrentYear = () => {
//     const d = new Date();
//     console.log(d)
// }
// getCurrentYear();

// 5. Random Joke
// const jokes = [
//   "Why don't scientists trust atoms? Because they make up everything!",
//   "What do you get if you cross a snowman and a vampire? Frostbite!",
//   "How does a penguin build its house? Igloos it together!",
//   "Why did the math book look sad? Because it had too many problems.",
//   "Why can't you give Elsa a balloon? Because she'll let it go!",
// ];
// const tellJoke = () => {
//   const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
//   console.log(randomJoke);
// };

// tellJoke();

// Segment 2: Functions with Parameters (One or More)

// 6. Personalized Greeting
// const personalGreeting = (str) => {
//   console.log(`Hello, ${str}`);
// };

// personalGreeting("Wictor")

// 7. Sum of Two Numbers
// const add = (a, b) => {
//   console.log(a + b);
// };
// add(5, 10);

// 8. Age in Months
// const ageInMonths = (age) => {
//     const ageFormatted = age * 12;
//     console.log(ageFormatted)
// }

// ageInMonths(28)

// 9. Temperature Converter
// const celsiusToFahrenheit = (cel) => {
//   console.log(`${cel} Celsius is equal to ${(cel * 9) / 5 + 32} Fahrenheit`);
// };

// celsiusToFahrenheit(30)

// 10. Full Name
// const getFullName = (firstName, lastName) => {
//   console.log(`Greetings, ${firstName} ${lastName}`);
// };
// getFullName("Wictor", "Niså");

// Segment 3: Functions with Parameters and Return Values

// 11. Area of a Rectangle
// const calculateArea = (width, length) => {
//   const area = width * length;
//   console.log(`The area of the rectangle is ${area}`);
//   return area;
// };

// calculateArea(2, 5);

// 12. Find Maximum

// const findMax = (num1, num2) => {
//   if (num1 > num2) {
//     console.log(`${num1} is bigger than ${num2}`);
//   } else {
//     console.log(`${num2} is bigger than ${num1}`);
//   }
// };

// findMax(1, 2);

// 13. Count Vowels

// const countVowels = (str) => {
//   const vowels = ["a", "e", "i", "o", "u"];
//   const strArray = str.toLowerCase().split("");
//   let count = 0;

//   strArray.forEach(char => {
//     if(vowels.includes(char)){
//         count ++;
//     }
//   });
// return count
//   console.log(`Number of vowels: ${count}`)
// };

// countVowels('babbabooie')

// 14. Discount Price
// const calculateDiscount = (price, discount) => {
//     const discountDecimal = discount / 100
//     const discountedPrice = price * discountDecimal
//     const finalDiscount = price - discountedPrice
//     console.log(finalDiscount)
//     return finalDiscount

// }
// calculateDiscount(150, 25)

// 15. Reverse String
// const reverseString = (str) => {
//   const reversedStr = [...str].reverse().join("")
//   console.log(reversedStr)
//   return reversedStr
// };
// reverseString('Babbaboiee')

// Level Intermediate

// const isPalindrome = (str) => {
//   str.toLowerCase();
//   const strRev = [...str].reverse().join("");

//   if (str === strRev) {
//     return true;
//   } else {
//     return false;
//   }
// };

// console.log(isPalindrome("wictor"));

// 2. FizzBuzz
// const fizzBuzz = (num) => {
//   if (num % 3 === 0 && num % 5 === 0) {
//     return "FizzBuzz";
//   } else if (num % 3 === 0) {
//     return "Fizz";
//   } else if (num % 5 === 0) {
//     return "Buzz";
//   } else {
//     return num;
//   }
// };

// console.log(fizzBuzz(10));

// 4.Longest Word
// const findLongestWord = (sentence) => {
//   let longestWord = "";
//   const splitSentence = sentence.split(" ");
//   splitSentence.forEach((word) => {
//     if (word.length > longestWord.length) {
//       longestWord = word
//     }

//   });
//   return longestWord
// };

// console.log(findLongestWord("apa bussen kossan apotek världenslängstaord"));

// 5. Array Average

// const calculateAverage = (arr) => {
//   let sum = 0;
//   arr.forEach((num) => {
//     sum += num
//   });
//   const average = Math.floor(sum / arr.length);
//   return average;
// };

// console.log(calculateAverage([-10, 0, 10, 20]))

// 6. Remove Duplicates
// const mixedArray = [1, 2, 3, 2, 4, 1, 5, 3, 6, 7, 8, 5];
// const removeDuplicates = (arr) => {
//   const formattedArray = [];
//   arr.forEach((num) => {
//     if (!formattedArray.includes(num)) {
//       formattedArray.push(num);
//     }
//   });
//   return formattedArray;
// };
// console.log(removeDuplicates(mixedArray));

// 7. Capitalize First Letter

// const capitalizeFirstLetter = (str) => {
//   if (str === "") {
//     return str;
//   }
//   let firstLetter = str[0];
//   firstLetter = firstLetter.toUpperCase()
//   const subStr = str.substring(1, str.length);
//   const capitalizedStr = firstLetter + subStr;
//   return capitalizedStr
// };

// console.log(capitalizeFirstLetter("kalle karlsson"));

// 8. Count Occurrences
// const countOccurrences = (str, char) => {
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === char) {
//       count++;
//     }
//   }

//   return count;
// };
// console.log(countOccurrences("wictor", "w"));

// 9. Merge Arrays
// const mergeArrays = (arr1, arr2) => {
//   let mergedArray = [];
//   arr1.forEach((value) => {
//     if (!mergedArray.includes(value)) {
//       mergedArray.push(value);
//     }
//   });
//   arr2.forEach((value) => {
//     if (!mergedArray.includes(value)) {
//       mergedArray.push(value);
//     }
//   });

//   return mergedArray;
// };

// console.log(mergeArrays([1, 2, 3, 4, 5], [4, 5, 6, 7, 8]));

// 10. Random Password Generator

// const generatePassword = (length) => {
//   const upperCaseSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//   const lowerCaseSet = "abcdefghijklmnopqrstuvwxyz";
//   const numbers = "0123456789";
//   const combinedSet = upperCaseSet + lowerCaseSet + numbers;

//   let passwordStr = "";
//   for (let i = 0; i < length; i++) {
//     passwordStr += combinedSet.charAt(
//       Math.floor(Math.random() * combinedSet.length)
//     );
//   }
//   return passwordStr
// };

// console.log(generatePassword(8));

// 11. Character Frequency
// const charFrequency = (str) => {
//   const charCount = {};

//   for (let char of str) {
//     if (charCount[char]) {
//       charCount[char] += 1;
//     } else {
//       charCount[char] = 1;
//     }
//   }

//   return charCount
// };

// console.log(charFrequency("anna"));

// 12. Intersection of Arrays
// const array1 = [1, 2, 3, 4, 5, 6];
// const array2 = [4, 5, 6, 7, 8, 9];
// const arrayIntersection = (arr1, arr2) => {
//   const mixedArray = [];
//   arr1.forEach((value) => {
//     if (arr2.includes(value) && !mixedArray.includes(value)) {
//       mixedArray.push(value);
//     }
//   });
//   return mixedArray;
// };

// console.log(arrayIntersection(array1, array2));

// 13. String Reversal
// const reverseWords = (str) => {
//   const splitStr = str.split(" ");
//   const reversedStr = splitStr.reverse();
//   return reversedStr.join(" ");
// };

// console.log(reverseWords("Hello World"));

// 14. Find Minimum

// const findMin = (arr) => {
//   let smallestNumber = arr[0];
//   arr.forEach((num) => {
//     if (num < smallestNumber) {
//       smallestNumber = num;
//     }
//   });

//   return smallestNumber;
// };

// console.log(findMin([3, -2, 4, 1, 5, 9, 2]))



//Superbra övningar, diggar verkligen konceptet att nöta tills något fastnar