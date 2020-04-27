const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

readline.question(`Comment tu t'appelles?`, name => {
  console.log(`Bonjour ${name}!`)
  readline.close()
})
