//Given a 1-D array of heights indexed by widths, give the largest area of a 
//container of water given you cannot have a slanted height

let height = [1,8,6,2,5,4,8,3,7]


//O(n) solution that does a one pass of the array using a 2-pointer approach.

let left = 0
let right = height.length - 1
let maxArea = 0

while (left < right) {
    //Get the lesser of height[left] and height[right] since we can't have a slanted height
    maxArea = Math.max(maxArea, Math.min(height[left], height[right]) * (right - left))
    //Try to find a higher height
    if (height[left] < height[right]) {
        left++
    } else {
        right--
    }
}

return maxArea