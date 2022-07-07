// You are visiting a farm that has a single row of fruit trees arranged from left to right. The trees are represented by an integer array fruits where fruits[i] is the type of fruit the ith tree produces.

// You want to collect as much fruit as possible. However, the owner has some strict rules that you must follow:

// You only have two baskets, and each basket can only hold a single type of fruit. There is no limit on the amount of fruit each basket can hold.
// Starting from any tree of your choice, you must pick exactly one fruit from every tree (including the start tree) while moving to the right. The picked fruits must fit in one of your baskets.
// Once you reach a tree with fruit that cannot fit in your baskets, you must stop.
// Given the integer array fruits, return the maximum number of fruits you can pick.

// Example 1:

// Input: fruits = [1,2,1]
// Output: 3
// Explanation: We can pick from all 3 trees.
// Example 2:

// Input: fruits = [0,1,2,2]
// Output: 3
// Explanation: We can pick from trees [1,2,2].
// If we had started at the first tree, we would only pick from trees [0,1].
// Example 3:

// Input: fruits = [1,2,3,2,2]
// Output: 4
// Explanation: We can pick from trees [2,3,2,2].
// If we had started at the first tree, we would only pick from trees [1,2].


var tree = [1,2,1];
var tree2 = [0,1,2,2];
var tree3 = [1,2,3,2,2];

var totalFruit = function(tree) {
    let result = 0;
    let basket = new Map();

    // Pointers
    // l (left) - Start index of the current sub-array of trees(two types)
    // m (middle) - Index of the tree with the latest type of fruit
    // r (right) - Index of the current tree

    for (l = 0, m = 0, r = 0; r < tree.length; r++){

        // Adding every unique type of fruit to the basket
        basket.has(tree[r]) || basket.set(tree[r], 1);

        // Basket overflowing
        if(basket.size > 2){

            // Summarize 
            result = Math.max(result, r - l);

            // Empty the basket and put previous and current types of fruits there
            basket.clear();
            basket.set(tree[l = m], 1);
            basket.set(tree[r], 1);
        }

        // Keep in mind the tree where we meet the latest type of fruit
        if(tree[m] !== tree[r]){
            m = r;
        }
    }

    // Final result
    return Math.max(result, r - l);
};

console.log(totalFruit(tree));
// Output: 3

console.log(totalFruit(tree2));
// Output: 3

console.log(totalFruit(tree3));
// Output:4