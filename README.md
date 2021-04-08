# Sorting Visualizer
This is a web application that I built as a pet project while beginning to learn ReactJS. It can essentially visualize the entire process of how sorting algorithms work. The control panel contains all the functionalities for the user to freely explore these and learn more about their wonders.
<br>

The app is hosted using Github Pages and is available here : [vraj291.github.io/Sorting-Visualizer](http://vraj291.github.io/Sorting-Visualizer)
<br>

A snapshot of the website: 
<br>

![Sort Visualizer](https://i.imgur.com/mrhRDcT.png?1)

## The Idea

The main idea was to build a modern web app that could be used to visualize the mysterious ways in which the sorting world works. I wanted to realize the most commonly used algorithms as independent implemenatations seperated from the the entire asynchronous visualizing process. The algorithms all produce traces of their procedures in the form of independent swapping and comparison steps. This trace is then available to be played around using the console bar. The trace can be played as a complete entity or individual steps can be accessed manually. This was supposesd to be my first project with React and it didnt dissappoint in the sense of being hard to make me learn more.
 
## The Algorithms

The various algorithms available to be meddled with are as follows:
- Bubble Sort
- Selection Sort
- Insertion Sort
- Merge Sort
- Quick Sort
- Radix Sort
- Bucket Sort
- Heap Sort
- Cycle Sort

I tried to implement the algorithms that I found the most interesting. The Info Component offers a brief overview of the corresponding algorithm. They sort randomly generated data and show each step seperately be it a swap or a comparison. 

## The Features

The main component is the Sort Chart made up of bars representing the values of the array. The App Console allows the user to play and pause the animation or the visualization of the sorting process at any time. The previous and next steps can also be toggled to manually once paused. The animation can also be skipped to the end i.e. to a fully sorted array once the continuously shifting bars bore you out. 
<br>

The Settings allow for dynamic change in the speed of the animation and the length of the array in question. The specific colors for each type of visualizations can also be manually changes using the Hue Slider. The app also has a dark mode feature which can be toggled using a radio button.
<br>

Each specific part of the final app is a seperate component designed keeping in the mind the commlnly used practices in ReactJS. Each component has two seperate files one for the JS implementation and other for CSS styles. The algorithms are implementated in a seperate folder and being completely independent of the React App and its animatations, they can be used as seperate standardized library code implementations of the corresponding algorithms in Javascript. 

## The Project

The app is already deployed so you can play around with the final product using this [link](http://vraj291.github.io/Sorting-Visualizer).

If you wish to run this app locally, clone this repo and install the dependencies.

```
$ git clone https://github.com/vraj291/Sorting-Visualizer.git
$ cd Sorting-Visualizer
$ npm install
```

### Learn More

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

