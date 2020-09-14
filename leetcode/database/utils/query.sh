for db in $(ls data*.db);
    do
        /home/tom/bin/sqlite3 $db -column -header < query.sql
        echo
done
