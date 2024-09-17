API Documentation
1. Get Top 10 Cryptocurrencies
Endpoint: /api/getTop10/
Method: GET
Description: Retrieves a list of the top 10 cryptocurrencies from the backend server.
Request
URL: http://localhost:8080/api/getTop10/
Headers: None required.
Response
Content-Type: application/json

Status Codes:

200 OK - Successful request.
500 Internal Server Error - Server-side error.
Response Body: Array of cryptocurrency objects.

json
Copy code
[
  {
    "_id": "60f5d9c1c5291a123456789",
    "name": "Bitcoin",
    "base_unit": "btc",
    "buy": 5000000,
    "sell": 4990000,
    "last": 5050000
  },
  {
    "_id": "60f5d9c1c5291a123456780",
    "name": "Ethereum",
    "base_unit": "eth",
    "buy": 300000,
    "sell": 299000,
    "last": 305000
  }
]
Error Handling
Network Errors: If the fetch request fails (e.g., due to network issues), an error is logged, and the loading state is updated accordingly.
Routes
Frontend Routes
The Content component does not handle routing directly but relies on the overall application routing to display content within the page.

Backend Routes
Route: /api/getTop10/
Purpose: To fetch and return the top 10 cryptocurrencies.
Method: GET
Response: JSON array of cryptocurrency data.
Database Schema
Cryptocurrency Collection
The MongoDB database contains a collection named cryptocurrencies. Each document in this collection has the following structure:

Document Structure
json
Copy code
{
  "_id": "ObjectId",
  "name": "String",
  "base_unit": "String",
  "buy": "Number",
  "sell": "Number",
  "last": "Number"
}
Fields
_id: Unique identifier for the cryptocurrency.
name: Name of the cryptocurrency (e.g., Bitcoin, Ethereum).
base_unit: The base unit of the cryptocurrency (e.g., BTC, ETH).
buy: The current buy price of the cryptocurrency.
sell: The current sell price of the cryptocurrency.
last: The last traded price of the cryptocurrency.
Component Breakdown
State
data: Stores the fetched cryptocurrency data.
isLoading: Indicates whether the data is being fetched.
Lifecycle Methods
componentDidMount(): Initiates data fetching when the component mounts.
Methods
getData(): Fetches data from the API and handles the loading state.
Rendering
Loader: Displays a loading spinner while data is being fetched.
Table: Displays cryptocurrency data in a table format, with conditional styling based on dark mode.
Context Providers
DisplayContext: Provides dark mode styling.
CryptoContext: Provides the selected cryptocurrency for filtering.
RefetchContext: Allows triggering data refetch.
