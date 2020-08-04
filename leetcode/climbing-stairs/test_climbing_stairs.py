import pytest

from climbing_stairs import Solution


@pytest.mark.parametrize('input, expected', [(2, 2), (3, 3), (4, 5), (5, 8)])
def test_climbing_stairs(input, expected):
    assert Solution().climbStairs(input) == expected
