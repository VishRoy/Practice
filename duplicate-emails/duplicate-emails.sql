# Write your MySQL query statement below
SELECT Email from Person Group By Email HAVING COUNT(Email) > 1;