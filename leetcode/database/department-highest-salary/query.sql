SELECT d.Name Department, e.Name Employee, e.Salary
FROM Employee e
    JOIN (
        SELECT Name, DepartmentId, Max(Salary) as Max_Salary
        FROM Employee e
        GROUP BY e.DepartmentId
    ) s
    ON e.DepartmentId = s.DepartmentId
    JOIN Department d
    ON e.DepartmentId = d.Id
WHERE e.Salary = s.Max_Salary
