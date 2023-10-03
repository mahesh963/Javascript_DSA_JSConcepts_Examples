function merge(intervals) {
	if (!intervals || intervals.length === 0) {
		return [];
	}

	// Sort the intervals by their start times
	intervals.sort((a, b) => a[0] - b[0]);

	const mergedIntervals = [intervals[0]];

	for (let i = 1; i < intervals.length; i++) {
		const currentInterval = intervals[i];
		const lastMergedInterval = mergedIntervals[mergedIntervals.length - 1];

		if (currentInterval[0] <= lastMergedInterval[1]) {
			// There is an overlap, merge the intervals
			lastMergedInterval[1] = Math.max(
				lastMergedInterval[1],
				currentInterval[1]
			);
		} else {
			// No overlap, add the current interval to the result
			mergedIntervals.push(currentInterval);
		}
	}

	return mergedIntervals;
}

// Example usage:
const intervals = [
	[1, 3],
	[2, 6],
	[8, 10],
	[15, 18],
];
const merged = merge(intervals);
console.log(merged); // Output: [[1,6],[8,10],[15,18]]
