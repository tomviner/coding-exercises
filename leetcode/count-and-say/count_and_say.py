from itertools import groupby
from typing import Generator


class Solution:
    def describe(self, s: str) -> Generator[str, None, None]:
        for key, group in groupby(s):
            yield f'{len(list(group))}{key}'

    def countAndSay(self, n: int) -> str:
        if n == 1:
            return '1'

        to_describe = self.countAndSay(n - 1)
        return ''.join(self.describe(to_describe))
