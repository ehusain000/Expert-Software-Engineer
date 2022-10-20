package maxSeqLen;

import java.util.Arrays;

public class MaxSeqLen {

	public static void main(String[] args) {
		
		int[] nums = {3, 2, 1, 4, 100, 200, 201, 203, 202, 205, 204, 206};
		System.out.println(maxSeqLen(nums));
	}
	
	public static int maxSeqLen(int[] nums) {
		Arrays.sort(nums);
		int tempSeqLen = 1;
		int seqLen = 0;
		
		for(int i = 0; i < nums.length-1; i++) {
			if(nums[i] + 1 == nums[i+1]) {
				tempSeqLen++;
			}else {
				if(tempSeqLen > seqLen) {
					seqLen = tempSeqLen;
					tempSeqLen = 1;
				}
			}
		}
		
		return Math.max(tempSeqLen, seqLen);
	}

}
