-- this fails for certain inputs
SELECT Num as ConsecutiveNums
FROM (
    SELECT
        Id, Num,
        dense_rank() OVER (ORDER BY Id) -
        dense_rank() OVER (PARTITION BY Num ORDER BY Id) AS diff
    FROM
        Logs w
    ) as l
GROUP BY Num, diff
HAVING count(*) >= 3
