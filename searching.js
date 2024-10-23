const lyrics = 'we live in Bangladesh.We always Love our country';
const doesExist ='love';
const searchString = lyrics.toLowerCase().includes(doesExist.toLowerCase());
console.log(searchString);
console.log(lyrics.indexOf('kailla')==-1);

//startswith endswith

const fileName = 'mybiodata.pdf';
const otherFile = 'mypic.png';

console.log(fileName.startsWith('my'));
console.log(otherFile.endsWith('.png'));