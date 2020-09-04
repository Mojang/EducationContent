# Tutorial

## Step 1
Build a sustainable house with code! Use this starter code to get you going!

```template
player.onChat("rl", function () {
    agent.setItem(SANDSTONE, 64, 1)
})
player.onChat("fd", function () {
    agent.move(FORWARD, 3)
})
player.onChat("pd", function () {
    agent.teleportToPlayer()
    agent.setAssist(PLACE_ON_MOVE, true)
})
player.onChat("square", function () {
    for (let index = 0; index < 5; index++) {
        agent.setItem(SANDSTONE, 64, 1)
        agent.teleportToPlayer()
        agent.setAssist(PLACE_ON_MOVE, true)
        agent.move(FORWARD, 3)
        agent.turn(LEFT_TURN)
        if (agent.detect(AgentDetection.Block, FORWARD)) {
            agent.turn(RIGHT_TURN)
            agent.move(FORWARD, 3)
        }
    }
})
```

```ghost
let count = 0
if (!(false)) {
    while (true) {
        count = 0
    }
    agent.destroy(FORWARD)
    agent.collectAll()
}
```
