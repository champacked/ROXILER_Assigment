The API server should be running at http://localhost:3000.

Testing with Postman
Postman is a popular API testing tool that simplifies the process of sending requests to your API endpoints.

Open Postman.

Set the request method (GET, POST, etc.) and enter the API endpoint URL. For example:

Initialize Database: GET http://localhost:3000/initialize-database
List Transactions: GET http://localhost:3000/list-transactions?month=January
Statistics: GET http://localhost:3000/statistics?month=January
Bar Chart: GET http://localhost:3000/bar-chart?month=January
Pie Chart: GET http://localhost:3000/pie-chart?month=January
Combined API: GET http://localhost:3000/combined-api?month=January
Add any required parameters or headers.

Click the "Send" button to make the request.

API Endpoints
Initialize Database
Endpoint: GET /initialize-database
Description: Initializes the database with seed data from a third-party API. 

List Transactions
Endpoint: GET /list-transactions
Description: Lists all transactions based on the provided month.
Statistics
Endpoint: GET /statistics
Description: Provides total sale amount, total sold items, and total not sold items for the selected month.
Bar Chart
Endpoint: GET /bar-chart
Description: Provides data for a bar chart, including price ranges and the number of items in each range for the selected month.
Pie Chart
Endpoint: GET /pie-chart
Description: Provides data for a pie chart, including unique categories and the number of items from each category for the selected month.
Combined API
Endpoint: GET /combined-api
Description: Fetches data from all the above APIs, combines the response, and sends a final response of the combined JSON.
