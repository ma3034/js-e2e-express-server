---
page_type: sample
languages:
- javascript
- nodejs
name: "JavaScript end-to-end Express.js server"
description: "This project is used instead of the previous express-generator."
products:
- azure
- vs-code
---

# JavaScript end-to-end client file upload to Azure Storage Blobs

This is a basic Express.js server used for JS Dev Experience documentation, in place of the previously used express generator. 

1. Clone repo.

1. Install dependencies: 

    ```bash
    npm install
    ```

1. Configure environment variable name for port in `./src/index.js`.

    * Azure App Service on Linux: process.env.WEB_PORT
    * Azure App Service on Windows native: process.env.PORT

1. Start project: 

    ```bash
    npm start
    ```

# js-e2e-express-server

This project is an Express.js server with a simple client UI.

## Features
- Serves a static HTML client with modern CSS.
- `/api/dogs` endpoint fetches and displays the top 10 random dog images and their breed names using the public https://dog.ceo/dog-api/.
- Basic error handling and logging.

## How to Run
1. Install dependencies:
   ```sh
   npm install
   ```
2. Start the server:
   ```sh
   npm start
   ```
3. Open your browser and go to `http://localhost:3000` to see the top 10 dogs.

## API
- `GET /api/dogs`: Returns an array of 10 random dog images and their breed names.

## Recent Changes
- Updated `/api/dogs` endpoint to fetch 10 random dogs from the public dog.ceo API and extract breed names from image URLs.
- Improved client HTML and CSS for a modern look.

## Contributions

* Legal files: If your PR removes the legal files, you PR will be closed. 
* Azure Pipelines: Azure pipeline example files should be put in the `azure-pipelines` directory. The file name should indicate the type of pipeline. That should be the only file in your PR or it will be closed. 


## Resources 

* [Dev Containers](docs/devcontainer.md)
* [Sample: App Service full stack with Authentication](https://github.com/azure-samples/js-e2e-web-app-easy-auth-app-to-app)
* [Samples: Azure TypeScript end to end](https://github.com/azure-samples/azure-typescript-e2e-apps)