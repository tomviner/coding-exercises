import sqlite3
import json
import os

from sqlite_utils import Database


def get_table_data(path='testcase.json'):
    data = json.load(open(path))
    all_rows = data['rows']
    for table_name, columns in data['headers'].items():
        table_rows = all_rows[table_name]
        yield (
            table_name,
            [dict(zip(columns, row)) for row in table_rows],
            get_fks(columns)
        )


def get_fks(columns):
    for col in columns:
        target, id, more = col.partition('Id')
        if target and id and not more:
            yield target


def get_db(path="data.db"):
    os.remove(path)
    conn = sqlite3.connect(path)
    return Database(conn)


def populate(db, data):
    table_fks = []
    for table_name, rows, fks in data:
        table = db[table_name]
        table.insert_all(rows, truncate=True)
        table_fks.append((table, fks))

    for table, fks in table_fks:
        for fk in fks:
            table.add_foreign_key(f"{fk}Id", fk, "Id")


if __name__ == "__main__":
    db = get_db()
    data = get_table_data()
    populate(db, data)
