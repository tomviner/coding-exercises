import pytest

from robot_return_to_origin import Solution


@pytest.mark.parametrize('moves, at_origin', [
    ('UD', True),
    ('LL', False),
])
def test_judgeCircle(moves, at_origin):
    res = Solution().judgeCircle(moves)
    assert res == at_origin
