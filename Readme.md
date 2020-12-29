node.js console canvas 1.0:
This is a command line tool which allows to create a canvas in console and drawing of some basic objects such as line,
rectangle. 

Getting Started:

Pre-requisities:
Node.js 
Mocha 8.2.1 or higher

Code structure: 
Root folder 
    - package.json => application config file
    - index.js => main entry point of application 
    - components
        - consoleCanvas.js => module containing functions to create canvas in console and draw objects 
        - commands.js => module containing functions to execute commands sent by user 
        - cmdParser.js => module conaining functions to parse user input and run the command for the same
    - test
        - canvasTest.js => unit tests for console canvas functions

Running Application:
To run the application, run command => npm run main
To execute unit tests, run command => npm test