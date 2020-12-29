
const cmdParser = require('./components/cmdParser')

const main = async() => {

    console.log('node js console canvas 1.0');
    
    process.stdout.write('enter command: ');
    process.stdin.resume();
    process.stdin.setEncoding('utf8');
    process.stdin.on('data',line => {
        cmdParser.parseCmd(line.trim().toLowerCase());
        process.stdout.write('enter command: ');
    });
}

//entry point
main()
