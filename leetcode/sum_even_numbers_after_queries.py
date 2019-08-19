class Solution:
    def sumEvenAfterQueries(self, A, queries):
        return list(self.generate_results(A, queries))

    def generate_results(self, A, queries):
        # speed up random access
        A = dict(enumerate(A))

        total_evens = sum(n for n in A.values() if not n % 2)

        for val, index in queries:
            old = A[index]
            new = old + val
            A[index] = new

            # same parity as before
            if not val % 2:
                # remain inside sum
                if not old % 2:
                    total_evens += val

            # parity change
            else:
                # entering the sum
                if old % 2:
                    total_evens += new
                # leaving the sum
                else:
                    total_evens -= old

            yield total_evens
