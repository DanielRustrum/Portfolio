const alpure = require('alpure')

alpure.start("./alpure.json")

alpure.binding.add("CTRL-T", () => {
    console.log("Testing")
})

alpure.binding.add("CTRL-R", () => {
    alpure.restart()
})