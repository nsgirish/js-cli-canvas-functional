/**
 * module level constants to store default values for padding, pen etc.,
 */
const PADDING = 2
const DEFAULTCHAR = ' '
const ROWBOUNDARY = '-'
const COLBOUNDARY = '|'
const DEFAULTPEN = '*'

/**
 * module level data members to store internal canvas buffer and its width and height
 */
let canvasBuffer = null
let rows = 0
let cols = 0

/**
 * function to check whether canvas buffer has been initialized
 *
 * @returns {bool} indicating canvas buffer has been initialized
 */
const isReady = () => canvasBuffer !== null

/**
 * function to init the console canvas  
 *
 * @param {int} width - width of canvas
 * @param {int} height - height of canvas
 */
const create = (width,height) => {
    rows = height + PADDING 
    cols = width + PADDING
    canvasBuffer = new Array(rows)

    for(let rowIndex=0;rowIndex<rows;rowIndex++)
    {
        canvasBuffer[rowIndex] = new Array(cols)
        for(let colIndex=0;colIndex<cols;colIndex++)
        {
            if(rowIndex == 0 || rowIndex == rows-1)
            {
                canvasBuffer[rowIndex][colIndex] = ROWBOUNDARY
            }
            else 
            {
                if(colIndex == 0 || colIndex == cols-1) 
                {
                    canvasBuffer[rowIndex][colIndex] = COLBOUNDARY 
                }
                else 
                {
                    canvasBuffer[rowIndex][colIndex] = DEFAULTCHAR
                }
            }
        }
    }
}

/**
 * function to draw canvas on console
 */
const redraw = () => {
    let line = ''
    canvasBuffer.forEach(row => {
        row.forEach(col => line += col)
        console.log(line)
        line = ''
    })
}

/**
 * function to draw line in canvas
 *
 * @param {int} x1 - top
 * @param {int} y1 - left
 * @param {int} x2 - right
 * @param {int} y2 - bottom
 * @param {char} pen - alphabet used to draw line
 */
const drawLine = (x1,y1,x2,y2,pen=DEFAULTPEN) => {
    if(!isReady()) 
    {
        return
    }

    if(x1 < 1) 
    {
        x1=1;
    }
    if(y1 < 1) 
    {
        y1 = 1;
    }
    if(x2 > cols-2)
    {
        x2 = cols-2;
    }
    if(y2 > rows-2) 
    {
        y2 = rows-2;
    }
    if(x1 == x2 ) {
        //vertical line
        for(let y=y1;y<=y2;++y) {
            canvasBuffer[y][x1] = pen;
        }
    }
    else if(y1 == y2) {
        //horizontal line
        for(let x=x1;x<=x2;++x) {
            canvasBuffer[y1][x] = pen;
        }
    }
    else 
    {
        //rectangle
        for(let y=y1;y<=y2;++y) 
        {
            for(let x=x1;x<=x2;++x) 
            {
                if(y==y1 || y==y2) 
                {
                    canvasBuffer[y][x] = pen;
                }
                else 
                {
                    canvasBuffer[y][x] = (x==x1 || x==x2) ? pen : ' ';
                }
            }
        }
    }

}

/**
 * function to draw rectangle in canvas
 *
 * @param {int} x1 - top
 * @param {int} y1 - left
 * @param {int} x2 - right
 * @param {int} y2 - bottom
 * @param {int} pen - alphabet used to draw rectangle
 */
const drawRectangle = (x1,y1,x2,y2,pen=DEFAULTPEN) => {
    drawLine(x1,y1,x2,y2,pen)
}

/**
 * function to implement bucket fill in canvas
 *
 * @param {int} x - top
 * @param {int} y - left
 * @param {char} pen - alphabet used to bucket fill
 */
const bucketFill = (x,y,pen=DEFAULTPEN) => {
    if(!isReady()) 
    {
        return
    }

    if(x < 1 || x > cols-2)
    {
        return
    }
            
    if(y < 1 || y > rows-2)
    {
        return 
    }
        
    if(canvasBuffer[y][x] != ' ')
    {
        return 
    }
    
    canvasBuffer[y][x] = pen;

    //paint next / prev / top / bottom pixel in canvas 
    bucketFill(x-1,y,pen);
    bucketFill(x+1,y,pen);
    bucketFill(x,y-1,pen);
    bucketFill(x,y+1,pen);
}

const getWidth = () => width

const getHeight = () => height

const getBuffer = () => canvasBuffer.map(item => [...item])



/**
 * exported functions of module 
 */
module.exports = {
    create,
    redraw,
    isReady,
    drawLine,
    drawRectangle,
    bucketFill,
    getWidth,
    getHeight,
    getBuffer,
}
