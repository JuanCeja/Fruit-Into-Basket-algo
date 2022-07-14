// You are given an array of integers numbers and two integers left and right. You task is to calculate a boolean array result, where result[i] = true if there exists an integer x, such that numbers[i] = (i + 1) * x and left ≤ x ≤ right. Otherwise, result[i] should be set to false.

// Example

// For numbers = [8, 5, 6, 16, 5], left = 1, and right = 3, the output should be solution(numbers, left, right) = [false, false, true, false, true].

// For numbers[0] = 8, we need to find a value of x such that 1 * x = 8, but the only value that would work is x = 8 which doesn't satisfy the boundaries 1 ≤ x ≤ 3, so result[0] = false.
// For numbers[1] = 5, we need to find a value of x such that 2 * x = 5, but there is no integer value that would satisfy this equation, so result[1] = false.
// For numbers[2] = 6, we can choose x = 2 because 3 * 2 = 6 and 1 ≤ 2 ≤ 3, so result[2] = true.
// For numbers[3] = 16, there is no an integer 1 ≤ x ≤ 3, such that 4 * x = 16, so result[3] = false.
// For numbers[4] = 5, we can choose x = 1 because 5 * 1 = 5 and 1 ≤ 1 ≤ 3, so result[4] = true.
// Input/Output

// [execution time limit] 4 seconds (js)

// [input] array.integer numbers

// An array of integers.

// Guaranteed constraints:
// 1 ≤ numbers.length ≤ 100,
// 1 ≤ numbers[i] ≤ 106.

// [input] integer left

// An integer representing the lower bound for x.

// Guaranteed constraints:
// 1 ≤ left ≤ 104.

// [input] integer right

// An integer representing the upper bound for x.

// Guaranteed constraints:
// 1 ≤ left ≤ right ≤ 104.

// [output] array.boolean

// A boolean array result described above.

======================================================================

// You are given two arrays of integers a and b of the same length, and an integer k. We will be iterating through array a from left to right, and simultaneously through array b from right to left, and looking at pairs (x, y), where x is from a and y is from b. Such a pair is called tiny if the concatenation xy is strictly less than k.

// Your task is to return the number of tiny pairs that you'll encounter during the simultaneous iteration through a and b.

// Example

// For a = [1, 2, 3], b = [1, 2, 3], and k = 31, the output should be
// solution(a, b, k) = 2.

// We're considering the following pairs during iteration:

// (1, 3). Their concatenation equals 13, which is less than 31, so the pair is tiny;
// (2, 2). Their concatenation equals 22, which is less than 31, so the pair is tiny;
// (3, 1). Their concatenation equals 31, which is not less than 31, so the pair is not tiny.
// As you can see, there are 2 tiny pairs during the iteration, so the answer is 2.

// For a = [16, 1, 4, 2, 14], b = [7, 11, 2, 0, 15], and k = 743, the output should be
// solution(a, b, k) = 4.

// We're considering the following pairs during iteration:

// (16, 15). Their concatenation equals 1615, which is greater than 743, so the pair is not tiny;
// (1, 0). Their concatenation equals 10, which is less than 743, so the pair is tiny;
// (4, 2). Their concatenation equals 42, which is less than 743, so the pair is tiny.
// (2, 11). Their concatenation equals 211, which is less than 743, so the pair is tiny;
// (14, 7). Their concatenation equals 147, which is less than 743, so the pair is tiny.
// There are 4 tiny pairs during the iteration, so the answer is 4.

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] array.integer a

// An array of non-negative integers.

// Guaranteed constraints:
// 0 ≤ a.length ≤ 105,
// 0 ≤ a[i] ≤ 104.

// [input] array.integer b

// An array of non-negative integers.

// Guaranteed constraints:
// b.length = a.length,
// 0 ≤ b[i] ≤ 104.

// [input] integer k

// An integer to compare concatenated pairs with.

// Guaranteed constraints:
// 0 ≤ k ≤ 109.

// [output] integer

// The number of tiny pairs during the iteration.

===============================================================================

// A text editor is a type of computer program that edits plain text. It consists of a string with a cursor. In the initial state the string is empty with the cursor at the beginning of the string.

// Your task is to simulate the working process of a text editor which can handle four types of operations:

// TYPE <text> - insert <text> after the current position of the cursor, where <text> consists of at most 20 characters. The cursor moves to the end of the inserted text.

// MOVE_CURSOR <offset> - change the current cursor's position. The offset specifies the direction and the value change - if it's negative the cursor moves to the left, and if it's positive the cursor moves to the right. At all times, the cursor is either located at the beginning of the string (before the first character), between two characters, or at the end of the string (after the last character) - the cursor should always be within the text bounds. If the offset is larger than cursor can move, the cursor will move towards the direction as much, as it can. If the cursor does not change its position after the operation, the operation is considered unsuccessful.

// SELECT <start_index> <end_index> - select the substring of the current text [text[start_index] ... text[end_index]] (inclusive indices, 0-based) of length end_index - start_index + 1. It is guaranteed that the indices are valid. The cursor changes its position to the end of the selected area. If the next immediately subsequent operation is not TYPE then the selected area is cleared.

// If the next immediately subsequent operation is TYPE then the following updating process is expected during the TYPE operation:

// Delete the selected text.
// Insert the new text in the place of the deleted text.
// The cursor position should move to the end of the typed text.
// If this operation is anything other than TYPE, the selected area is cleared (See the examples for details).

// UNDO - undo the last successful TYPE or MOVE_CURSOR operation (if there is nothing to undo, this operation does nothing). You cannot undo a SELECT operation. UNDO operation returns back to the text and cursor position to the state, they were before the operations is undone. Note that it's not possible to undo the same operation twice: if the operation has been undone, it's undone forever. However, it is possible to undo several operations one by one.

