const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
    ['**********'] : ' ',
};

function decode(expr) {
  let decoded = ''
  let nums = expr.match(/\d{10}/)
  for ( let i = 0; i < expr.length; i += 10) {
    let space = expr.slice(i, i + 10)
    nums.push(space)
  }
    decoded = nums.reduce((sum, morse) => {
    sum = sum + MORSE_TABLE[morse.replace(/00/g, '').replace(/10/g, '.').replace(/11/g, '-')] 
    return sum
  }, '')
 return decoded.substring(1)
}

module.exports = {
    decode
}