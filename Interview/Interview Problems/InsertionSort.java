package insertion.sort;

public class InsertionSort {
	
	public static void main(String[] args) {
		int[] arr = {8,5,2,9,5,6,3};
		int[] sortedArr = insertionSort(arr);
		
		for(int i = 0; i < sortedArr.length; i++) {
			System.out.println(sortedArr[i]);
		}
		
	}
	
	

	private static int[] insertionSort(int[] arr) {
		for(int i = 1; i < arr.length; i++) {
			int j = i;
			while(j > 0 && arr[j] < arr[j-1]) {
				swap(j, j-1, arr);
				j--;
			}
		}
		
		
		return arr;
	}

	private static void swap(int i, int j, int[] arr) {
		int temp = arr[j];
		arr[j] = arr[i];
		arr[i] = temp;
	}

}
