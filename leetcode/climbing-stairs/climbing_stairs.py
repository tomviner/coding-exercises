from functools import lru_cache


class Solution:

    @lru_cache
    def climbStairs(self, n: int) -> int:
        '''Aka Fibonacci'''
        if n == 1:
            return 1

        if n == 2:
            return 2

        step1_count = self.climbStairs(n - 1)
        step2_count = self.climbStairs(n - 2)

        return step1_count + step2_count
