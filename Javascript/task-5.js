/**
 * @format
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

var findMedianSortedArrays = function (nums1, nums2) {
	let mArray = [...nums1, ...nums2];

	let median = 0;
	let position = Math.floor(mArray.length / 2);
	if (mArray.length % 2 == 0)
		median = (mArray[position] + mArray[position - 1]) / 2;
	else median = mArray[position];
	return median;
};
// console.log(findMedianSortedArrays([3], [-2, -1]));
