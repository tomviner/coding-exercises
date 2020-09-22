SUFFIX=${1:-}

for db in $(ls data*.db);
    do
        echo $db
        /home/tom/bin/sqlite3 $db -column -header < query${SUFFIX}.sql
        echo
done
