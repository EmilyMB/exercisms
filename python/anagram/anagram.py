def detect_anagrams(target_word, wordlist):
    anagrams = []
    for word in wordlist:
        if is_anagram(target_word, word):
            anagrams.append(word)
    return anagrams

def is_anagram(target, test):
    return test.lower() != target.lower() and sort(test) == sort(target)

def sort(word):
    return ''.join(sorted(word.lower()))
