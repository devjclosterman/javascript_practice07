
// clear cookies by setting an 
// expiry date in the past
const clearCookies = document.cookie.split(';')
.forEach(cookie => {
    document.cookie = cookie.replace(/^ +/, '')
    .replace(/=.*/, `=;expires=${new Date(0)
        .toUTCString()};path=/`);
});

// reverse a string
const strReverse = str => str.split('').reverse().join('');
strReverse('codeClash') // 'hsalCedoc' 

// Scroll to the top
const toTop = () => window.scrollTo(0, 0);

// Generate a random Hex
const hexClr = () =>
   '#' +
   Math.floor(Math.random() * 0xffffff)
   .toString(16)
    .padEnd(6, '0');

    console.log(hexClr())

    // Capitalise a string     
    let str = "follow codeclash for learning web develeopment";
    let capStr = str.replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())
    ));

    console.log(capStr)

    // Copy to clipboard
    const copy = (text) => navigator.clipboard.writeText(text);
    copy('Code.Clash');
     