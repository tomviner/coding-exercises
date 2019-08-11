import pytest

from hypothesis import given
from hypothesis.strategies import lists, integers, composite

from subarray_sum_equals_k import Solution


param_testcases = pytest.mark.parametrize('nums, k, count', [
    ([], 0, 0),
    ([], 1, 0),
    ([0], 0, 1),
    ([7], 7, 1),
    ([1, 1, 1], 2, 2),
    ([3, 4, 7, 2, -3, 1, 4, 2], 7, 4),
    ([0, 1, -1, 0, 2, 3, 1, 1], 0, 6),
    ([0, 1, -1, 0, 2, 3, 1, 1], 1, 5),
    ([0, 1, -1, 0, 2, 3, 1, 1], 2, 5),
    ([0, 0, 0], 0, 6),
    ([0, 0, 0], 1, 0),
])


@param_testcases
def test_subarray_sum(nums, k, count):
    assert Solution().subarraySum(nums, k) == count


@param_testcases
def test_tomh_base(nums, k, count):
    assert Solution().tomh_base(nums, k) == count


@param_testcases
def test_tomh(nums, k, count):
    assert Solution().tomh(nums, k) == count


@param_testcases
def test_klick(nums, k, count):
    assert Solution().klick(nums, k) == count


@composite
def nums_and_k(draw):
    max_num = draw(integers(min_value=1, max_value=10))
    nums = draw(lists(integers(min_value=-max_num, max_value=max_num)))
    k = draw(integers(min_value=-max_num, max_value=max_num))
    return nums, k


@given(nums_and_k())
def test_all_equivalent(nums_k):
    nums, k = nums_k
    s = Solution()
    base_count = s.tomh_base(nums, k)
    for method in (s.subarraySum, s.tomh, s.klick):
        assert method(nums, k) == base_count
