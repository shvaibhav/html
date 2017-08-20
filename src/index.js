import txt from './TheJungleBookMetaData.txt';
// just so that it copies this file to dist
require('./index.html');

// main
function main(){
    $(function(){
        $('.text-container').text(txt);
        console.log(txt);
    });
    console.log('hello world');
}

// run main()
main();

