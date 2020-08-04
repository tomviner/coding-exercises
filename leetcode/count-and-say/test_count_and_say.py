import pytest

from count_and_say import Solution


@pytest.mark.parametrize('input, expected', [(1, '1'), (4, '1211')])
def test_count_and_say(input, expected):
    assert Solution().countAndSay(input) == expected
