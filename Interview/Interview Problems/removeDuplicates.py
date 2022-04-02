class Solution:
    def removeDuplicates(nums):
        x = 1
        for i in range(len(nums)-1):
            if(nums[i] != nums[i+1]):
                nums[x] = nums[i + 1]
                x += 1
        print (x)

    removeDuplicates([0,0,1,1,1,2,2,3,3,4])
        