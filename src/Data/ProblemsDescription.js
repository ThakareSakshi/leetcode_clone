export const problemDesc=[
    {
        id:1,
        title:"1.Two Sum",
        difficulty:"Easy",
        solution:"https://medium.com/@AlexanderObregon/solving-the-two-sum-problem-on-leetcode-c-answer-s-walkthrough-0aa8b87875e9",
        topics:["Array", "Hash Table"],
        description:'Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order.',
        examples:[
            {
               input:"nums = [2,7,11,15], target = 9",
               output:"[0,1]"
            },
             {
                input:"nums = [3,2,4], target = 6",
                output:"[1,2]"
             },
            {
                input:"nums = [3,3], target = 6",
                output:"[0,1]"
            }],
        constraints:[
            {
                desc:"2 <= nums.length <= 104"
            }
            ,{
                desc:"-109 <= nums[i] <= 109"
            },
            {
                desc:"-109 <= target <= 109"
            }
        ],
        defaultCode:`function TwoSum(nums,target){

        }
        console.log(TwoSum([2,7,11,15],9))`,
        stdOutput:"[ 0, 1 ]\n"
        
        
    },
    {
        id:2,
        title:"2.Add two numbers",
        difficulty:"Medium",
        solution:"",
        topics:["Linked list","Math","recursion"],
        description:'You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list. You may assume the two numbers do not contain any leading zero, except the number 0 itself. ',
        examples:[
            {
               input:"l1 = [2,4,3], l2 = [5,6,4]",
               output:"[7,0,8]"
            },
             {
                input:"l1 = [0], l2 = [0]",
                output:"[0]"
             },
            {
                input:" l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]",
                output:"[8,9,9,9,0,0,0,1]"
            }],
        constraints:[
            {
                desc:"The number of nodes in each linked list is in the range [1, 100]"
            }
            ,{
                desc:"0 <= Node.val <= 9"
            },
            {
                desc:"It is guaranteed that the list represents a number that does not have leading zeros."
            }
        ],
        defaultCode:`var addTwoNumbers = function(l1, l2) {
    
        };
        
        console.log(addTwoNumbers([2,4,3],[5,6,4]))`,
        stdOutput:"[ 7, 0, 8 ]\n"
        
        
    },
    {
        id:3,
        title:"3. Longest Substring Without Repeating Characters",
        difficulty:"Medium",
        solution:"",
        topics:["Hash Table","String","Sliding Window"],
        description:'Given a string s, find the length of the longest substring without repeating characters.',
        examples:[
            {
               input:"s = 'abcabcbb'",
               output:"3"
            },
             {
                input:'s = "bbbbb"',
                output:"1"
             },
            {
                input:'s = "pwwkew"',
                output:"3"
            }],
        constraints:[
            {
                desc:"0 <= s.length <= 5 * 104"
            }
            ,{
                desc:"s consists of English letters, digits, symbols and spaces."
            },
           
        ],
       
        defaultCode:`var lengthOfLongestSubstring = function(s) {
    
        };
        console.log(lengthOfLongestSubstring('abcabcbb'))`,
        stdOutput:"3"
        
        
        
    },
    {
        id:4,
        title:"4. Median of Two Sorted Arrays",
        difficulty:"Hard",
        solution:"",
        topics:["Hash Table","String","Sliding Window"],
        description:'Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.The overall run time complexity should be O(log (m+n)).',
        examples:[
            {
               input:"nums1 = [1,3], nums2 = [2]",
               output:"2.00000"
            },
             {
                input:'nums1 = [1,2], nums2 = [3,4]',
                output:"2.50000"
             },
           ],
        constraints:[
            {
                desc:"nums1.length == m"
            }
            ,{
                desc:"nums2.length == n"
            },
            ,{
                desc:"0 <= m <= 1000"
            },
            ,{
                desc:"0 <= n <= 1000"
            },
            ,{
                desc:"1 <= m + n <= 2000"
            },
            ,{
                desc:"-10^6 <= nums1[i], nums2[i] <= 10^6 "
            },
           
        ],
        defaultCode:`var findMedianSortedArrays = function(nums1, nums2) {
    
        };
        console.log(findMedianSortedArrays([1,3],[2]))
        console.log(findMedianSortedArrays([1,2],[3,4]))`,
        stdOutput:"2\n2.5\n"
        
    },
    {
        id:5,
        title:"5. Longest Palindromic Substring",
        difficulty:"Medium",
        solution:"",
        topics:["Hash Table","String","Sliding Window"],
        description:'Given a string s, return the longest palindromic substring in s.',
        examples:[
            {
               input:`s = "babad"`,
               output:`"bab"`
            },
             {
                input:'s = "cbbd"',
                output:`"bb"`
             },
           ],
        constraints:[
            {
                desc:"1 <= s.length <= 1000"
            }
            ,{
                desc:"s consist of only digits and English letters."
            },
            
           
        ],
        defaultCode:`var longestPalindrome = function(s) {
    
        };
        console.log(longestPalindrome("babad"))`,
        stdOutput:"bab"
        
    },
    {
        id:6,
        title:"6. Reverse Integer",
        difficulty:"Medium",
        solution:"",
        topics:["Hash Table","String","Sliding Window"],
        description:`Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

        Assume the environment does not allow you to store 64-bit integers (signed or unsigned).`,
        examples:[
            {
               input:"x = 123",
               output:"321"
            },
             {
                input:' x = -123',
                output:"-321"
             },
             {
                input:"x=120",
                output:"21"
             }
           ],
        constraints:[
            {
                desc:"-2^31 <= x <= 2^31 - 1"
            }
            
           
        ]
        ,defaultCode:`var reverse = function(x) {
    
        };
        console.log(reverse(123))`,
        stdOutput:"321"
        
    },
    {
        id:7,
        title:"7. Palindrome Number",
        difficulty:"Easy",
        solution:"",
        topics:["Math"],
        description:'Given an integer x, return true if x is a palindrome, and false otherwise.',
        examples:[
            {
               input:"x = 121",
               output:"true"
            },
             {
                input:'x = -121',
                output:"false"
             },
             {
                input:"x = 10",
                output:"false"
             }
           ],
        constraints:[
            {
                desc:"-231 <= x <= 231 - 1"
            }
           
           
        ],
        defaultCode:`var isPalindrome = function(x) {
    
        };
        console.log(isPalindrome(121))`,
        stdOutput:"true"
        
    },
    {
        id:8,
        title:"8. Container With Most Water",
        difficulty:"Medium",
        solution:"",
        topics:["array","two pointer","greedy"],
        description:`You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

        Find two lines that together with the x-axis form a container, such that the container contains the most water.
        
        Return the maximum amount of water a container can store.
        
        Notice that you may not slant the container.`,
        examples:[
            {
               input:"height = [1,8,6,2,5,4,8,3,7]",
               output:"49"
            },
             {
                input:'height = [1,1]',
                output:"1"
             },
           ],
        constraints:[
            {
                desc:"n == height.length"
            }
            ,{
                desc:"2 <= n <= 105"
            },
            ,{
                desc:"0 <= height[i] <= 104"
            },
            
        ],
        defaultCode:`var maxArea = function(height) {
    
        };
        console.log(maxArea([1,8,6,2,5,4,8,3,7]))`,
        stdOutput:"49"
        
    },
    
    {
        id:9,
        title:"9.  Integer to Roman",
        difficulty:"Medium",
        solution:"",
        topics:["Hash Table","String","Math"],
        description:`Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

        Symbol       Value
        I             1
        V             5
        X             10
        L             50
        C             100
        D             500
        M             1000
        For example, 2 is written as II in Roman numeral, just two one's added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.
        
        Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:
        
        I can be placed before V (5) and X (10) to make 4 and 9. 
        X can be placed before L (50) and C (100) to make 40 and 90. 
        C can be placed before D (500) and M (1000) to make 400 and 900.
        Given an integer, convert it to a roman numeral.`,
        examples:[
            {
               input:"num = 3",
               output:`"III"`
            },
             {
                input:'num = 58',
                output:`"LVIII"`
             },
           ],
        constraints:[
            {
                desc:"1 <= num <= 3999"
            }
            
           
        ],defaultCode:`var intToRoman = function(num) {
    
        };
        console.log(intToRoman(3))`,
        stdOutput:"III"
        
    },
    {
        id:10,
        title:"10. Roman to Integer",
        difficulty:"Easy",
        solution:"",
        topics:["Hash Table","String","Math"],
        description:`Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

        Symbol       Value
        I             1
        V             5
        X             10
        L             50
        C             100
        D             500
        M             1000
        For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.
        
        Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:
        
        I can be placed before V (5) and X (10) to make 4 and 9. 
        X can be placed before L (50) and C (100) to make 40 and 90. 
        C can be placed before D (500) and M (1000) to make 400 and 900.
        Given a roman numeral, convert it to an integer.`,
        examples:[
            {
               input:`s = "III"`,
               output:"3"
            },
             {
                input:'s = "LVIII"',
                output:"58"
             },
           ],
        constraints:[
            {
                desc:"1 <= s.length <= 15"
            }
            ,{
                desc:"s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M')."
            },
            ,{
                desc:"It is guaranteed that s is a valid roman numeral in the range [1, 3999]."
            },
            
        ],
        defaultCode:`
        var romanToInt = function(s) {
    
        };
        console.log(romanToInt("III"))`,
        stdOutput:"3"
        
    },
    {
        id:11,
        title:"11 .Longest Common Prefix",
        difficulty:"Easy",
        solution:"",
        topics:["Hash Table","String","Sliding Window"],
        description:`Write a function to find the longest common prefix string amongst an array of strings.

        If there is no common prefix, return an empty string "".`,
        examples:[
            {
               input:`strs = ["flower","flow","flight"]`,
               output:`"fl"`
            },
             {
                input:` strs = ["dog","racecar","car"`,
                output:`""`
             },
           ],
        constraints:[
            {
                desc:"1 <= strs.length <= 200"
            }
            ,{
                desc:"0 <= strs[i].length <= 200"
            },
            ,{
                desc:"strs[i] consists of only lowercase English letters."
            },
           
           
        ],
        defaultCode:`var longestCommonPrefix = function(strs) {
    
        };
        console.log(longestCommonPrefix(["flower","flow","flight"]))`,
        stdOutput:"fl"
        
    },
    {
        id:12,
        title:"12. 3Sum",
        difficulty:"Medium",
        solution:"",
        topics:["Array"],
        description:`Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

        Notice that the solution set must not contain duplicate triplets.`,
          examples:[
            {
               input:"nums = [-1,0,1,2,-1,-4]",
               output:"[[-1,-1,2],[-1,0,1]]"
            },
             {
                input:'nums = [0,1,1]',
                output:"[]"
             },
           ],
        constraints:[
            {
                desc:"3 <= nums.length <= 3000"
            }
            ,{
                desc:"-105 <= nums[i] <= 105"
            },
           
           
        ]
        ,defaultCode:`var threeSum = function(nums) {
    
        };
        console.log(threeSum([-1,0,1,2,-1,-4]))`,
        stdOutput:"[[-1,-1,2],[-1,0,1]]",
        
    },
]