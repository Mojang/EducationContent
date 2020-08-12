Be creative and build your own pixel art with code!



```ghost
loops.forever(function () {
	
})
player.onChat("roof", function () {
    agent.setItem(BRICKS_SLAB, 64, 1)
    agent.teleportToPlayer()
    agent.turn(LEFT_TURN)
    agent.move(UP, 1)
    agent.move(FORWARD, 1)
    agent.setAssist(PLACE_ON_MOVE, false)
    agent.collect(IRON_SHOVEL)
    agent.setItem(GRASS, 1, 1)
    agent.place(FORWARD)
    while (true) {
    	
    }
    agent.destroy(FORWARD)
    for (let index = 0; index < 4; index++) {
    	
    }
    agent.till(FORWARD)
    agent.collectAll()
})
```
