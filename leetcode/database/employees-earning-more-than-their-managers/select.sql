SELECT emp.Name
FROM
    Employee as emp
    JOIN Employee as man
    ON emp.ManagerId = man.Id
WHERE emp.Salary > man.Salary
