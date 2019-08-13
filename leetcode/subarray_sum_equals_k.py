"""
https://leetcode.com/problems/subarray-sum-equals-k/
"""
from collections import defaultdict
from itertools import combinations
from typing import List


class Solution:
    def subarraySum(self, nums: List[int], k: int) -> int:
        count = cum_sum = 0
        sums = defaultdict(int)

        for num in nums:
            # store the count of cumulative sums up to just before num.
            # think of these as all the possible starting positions, which
            # is why this never sees the final num.
            sums[cum_sum] += 1

            # count sum up to and including num
            cum_sum += num

            # `cum_sum - k` is the cumulative sum belonging to the start of all
            # subarrays that end here, and sum to k. Add the number of them to
            # the count.
            count += sums[cum_sum - k]

        return count

    def tomh_base(self, l, target):
        combs = list(combinations(range(len(l) + 1), 2))
        return len([
            0 for a, b in combs
            if sum(l[a:b]) == target
        ])

    def tomh(self, l, target):
        c, acc, count = {0: 1}, 0, 0
        for x in l:
            acc += x
            count += c.get(acc - target, 0)
            c[acc] = c.get(acc, 0) + 1
        return count

    # 3rd party solution
    # https://leetcode.com/problems/subarray-sum-equals-k/discuss/348714/Python-Subarray-Sum-Equals-K
    def klick(self, nums, k):
        n = len(nums)
        dic, _sum, counter = {0: 1}, 0, 0

        for i in range(0, n):
            _sum += nums[i]

            if _sum - k in dic:
                counter += dic[_sum - k]

            if _sum in dic:
                dic[_sum] += 1
            else:
                dic[_sum] = 1

        return counter
