# The NodeJS Express React Redux Data (Nerrd) Viewer

Welcome to Nerrd, an exercise to build a table view of a large amount of data with sort and filter features.

The project is divided into a Server side and a Client side, rooted under the Server and Client directories, respectively. 
The Server is a Nodejs Express server that serves mock data on port 5000. 

Rather than tie in a database, which is not part of the exercise, I'm using data files to keep things tight. 

To start the server, start a terminal and:

    cd Server/src
    node server.js

Then point a browser to [localhost:5000/mock_data](http://localhost:5000/mock_data) to see a small sample of the data.
