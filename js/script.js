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

// Get the current page URL
const currentPage = window.location.pathname;

// Get all the nav links
const navLinks = document.querySelectorAll('.nav-link a');

// Loop through the links and add 'active' to the matching one
navLinks.forEach(link => {
  if (link.href.includes(currentPage)) {
    link.classList.add('active');
  }
});

function showOrder(orderType) {
  // Hide all order tables
  let orderTables = document.querySelectorAll(".order-table table, .custom-orders-table table");
  orderTables.forEach(table => {
    table.style.display = "none";
  });

  // Show the selected regular order table
  document.getElementById('orders-' + orderType).style.display = "table";

  // Show the selected custom order table
  document.getElementById('custom-' + orderType).style.display = "table";
}