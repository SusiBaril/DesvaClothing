const ctx = document.getElementById('linechart');

new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'], // Months of the year
    datasets: [{
      label: 'Monthly Data',
      data: [12, 19, 3, 5, 2, 3, 8, 10, 6, 14, 7, 11], // Sample data for each month
      borderWidth: 1,
      borderColor: '#191715', // Line color
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