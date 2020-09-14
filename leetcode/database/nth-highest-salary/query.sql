SELECT Salary, Nth
FROM (
    SELECT DISTINCT
        Salary,
        DENSE_RANK()  OVER (
            ORDER BY Salary DESC
        ) as Nth
    FROM Employee
    ORDER BY Salary DESC
) R
WHERE Nth = 88
