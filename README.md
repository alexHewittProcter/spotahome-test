# spotahome-test
## Build
Both the server and web sides are built using node.

The backend server is built using express it collects from the first URL for teh Id's of the 30 cards, then collects all the information from the second URL.

The web side uses React with a few custom components and use of CSS.
## Deploy
To individually run either the front or back end you can simply write in the command line, inside the web or api folders
```bash
    npm start
```

However both services will need to be running to properly work. A docker compose file is amoungst the files to run both services using this simply build the file using from the command line of the main file :
```bash
    docker-compose build
```
Then once the file has been built, you can then write in your command line:
```bash
    docker-compose up
```
## Test
Tests can be deployed using any other script, the api that collects the homecards allows CORS.