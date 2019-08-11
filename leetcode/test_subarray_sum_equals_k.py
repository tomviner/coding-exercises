import pytest

from subarray_sum_equals_k import Solution


@pytest.mark.parametrize('nums, k, count', [
    ([1, 1, 1], 2, 2),
    ([3, 4, 7, 2, -3, 1, 4, 2], 7, 4),
    ([0, 1, -1, 0, 2, 3, 1, 1], 2, 5),
    ([0, 1, -1, 0, 2, 3, 1, 1], 0, 6),
    ([0, 0, 0], 0, 6),
    ([0, 0, 0], 1, 0),
])
def test_subarray_sum(nums, k, count):
    assert Solution().subarraySum(nums, k) == count
