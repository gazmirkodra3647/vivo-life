/*
Filename: ComplexExample.js
Content: This code demonstrates a complex example of a web application that fetches data from an API, performs calculations, and displays the results dynamically in the user interface.
*/

// Import necessary libraries
import axios from 'axios';
import { Chart } from 'chart.js';

// Define global variables
let data = [];
let labels = [];

// Fetch data from an API endpoint
axios.get('https://api.example.com/data')
  .then(response => {
    data = response.data.map(item => item.value);
    labels = response.data.map(item => item.label);

    // Perform complex calculations on the data
    const sum = data.reduce((accumulator, value) => accumulator + value, 0);
    const average = sum / data.length;

    const sortedData = [...data].sort((a, b) => a - b);
    const minValue = sortedData[0];
    const maxValue = sortedData[sortedData.length - 1];

    // Dynamically display the results in the UI
    const resultsContainer = document.getElementById('results');

    const sumElement = document.createElement('p');
    sumElement.textContent = `Sum: ${sum}`;
    resultsContainer.appendChild(sumElement);

    const averageElement = document.createElement('p');
    averageElement.textContent = `Average: ${average}`;
    resultsContainer.appendChild(averageElement);

    const minValueElement = document.createElement('p');
    minValueElement.textContent = `Min Value: ${minValue}`;
    resultsContainer.appendChild(minValueElement);

    const maxValueElement = document.createElement('p');
    maxValueElement.textContent = `Max Value: ${maxValue}`;
    resultsContainer.appendChild(maxValueElement);

    // Generate a chart to visualize the data
    const chartContainer = document.getElementById('chart');

    new Chart(chartContainer, {
      type: 'bar',
      data: {
        labels,
        datasets: [{
          label: 'Data',
          data,
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  })
  .catch(error => {
    console.error('Error:', error);
  });