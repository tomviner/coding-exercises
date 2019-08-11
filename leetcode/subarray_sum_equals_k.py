from collections import defaultdict
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

            # `cum_sum - k` is the cumulative sum of the start of all
            # subarrays that end here, and sum to k. Add them to the count.
            count += sums[cum_sum - k]

        return count
