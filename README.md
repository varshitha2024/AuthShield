# AuthShield

AuthShield is a Node.js application that provides user authentication and authorization using JWT. It includes routes for user registration, login, and an admin page that is accessible only to users with the admin role.

## Prerequisites

- Node.js
- npm
- MongoDB

## Installation

1. Clone the repository:

    ```sh
    git clone https://github.com/varshitha2024/AuthShield.git
    cd AuthShield
    ```

2. Install the dependencies:

    ```sh
    npm install
    ```

3. Create a [.env](http://_vscodecontentref_/0) file in the root directory and add the following environment variables:

    ```properties
    PORT=3000
    mongo_url="your_mongodb_connection_string"
    ACCESS_TOKEN_SECRET="your_secret_key"
    ```

4. Start the server:

    ```sh
    npm run dev
    ```