// You are given operations, an array of strings where each is an operation of one of the four types above. Your task is to find the resulting text after performing the given operations.

// NOTE: An operation is considered successful if the text or the cursor position is changed. For example, moving the cursor to the left when it stands before all characters is not considered a successful operation.

// Example

// For operations = ["TYPE Code", "TYPE Signal", "MOVE_CURSOR -3", "SELECT 5 8", "TYPE ou", "UNDO", "TYPE nio"], the output should be solution(operations) = "CodeSignaniol".

// Initially the text is empty,
// After the "TYPE Code" operation, the text is "Code|" (where the | symbol represents the cursor position),
// After the "TYPE Signal" operation, the text is "CodeSignal|",
// After the "MOVE_CURSOR -3", the cursor moves three symbols back, so the text is "CodeSig|nal",
// After the "SELECT 5 8" operation, the selected text is "igna", the cursor is moved to the end of selected area "CodeSigna|l",
// After the "TYPE ou" operation, since the previous operation was "SELECT", the selected text is deleted and replaced with the text "ou", the cursor stays after the typed text, so the text is "CodeSou|l",
// After the "UNDO" operation, the last operation "TYPE" is undone and text and cursor is back as it was before the "TYPE" operation, so the text is "CodeSigna|l",
// After the "TYPE nio" operation, the text is "CodeSignanio|l",
// So the final string is "CodeSignaniol".
// For operations = ["TYPE MyCat", "SELECT 2 3", "MOVE_CURSOR -1", "TYPE he", "SELECT 0 1", "TYPE His"], the output should be solution(operations) = "HisCheat".

// Initially the text is empty,
// After the "TYPE MyCat" operation, the text is "MyCat|",
// After the "SELECT 2 3" operation, the selected text is "Ca", the cursor is moved after the selected area "MyCa|t",
// After the "MOVE_CURSOR -1", the cursor moves one symbol back, so the text is "MyC|at". Also, the selected area is cleared, as this operation is not "TYPE". No area is selected,
// After the "TYPE he" operation, the text is "MyChe|at", the typed text is inserted where the cursor stands.
// After the "SELECT 0 1" operation, the selected text is "My",
// After the "TYPE His" operation, since the previous operation was "SELECT", the selected text is deleted and replaced with the text "His", the cursor moves to the end of the typed area, so the text is "His|Cheat",
// So the final string is "HisCheat".
// For operations = ["TYPE Nothing", "TYPE Is", "TYPE Permanent", "UNDO", "UNDO", "UNDO", "UNDO"], the output should be solution(operations) = "".

// Initially the text is empty,
// After the "TYPE Nothing", "TYPE is", and "TYPE Permanent" operations the text is "NothingIsPermanent",
// Then, after three consequent "UNDO" operations, the text becomes "", the last "UNDO" operation is ignored since there are no more operations to undo.

============================================================================

// You are given two integer arrays a, b and one array of distinct integers c. Your task is to check whether b is the longest contiguous subarray of a consisting only of elements from c, i.e.

// Each of the elements of b belong to c,
// a contains b as a contiguous subarray,
// b is the longest of the contiguous subarrays of a which satisfy the first two conditions.
// Return true if all the above conditions are met, and false otherwise.

// NOTE: If there is a tie for the longest contiguous subarrays of a consisting of elements from c, the answer is still considered true if b is one of these longest contiguous subarrays.

// Example

// For a = [1, 1, 5, 1, 2], b = [1, 2], and c = [2, 1], the output should be solution(a, b, c) = true.

// All three conditions are met:

// All of the elements of b belong to c,
// a contains b as a contiguous subarray (a[3..4] = b),
// b is the longest of these contiguous subarrays. To prove this, let's look at all the contiguous subarrays of length greater than 2:
// a[0..2] = [1, 1, 5] contains 5, which doesn't belong to c.
// a[0..3] = [1, 1, 5, 1] contains 5, which doesn't belong to c.
// a[0..4] = [1, 1, 5, 1, 2] contains 5, which doesn't belong to c.
// a[1..3] = [1, 5, 1] contains 5, which doesn't belong to c.
// a[1..4] = [1, 5, 1, 2] contains 5, which doesn't belong to c.
// a[2..4] = [5, 1, 2] contains 5, which doesn't belong to c.
// Therefore b is the longest contiguous subarray of a consisting only of elements from c, so the answer is true.

// For a = [1, 2, 3, 6, 1, 1, 1], b = [1, 2, 3], and c = [2, 1], the output should be solution(a, b, c) = false.

// Although b is a contiguous subarray of a, it contains the element b[2] = 3 which does not appear in c, therefore it does not meet the conditions. So the answer is false.

// For a = [1, 2, 2, 3, 2, 1, 3], b = [3, 2, 1, 3], and c = [2, 1, 3], the output should be solution(a, b, c) = false.

// All of the elements of a belong to c, and b.length < a.length, so b couldn't possibly be the longest contiguous subarray consisting of elements from c. So, the answer is false.

// Input/Output

// [execution time limit] 4 seconds (js)

// [input] array.integer a

// An array of integers.

// Guaranteed constraints:
// 1 ≤ a.length ≤ 105,
// 0 ≤ a[i] ≤ 109.

// [input] array.integer b

// An array of integers.

// Guaranteed constraints:
// 1 ≤ b.length ≤ 105,
// 0 ≤ b[i] ≤ 109.

// [input] array.integer c

// An array of distinct integers.

// Guaranteed constraints:
// 1 ≤ c.length ≤ 105,
// 0 ≤ c[i] ≤ 109.

// [output] boolean

// Return true if b is the longest contiguous subarray of a consisting of elements from c, otherwise return false.