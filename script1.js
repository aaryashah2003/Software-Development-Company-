document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("requirements-form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        // Add your validation logic here
        const clientName = document.getElementById("client-name").value;
        const projectName = document.getElementById("project-name").value;

        if (!clientName || !projectName) {
            alert("Client Name and Project Name are required fields.");
            return;
        }

        // You can continue validating other fields and handling form submission.
        // If everything is valid, you can submit the form to the server.
        // Example: form.submit();
    });
});

// JavaScript code (script.js)
document.addEventListener('DOMContentLoaded', function () {
    const startDateInput = document.getElementById('start-date');
    const endDateInput = document.getElementById('end-date');
    const tableBody = document.querySelector('#date-range-table tbody');

    // Function to generate date range
    function generateDateRange(startDate, endDate) {
        const dateRange = [];
        const currentDate = new Date(startDate);
        endDate = new Date(endDate);

        while (currentDate <= endDate) {
            dateRange.push(new Date(currentDate));
            currentDate.setDate(currentDate.getDate() + 1);
        }

        return dateRange;
    }

    // Function to update the table with the date range
    function updateTable(startDate, endDate) {
        const dateRange = generateDateRange(startDate, endDate);

        // Clear existing rows
        tableBody.innerHTML = '';

        // Populate the table with date range
        dateRange.forEach(date => {
            const row = document.createElement('tr');

            // Create cells for day, month, date, and year
            const dayCell = document.createElement('td');
            const monthCell = document.createElement('td');
            const dateCell = document.createElement('td');
            const yearCell = document.createElement('td');

            // Extract day, month, date, and year from the date object
            const day = date.toLocaleDateString('en-US', { weekday: 'short' });
            const month = date.toLocaleDateString('en-US', { month: 'short' });
            const dateNum = date.getDate();
            const year = date.getFullYear();

            // Set the content of the cells
            dayCell.textContent = day;
            monthCell.textContent = month;
            dateCell.textContent = dateNum;
            yearCell.textContent = year;

            // Append cells to the row
            row.appendChild(dayCell);
            row.appendChild(monthCell);
            row.appendChild(dateCell);
            row.appendChild(yearCell);

            // Append the row to the table body
            tableBody.appendChild(row);
        });
    }

    // Event listener for changes in start and end dates
    startDateInput.addEventListener('change', function () {
        updateTable(startDateInput.value, endDateInput.value);
    });

    endDateInput.addEventListener('change', function () {
        updateTable(startDateInput.value, endDateInput.value);
    });
});

