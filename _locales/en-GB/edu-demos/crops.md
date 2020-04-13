### @hideIteration true 
### @explicitHints 1

# Plant crops
## Step 1
Plant the crops. Try this code!

```template
player.onChat("crops", function () {
    agent.teleport(world(-264, 64, 148), WEST)
    for (let index = 0; index < 7; index++) {
        for (let index = 0; index < 10; index++) {
            agent.destroy(FORWARD)
            agent.collectAll()
            agent.move(FORWARD, 1)
        }
        agent.move(BACK, 10)
        agent.move(RIGHT, 1)
    }
    agent.teleport(world(-264, 64, 148), WEST)
    agent.setSlot(2)
    for (let index = 0; index < 7; index++) {
        for (let index = 0; index < 10; index++) {
            agent.till(FORWARD)
            agent.place(FORWARD)
            agent.move(FORWARD, 1)
        }
        agent.move(BACK, 10)
        agent.move(RIGHT, 1)
    }
})
```