const canvas = require('./consoleCanvas')

/**
 * function to validate and execute canvas command
 *
 * @param {string array} args - command entered by user
 */
const canvasCommand = args => {
    //function to return command usage
    const usage = () => 'usage: c <width> <height>'

    //function to validate command arguments 
    const validate = args => {
        if(args.length !== 3 ) 
        {
            console.log('invalid canvas command. ',usage())
            return false
        }

        if(isNaN(args[1]) || isNaN(args[2]) ) 
        {
            console.log('canvas width and height should be numbers. ',usage())
            return false
        }
        return true
    }

    //validate command arguments 
    if(!validate(args))
    {
        return 
    }
    //execute command 
    let width = parseInt(args[1]);
    let height = parseInt(args[2]);
    canvas.create(width,height)
    canvas.redraw()
}

/**
 * function to validate and execute line command
 *
 * @param {string array} args - command entered by user
 */
const lineCommand = args => {
    //function to return command usage
    const usage = () => 'usage: l <x1> <y1> <x2> <y2>'

    //function to validate command arguments 
    const validate = args => {
        if(!canvas.isReady()) {
            console.log('create a canvas first...');
            return false
        }

        if(args.length !== 5 ) 
        {
            console.log('invalid line command. ',usage())
            return false 
        }

        if(isNaN(args[1]) 
            || isNaN(args[2]) 
            || isNaN(args[3])
            || isNaN(args[4]) ) 
        {
            console.log('line coordinates should be numbers. ',usage())
            return false 
        }

        if(!(args[1] === args[3] || args[2] === args[4]))
        {
            console.log('invalid line coordinates...')
            return false
        }
        return true
    }

    //validate command arguments 
    if(!validate(args))
    {
        return 
    }

    //execute command 
    let x1 = parseInt(args[1]);
    let y1 = parseInt(args[2]);
    let x2 = parseInt(args[3]);
    let y2 = parseInt(args[4]);

    canvas.drawLine(x1,y1,x2,y2)
    canvas.redraw()
}

/**
 * function to validate and execute rectangle command
 *
 * @param {string array} args - command entered by user
 */
const rectCommand = args => {
    //function to return command usage
    const usage = () => 'usage: r <x1> <y1> <x2> <y2>'

    //function to validate command arguments 
    const validate = args => {
        if(!canvas.isReady()) {
            console.log('create a canvas first...');
            return false
        }

        if(args.length !== 5 ) 
        {
            console.log('invalid rectangle command. ',usage())
            return false 
        }

        if(isNaN(args[1]) 
            || isNaN(args[2]) 
            || isNaN(args[3])
            || isNaN(args[4]) ) 
        {
            console.log('rectangle coordinates should be numbers. ',usage())
            return false 
        }

        if(args[1] === args[3] || args[2] === args[4])
        {
            console.log('invalid rectangle coordinates...')
            return false
        }
        return true
    }

    //validate command arguments 
    if(!validate(args))
    {
        return 
    }

    //execute command 
    let x1 = parseInt(args[1]);
    let y1 = parseInt(args[2]);
    let x2 = parseInt(args[3]);
    let y2 = parseInt(args[4]);

    canvas.drawRectangle(x1,y1,x2,y2)
    canvas.redraw()
}

/**
 * function to validate and execute bucket fill command
 *
 * @param {string array} args - command entered by user
 */
const bucketFillCommand = args => {
    //function to return command usage
    const usage = () => 'usage: b <x> <y> <pen>'

    //function to validate command arguments 
    const validate = args => {
        if(!canvas.isReady()) {
            console.log('create a canvas first...');
            return false
        }

        if(args.length !== 4 ) 
        {
            console.log('invalid bucketfill command. ',usage())
            return false 
        }

        if(isNaN(args[1]) || isNaN(args[2])) 
        {
            console.log('x, y coordinates of bucketfill command should be numbers. ',usage())
            return false 
        }

        let pen = args[3];
        if(!isNaN(pen))
        {
            console.log('pen should be a single character')
            return false
        }

        if(pen.length > 1)
        {
            console.log('pen should be a single character')
            return false
        }

        return true
    }

    //validate command arguments 
    if(!validate(args))
    {
        return 
    }

    let x = parseInt(args[1]);
    let y = parseInt(args[2]);
    let pen = args[3];

    canvas.bucketFill(x,y,pen)
    canvas.redraw()

}

/**
 * exported functions of module 
 */
module.exports = {
    canvasCommand,
    lineCommand,
    rectCommand,
    bucketFillCommand,
}