import sqlite3
import json
import os
from pathlib import Path

from sqlite_utils import Database


def get_table_data(path):
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


def get_db(path=Path("data.db")):
    try:
        path.unlink()
    except FileNotFoundError:
        pass
    conn = sqlite3.connect(path)
    return Database(conn)


def get_paths():
    for path in Path().glob('testcase*.json'):
        db_name = str(path).replace('testcase', 'data')
        yield path, path.with_name(db_name).with_suffix('.db')


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
    for data_path, db_path in get_paths():
        data = get_table_data(data_path)
        db = get_db(db_path)
        populate(db, data)
