CREATE FUNCTION getNthHighestSalary(N INT) RETURNS INT
BEGIN
  RETURN (
    SELECT Salary
    FROM (
        SELECT
            Salary,
            RANK()  OVER (ORDER BY Salary DESC) as Nth
        FROM Employee
        ORDER BY Salary DESC
    ) R
    WHERE Nth = N
  );
END