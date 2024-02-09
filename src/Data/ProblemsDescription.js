export const problemDesc=[
    {
        id:1,
        title:"1.Two Sum",
        difficulty:"Easy",
        solution:"",
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
        ]
        
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
        ]
        
        
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
           
        ]
        
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
           
        ]
        
    },
    {
        id:5,
        title:"5. Longest Palindromic Substring",
        difficulty:"Medium",
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
           
        ]
        
    },
    {
        id:6,
        title:"6. Reverse Integer",
        difficulty:"Medium",
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
           
        ]
        
    },
    {
        id:7,
        title:"7. Palindrome Number",
        difficulty:"Easy",
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
           
        ]
        
    },
    {
        id:8,
        title:"8. Container With Most Water",
        difficulty:"Medium",
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
           
        ]
        
    },
    {
        id:9,
        title:"9. Integer to Roman",
        difficulty:"Easy",
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
           
        ]
        
    },
    {
        id:10,
        title:"10. Roman to Integer",
        difficulty:"Easy",
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
           
        ]
        
    },
    {
        id:11,
        title:"14. Longest Common Prefix",
        difficulty:"Easy",
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
           
        ]
        
    },
    {
        id:12,
        title:"12. Valid Parentheses",
        difficulty:"Medium",
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
           
        ]
        
    },
    {
        id:13,
        title:"13. 3Sum",
        difficulty:"Medium",
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
           
        ]
        
    },
]