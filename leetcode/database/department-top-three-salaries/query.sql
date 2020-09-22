SELECT
    e.Name Employee,
    e.Salary,
    d.Name Department
FROM
    Employee e
    JOIN Department d
    ON e.DepartmentId = d.Id
    JOIN (
        SELECT
            e.Id,
            DENSE_RANK() OVER (
                PARTITION BY e.DepartmentId
                ORDER BY e.Salary DESC
            ) as SalaryRank
        FROM
            Employee e
    ) r
    ON e.Id = r.Id
WHERE
    SalaryRank <= 3
