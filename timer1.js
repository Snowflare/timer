const arg = process.argv.slice(2);
const filtered = arg.filter(x => Number.isInteger(Number(x))).map(x => Number(x)).filter(x => x >= 0);

for (let i = 0; i < filtered.length; i++){
  setTimeout(() => {
    process.stdout.write('\x07');
  }, filtered[i] * 1000);
}



