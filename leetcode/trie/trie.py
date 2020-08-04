import json
from collections import defaultdict


def rec_dd():
    return [0, defaultdict(rec_dd)]


class Trie:

    def __init__(self):
        """
        Initialize your data structure here.
        """
        self.trie = [0, defaultdict(rec_dd)]

    def __repr__(self):
        return json.dumps(self.trie, indent=4)

    def insert(self, word: str) -> None:
        """
        Inserts a word into the trie.
        """
        count, node = self.trie
        for char in word:
            prev_node = node
            count, node = node[char]
        prev_node[char] = [count + 1, node]

    def search(self, word: str) -> bool:
        """
        Returns if the word is in the trie.
        """
        count, node = self.trie.copy()
        for char in word:
            if char not in node:
                return False
            count, node = node[char]
        return bool(count)

    def startsWith(self, prefix: str) -> bool:
        """
        Returns if there is any word in the trie that starts with the given prefix.
        """
        count, node = self.trie.copy()
        node = node.copy()
        for char in prefix:
            if char not in node:
                return False
            count, node = node[char]
        return True

# Your Trie object will be instantiated and called as such:
# obj = Trie()
# obj.insert(word)
# param_2 = obj.search(word)
# param_3 = obj.startsWith(prefix)
