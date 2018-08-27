/*
  Date: 08/27/2018
  Source: https://leetcode.com/problems/big-countries/description/
*/


/* Level 1 Solution: Using WHERE clause with OR */
SELECT name, population, area FROM World WHERE area > 3000000 OR population > 25000000

/* Alternatively, separate code for cleaner and more readable syntax: */
SELECT name, population, area 
FROM World
WHERE area > 3000000
OR population > 25000000


/* Level 2 Solution: Using a UNION */
/* This solution is slightly faster than the previous one. */
SELECT name, population, area FROM World WHERE area > 3000000
UNION
SELECT name, population, area FROM World WHERE population > 25000000

/* Alternative syntax: */
SELECT name, population, area 
FROM World 
WHERE area > 3000000

UNION

SELECT name, population, area 
FROM World 
WHERE population > 25000000
