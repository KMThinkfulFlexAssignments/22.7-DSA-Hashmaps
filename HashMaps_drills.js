'use strict';
const HashMap = require('./HashMap');
//1. Create a HashMap class
function main() {
  const LotR = new HashMap;
  LotR.MAX_LOAD_RATIO = 0.5;
  LotR.SIZE_RATIO = 3;

  LotR.set('Hobbit', 'Bilbo');
  LotR.set('Hobbit', 'Frodo');
  LotR.set('Wizard', 'Gandalf');
  LotR.set('Human', 'Aragorn');
  LotR.set('Elf', 'Legolas');
  LotR.set('Maiar', 'The Necromancer');
  LotR.set('Maiar', 'Sauron');
  LotR.set('RingBearer', 'Gollum');
  LotR.set('LadyOfLight', 'Galadriel');
  LotR.set('HalfElven', 'Arwen');
  LotR.set('Ent', 'Treebeard');

  return LotR;
}
console.log(main());

console.log('Maiar is', main().get('Maiar'));
console.log('Hobbit is', main().get('Hobbit'));
//These return Sauron and Frodo respectively because we a inserting the same key again with a different value.
//This will override the first value, so we do not see Bilbo or The Necromancer in the table.

//The capacity of the hash table after hasing all the items is 8.
//The hash table has a length of 9 so the final key, Ent, is undefined.

//2. WhatDoesThisDo
//Answer: This function creates two hash maps.  In each map the same key ('Hello World.') is inserted with two
//  different values.  In each case the second value will override the first.
//DO NOT run code prior to attempting to solve the problem
const WhatDoesThisDo = function(){
  let str1 = 'Hello World.';
  let str2 = 'Hello World.';
  let map1 = new HashMap();
  map1.set(str1,10);
  map1.set(str2,20);
  let map2 = new HashMap();
  let str3 = str1;
  let str4 = str2;
  map2.set(str3,20);
  map2.set(str4,10);

  console.log(map1.get(str1));
  console.log(map2.get(str3));
};

//3. Demonstrate understanding of Hash Maps
//use drawing tool

//4. Remove duplicates

//5. Any permutation a palindrome

//6. Anagram grouping

//7. Separate chaining