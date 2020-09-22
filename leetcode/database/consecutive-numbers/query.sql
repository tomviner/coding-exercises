SELECT
    DISTINCT Num as ConsecutiveNums
FROM (
    SELECT
        Id, Num,
        LEAD(Num) OVER (ORDER BY Id) as Next,
        Lag(Num) OVER (ORDER BY Id) as Last
    FROM Logs
    ) w
WHERE
    Last = Num AND Num = Next
