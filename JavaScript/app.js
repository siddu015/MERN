const calls = setInterval(() => {
    console.log("Hello world")
}, 2000)


setTimeout( () => {
    clearInterval(calls)
    console.log("Cleared")
},10010)


