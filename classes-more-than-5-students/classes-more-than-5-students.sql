SELECT class
FROM (SELECT DISTINCT(student), class FROM courses) AS T
GROUP BY class HAVING COUNT(*) >= 5