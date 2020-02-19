# Fence

## Try the code:

```blocks
player.onChat("fence", function () {
    agent.teleport(world(-265, 64, 129), SOUTH)
    agent.setItem(SPRUCE_FENCE, 30, 1)
    agent.setSlot(1)
    agent.setAssist(PLACE_ON_MOVE, true)
    agent.move(FORWARD, 9)
    agent.turn(RIGHT_TURN)
    agent.move(FORWARD, 9)
    agent.turn(RIGHT_TURN)
    agent.move(FORWARD, 9)
    agent.move(LEFT, 1)
    agent.setAssist(PLACE_ON_MOVE, false)
    agent.dropAll(FORWARD)
})
```