const cmds = require('./commands')

/**
 * function to parse, validate and execute commands entered in console 
 * uses the canvas module functions to execute the canvas based commands
 *
 * @param {string} line - command entered by user
 */
const parseCmd = line => {
    if(line === '') 
    {
        console.log('invalid command...');
        return 
    }

    if(line === 'q') {
        console.log('exiting node.js console canvas...');
        process.exit(0);
    }

    const params = line.split(' ');
    switch(params[0])
    {
        case 'c':
            cmds.canvasCommand(params)
            break;

        case 'l':
            cmds.lineCommand(params)
            break;

        case 'r':
            cmds.rectCommand(params)
            break;

        case 'b':
            cmds.bucketFillCommand(params)
            break;

        default:
            console.log('invalid canvas command');
            break;
    }
}

/**
 * exported functions of module 
 */
module.exports = {
    parseCmd,
}