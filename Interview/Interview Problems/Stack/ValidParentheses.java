package stack;

import java.util.HashMap;
import java.util.Stack;

/* 1)Specification
 * pre condition: inputs a string s containing just the characters '(', ')', '{', '}', '[' and ']'
 * * An input string is valid if:
 * * Open brackets must be closed by the same type of brackets.
 * * Open brackets must be closed in the correct order.
 * 
 * post condition: determines if the input string is valid, returns true or false
 * 
 * 2)Design Idea:
 * 
 * Start with an example: s: "()[]{}"
 * 
 * Store the parentheses as key value pairs in a HashMap
 * key: opening parentheses
 * value: closing parentheses
 * '(' : ')'
 * '{' : '}'
 * '[' : ']'
 * 
 * have a stack 
 * Initially empty
 * 
 * loop through the input string
 * take the the character at the current index
 * 
 * if the character at the current index is found in the keysets
 * of the map, then push the current character to the stack
 * 
 * e.g stack = (
 * 
 * if the character at the current index is found in the values
 * of the map, then
 * 		if the stack is not empty and the last value of the stack is
 * 		the key of the character at the current index
 * 		then we know the parentheses are balance 
 * so we pop the char at the stop of the stack
 * 
 * otherwise we return false as the character at the current index is not found 
 * in the keys or values of the map
 * 
 *  at the end we expect our stack to be empty returning the value: true (if empty)
 * 
 */


//3) code
public class ValidParentheses {

	//implementation
	public static boolean isValidParentheses(String str) {

		HashMap<Character, Character> 	map = new HashMap<Character, Character>();
		map.put('(', ')');
		map.put('{', '}');
		map.put('[', ']');


		Stack<Character> stack = new Stack<Character>();

		for(int i = 0; i < str.length(); i++) {
			char current = str.charAt(i);

			if(map.keySet().contains(current)) {
				stack.push(current);
			}else if(map.values().contains(current)) {
				if(!stack.empty() && map.get(stack.peek()) == current) {
					stack.pop();
				}else {
					return false;
				}
			}

		}

		return stack.empty();

	}



	//4) Testing
	public static void main(String[] args) {

		String str1 = "()";
		String str2 = "()[]{}";
		String str3 = "([)]";

		System.out.println(isValidParentheses(str1));
		System.out.println(isValidParentheses(str2));
		System.out.println(isValidParentheses(str3));
	}

}

/*
 * Proof(s)
 * 
 * 
 */
