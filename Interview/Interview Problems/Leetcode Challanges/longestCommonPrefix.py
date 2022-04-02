""" def longestCommonPrefix(strs):
    if not strs:
            return ""
    shortest = min(strs,key=len)
    for i, ch in enumerate(shortest):
        for other in strs:
            if other[i] != ch:
                return shortest[:i]
    return (shortest)

strs1 = ["flower","flow","flight"]
longestCommonPrefix(strs1) """

def longestCommonPrefix(words):
    prefix = words[0]

    for word in words[1:]:
        while word[:len(prefix)] != prefix:
            prefix = prefix[:-1]

            if not prefix:
                return ""
    #print(prefix)
    return prefix

strs1 = ["flower","flow","flight"]
longestCommonPrefix(strs1)