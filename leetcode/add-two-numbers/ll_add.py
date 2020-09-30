from itertools import zip_longest


# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

    def __repr__(self):
        next = f' -> {self.next}' if self.next else ''
        return f'{self.val}{next}'

    def __int__(self):
        return self.val + 10 * int(self.next or 0)



class Solution:
    def addTwoNumbers(self, l1: ListNode, l2: ListNode, carry=0) -> ListNode:
        l = l1 or l2

        if l1 and l2:
            carry, val = divmod(l1.val + l2.val + carry, 10)
            return ListNode(val, self.addTwoNumbers(l1.next, l2.next, carry))
        elif l:
            carry, val = divmod(l.val + carry, 10)
            return ListNode(val, self.addTwoNumbers(l.next, None, carry))
        elif carry:
            return ListNode(carry)
        return None




if __name__ == "__main__":
    '''
    Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
    Output: 7 -> 0 -> 8
    Explanation: 342 + 465 = 807.
    '''
    L = ListNode

    a = L(2, L(4, L(3)))
    b = L(5, L(6, L(4)))
    result = Solution().addTwoNumbers(a, b)

    print(f'Input: ({a}) + ({b})')
    print(f'Output: {result}')
    print(f'Explanation: {int(a)} + {int(b)} = {int(result)}')

