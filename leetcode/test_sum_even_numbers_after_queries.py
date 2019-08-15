'''
Input: A = [1,2,3,4], queries = [[1,0],[-3,1],[-4,0],[2,3]]
Output: [8,6,2,4]
'''
from sum_even_numbers_after_queries import Solution


def test_sumEvenAfterQueries():
    res = Solution().sumEvenAfterQueries(
        A=[1, 2, 3, 4], queries=[[1, 0], [-3, 1], [-4, 0], [2, 3]]
    )
    assert list(res) == [8, 6, 2, 4]
