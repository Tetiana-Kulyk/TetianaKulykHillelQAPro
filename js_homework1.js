'number' + 3 + 3
/* Answer: number33
Step1: number to string. 3 -> "3"
Step2: number to string. 3 -> "3" 
Step3: string concatenation */

null + 3
/* Answer: 3
Step1: null to boolean. null -> 0 
Step2: numbers adding */

5 && "qwerty"
/* Answer: querty
Step1: number to boolean. 5 -> true
Step2: string to boolean. "querty" -> true.
Step3: when both values are true, the last one is returned. */

+'40' + +'2' + "hillel";
/* Answer: 42hillel
Step1: string to number. "40" -> 40
Step2: string to number. "2" -> 2
Step3: numbers adding
Step4: number to string. 42 -> "42"
Step5: string concatenation */

'10' - 5 === 6;
/* Answer: false
Step1: string to number. "10" -> 10
Step2: substraction of number. 10 - 5 = 5
Step3: numbers comparison. 5 is not equal to 6, so the equation is not true. */

true + false
/* Answer: 1
Step1: boolean to number. true -> 1
Step2: boolean to number. false -> 0
Step3: numbers adding */

'4px' - 3
/* Answer: NaN
Step1: string to number. '4px' cannot be converted to number, because it is not a number (NaN) */

'4' - 3
/* Answer: 1
Step1: string to number. "4" -> 4
Step2: substraction of number */


'6' + 3 ** 0;
/* Answer: 61
Step1: number exponentiation. 3 ** 0 is 1
Step2: number to string. 1 -> "1"
Step3: string concatenation */

12 / '6'
/* Answer: 2
Step1: string to number. "6" -> 6
Step2: numbers adding */

'10' + (5 === 6);
/* Answer: 10false
Step1: numbers comparison. 5 is not equal to 6, so value is false
Step2: boolean to string. false -> "false"
Step3: string concatenation */ 

null == ''
/* Answer: false
Step1: null cannot be converted to number in this case, because it cannot be equal to anything, except another null or undefined. That's why the comparison is not true, because the second operand is not null or undefined. */

3 ** (9 / 3);
/* Answer: 27
Step1: number devision. 9 / 3 = 3
Step2: 3 ** 3 = 27 */

!!'false' == !!'true'
/* Answer: true
Step1: the 1st string is not empty, so it is true
Step2: the 2nd string is not empty, so it is true
Step3: true is equal to true and returns true */

0 || '0' && 1
/* Answer: 1
Step1: logical conjunction. Both '0' and 1 values are true, so the last one is returned
Step2: from number to boolean. 0 is false
Step2: from number to boolean. 1 is true
Step3: logical disjunction. 0 cannot be converted to true, that's why the 1 is returned */

(+null == false) < 1;
/* Answer: false
Step1: null to number. null -> 0
Step2: boolean to number. false -> 0
Step3: numbers comparison. 0 is equal to 0, so it's true
Step4: boolean to number: true is 1
Step 4: 1 is not less than 1, so the answer is false */

false && true || true
/* Answer: true
Step1: logical conjunction. Returns false as not both operands are true
Step2: logical disjunction. If the first operand is not true, then the second one is returned */

false && (false || true);
/* Answer: false
Step1: logical disjunction. If the first operand is not true, then the second one is returned
Step2: logical conjunction. Returns false as not both operands are true */

(+null == false) < 1 ** 5;
/* Answer: false
Step1: null to number. null -> 0
Step2: boolean to number. false -> 0
Step3: numbers comparison. 0 is equal to 0, so it's true
Step4: 1 ** 5 is 1
Step5: boolean to number. true -> 1
Step6: 1 is not less than 1, so it's false */
