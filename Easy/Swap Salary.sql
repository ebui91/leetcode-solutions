/*
  Date: 08/29/2018
  Source: https://leetcode.com/problems/swap-salary/description/
*/

// Another SQL problem!
// Accepted solution using a CASE
UPDATE salary
SET
  sex = CASE sex
    WHEN 'm' THEN 'f'
    ELSE 'm'
END;


// My solution, using an IF statement
UPDATE salary
SET sex = IF(sex='f','m','f');
