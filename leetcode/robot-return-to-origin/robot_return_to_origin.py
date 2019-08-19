from collections import Counter


class Solution:
    def judgeCircle(self, moves: str) -> bool:
        c = Counter(moves)
        return c['U'] == c['D'] and c['L'] == c['R']
