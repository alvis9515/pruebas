document.addEventListener("DOMContentLoaded", function () {
    fetch("resultado.json")
        .then((response) => response.json())
        .then((data) => {
            const tableBody = document.querySelector("#results-table tbody");

            data.forEach((item) => {
                const row = document.createElement("tr");

                const hostCell = document.createElement("td");
                hostCell.textContent = item.host;
                row.appendChild(hostCell);

                const nameCell = document.createElement("td");
                nameCell.textContent = item.name;
                row.appendChild(nameCell);

                const statusCell = document.createElement("td");
                statusCell.textContent = item.status ? "True" : "False";
                row.appendChild(statusCell);

                tableBody.appendChild(row);
            });
        })
        .catch((error) => console.error("Error fetching data:", error));
});
