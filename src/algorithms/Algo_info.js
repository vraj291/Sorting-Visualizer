import {bubble_sort} from './Bubble_Sort'
import {select_sort} from './Selection_Sort'
import {insertion_sort} from './Insertion_Sort'
import {merge_sort} from './Merge_Sort'
import {quick_sort} from './Quick_Sort'
import {radix_sort} from './Radix_Sort'
import {bucket_sort} from './Bucket_Sort'
import {heap_sort} from './Heap_Sort'
import {cycle_sort} from './Cycle_sort'

export const list_algos = [{
        value: 'SS',
        label:'Selection Sort',
        desc:`Selection sort is a simple comparison-based sorting algorithm. 
              It is in-place and needs no extra memory.
              The idea behind this algorithm is pretty simple. 
              The array is divided into two parts: sorted and unsorted. 
              The left part is sorted subarray and the right part is unsorted subarray. 
              Initially, sorted subarray is empty and unsorted array is the complete given array.`,
        extra_info: 'https://en.wikipedia.org/wiki/Selection_sort',     
        best_time_comp: <span>O&#40;n<sup>2</sup>&#41;</span>,
        worst_time_comp: <span>O&#40;n<sup>2</sup>&#41;</span>,
        avg_time_comp: <span>O&#40;n<sup>2</sup>&#41;</span>,
        space_comp: <span>O&#40;1&#41;</span>,
        func: select_sort
    },
    {
        value: 'BS',
        label:'Bubble Sort',
        desc:`Bubble sort, also referred to as comparison sort, is a simple sorting algorithm that repeatedly goes through the list, compares adjacent elements and swaps them if they are in the wrong order. 
              This is the most simplest algorithm and inefficient at the same time.
              The code can be optimized by introducing an extra variable swapped.
              After each iteration, if there is no swapping taking place then, there is no need for performing further loops.
              Bubble sort is mainly used in educational purposes for helping students understand the foundations of sorting.`,
        extra_info: 'https://en.wikipedia.org/wiki/Bubble_sort',     
        best_time_comp:<span>O&#40;n&#41;</span>,
        worst_time_comp: <span>O&#40;n<sup>2</sup>&#41;</span>,
        avg_time_comp: <span>O&#40;n<sup>2</sup>&#41;</span>,
        space_comp:<span>O&#40;1&#41;</span>,
        func: bubble_sort
    },
    {
        value: 'IS',
        label:'Insertion Sort',
        desc:`Insertion sort is a simple sorting algorithm that works similar to the way you sort playing cards in your hands. 
              The array is virtually split into a sorted and an unsorted part. 
              Values from the unsorted part are picked and placed at the correct position in the sorted part.
              It is an in-place algorithm and is stable in nature.
              The insertion sort is used when the array is has a small number of elements or when there are only a few elements left to be sorted.`,
        extra_info: 'https://en.wikipedia.org/wiki/Insertion_sort',     
        best_time_comp:<span>O&#40;n&#41;</span>,
        worst_time_comp: <span>O&#40;n<sup>2</sup>&#41;</span>,
        avg_time_comp: <span>O&#40;n<sup>2</sup>&#41;</span>,
        space_comp:<span>O&#40;1&#41;</span>,
        func: insertion_sort
    },{
        value: 'MS',
        label:'Merge Sort',
        desc:` Merge Sort is a Divide and Conquer algorithm. 
               It divides the input array into two halves, calls itself for the two halves, and then merges the two sorted halves. 
               The merge() function is used for merging two halves. The merge(arr, l, m, r) is a key process 
               that assumes that arr[l..m] and arr[m+1..r] are sorted and merges the two sorted sub-arrays into one.
               Merge Sort is useful for sorting linked lists in O(nLogn) time.`,
        extra_info: 'https://en.wikipedia.org/wiki/Merge_sort',     
        best_time_comp:<span>O&#40;n*Log n&#41;</span>,
        worst_time_comp: <span>O&#40;n*Log n&#41;</span>,
        avg_time_comp: <span>O&#40;n*Log n&#41;</span>,
        space_comp:<span>O&#40;n&#41;</span>,
        func: merge_sort
    },{
        value: 'QS',
        label:'Quick Sort',
        desc:`QuickSort is a Divide and Conquer stable and in-place algorithm. 
              It picks an element as pivot and partitions the given array around the picked pivot. 
              In this version, the last element is chosen as the pivot. 
              The key process in quickSort is partition() which when given an array and an element x of array as pivot, 
              puts x at its correct position in sorted array and put all smaller elements (smaller than x) before x, and put all greater elements (greater than x) after x. 
              All this should be done in linear time.`,
        extra_info: 'https://en.wikipedia.org/wiki/Quick_sort',     
        best_time_comp:<span>O&#40;n*Log n&#41;</span>,
        worst_time_comp: <span>O&#40;n<sup>2</sup>&#41;</span>,
        avg_time_comp: <span>O&#40;n*Log n&#41;</span>,
        space_comp:<span>O&#40;Log n&#41;</span>,
        func: quick_sort
    },{
        value: 'RS',
        label:'Radix Sort',
        desc:`Radix sort is an integer sorting algorithm that sorts data with integer keys by grouping the keys by individual digits that share the same significant position and value (place value). 
              Radix sort uses counting sort as a subroutine to sort an array of numbers. 
              Because integers can be used to represent strings (by hashing the strings to integers), radix sort works on data types other than just integers. 
              The algorithm is not comparison-based and thus operates in linear time.`,
        extra_info: 'https://en.wikipedia.org/wiki/Radix_sort',     
        best_time_comp:<span>O&#40;n*w&#41;</span>,
        worst_time_comp: <span>O&#40;n*w&#41;</span>,
        avg_time_comp: <span>O&#40;n*w&#41;</span>,
        space_comp:<span>O&#40;n+w&#41;</span>,
        func: radix_sort
    },{
        value: 'BuS',
        label:'Bucket Sort',
        desc:`Bucket Sort is a sorting technique that sorts the elements by first dividing the elements into several groups called buckets. 
              The elements inside each bucket are sorted using any of the suitable sorting algorithms or recursively calling the same algorithm.
              The process of bucket sort can be understood as a scatter-gather approach. 
              The elements are first scattered into buckets then the elements of buckets are sorted. 
              Finally, the elements are gathered in order.`,
        extra_info: 'https://en.wikipedia.org/wiki/Bucket_sort',     
        best_time_comp:<span>O&#40;n&#41;</span>,
        worst_time_comp: <span>O&#40;n<sup>2</sup>&#41;</span>,
        avg_time_comp: <span>O&#40;n + n<sup>2</sup>/k + k&#41;</span>,
        space_comp:<span>O&#40;n*k&#41;</span>,
        func: bucket_sort
    },{
        value: 'HS',
        label:'Heap Sort',
        desc:`Heap sort is a comparison based sorting technique based on Binary Heap data structure. 
              It is similar to selection sort where we first find the maximum element and place the maximum element at the end. 
              The entire procedure starts with building a max heap from the input data.
              The largest or smallest element is popped from the front ad replaced with the last element in the heap.
              The tree is subsequently heapified and the process is repeated until the heap is empty.`,
        extra_info: 'https://en.wikipedia.org/wiki/Heap_sort',     
        best_time_comp: <span>O&#40;n*Log n&#41;</span>,
        worst_time_comp: <span>O&#40;n*Log n&#41;</span>,
        avg_time_comp: <span>O&#40;n*Log n&#41;</span>,
        space_comp: <span>O&#40;1&#41;</span>,
        func: heap_sort
    },
    {
        value: 'CS',
        label:'Cycle Sort',
        desc:`Cycle sort is a comparison based sorting algorithm which forces array to be factored into the number of cycles where each of them can be rotated to produce a sorted array.
              It is an in-place and unstable sorting algorithm.
              It is optimal in terms of number of memory writes. 
              It minimizes the number of memory writes to sort. 
              Each value is either written zero times, if it’s already in its correct position, or written one time to its correct position.
              It is based on the idea that array to be sorted can be divided into cycles. Cycles can be visualized as a graph.`,
        extra_info: 'https://en.wikipedia.org/wiki/Cycle_sort',     
        best_time_comp: <span>O&#40;n<sup>2</sup>&#41;</span>,
        worst_time_comp: <span>O&#40;n<sup>2</sup>&#41;</span>,
        avg_time_comp: <span>O&#40;n<sup>2</sup>&#41;</span>,
        space_comp:<span>O&#40;1&#41;</span>,
        func: cycle_sort
    }]