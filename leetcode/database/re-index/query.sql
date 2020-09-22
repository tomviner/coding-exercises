SELECT
    RowNum,
    Id,
    Num
FROM (
    SELECT
        Id, Num,
        row_number() OVER (ORDER BY Id) RowNum
    FROM
        Logs w
    ) as l
