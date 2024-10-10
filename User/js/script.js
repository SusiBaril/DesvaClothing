document.querySelectorAll('.quick-view-btn').forEach(function(btn) {
    btn.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior

        // Close any currently open product detail
        document.querySelectorAll('.product-detail').forEach(function(detail) {
            detail.style.display = 'none';
        });

        // Open the product detail of the clicked card
        var productDetail = this.parentNode.querySelector('.product-detail');
        productDetail.style.display = 'block'; // Show the product details
    });
});

document.querySelectorAll('.close-btn').forEach(function(closeBtn) {
    closeBtn.addEventListener('click', function() {
        this.closest('.product-detail').style.display = 'none'; // Close the details
    });
});