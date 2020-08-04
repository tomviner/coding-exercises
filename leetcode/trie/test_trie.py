from trie import Trie


def test_trie():
    trie = Trie()

    trie.insert("apple")
    print(trie)
    assert trie.search("apple")    # returns true
    assert not trie.search("app")      # returns false
    assert trie.startsWith("app")  # returns true
    assert not trie.startsWith("appd")  # returns true

    assert trie.startsWith("a")  # returns true
    assert not trie.startsWith("b")  # returns true

    trie.insert('a')
    print(trie)
    assert trie.search("a")
    assert not trie.search("b")

    trie.insert("app")
    print(trie)
    assert trie.search("app")      # returns true
