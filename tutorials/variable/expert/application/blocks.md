# Tutorial

## Step 1
Build a house with code. Don't forget to use variables. 

```ghost
let variable = 0
player.onTravelled(WALK, function () {
    variable = 0
    mobs.spawn(PRIMED_TNT, pos(0, 0, 0))
    blocks.place(GRASS, pos(0, 0, 0))
    agent.teleportToPlayer()
    while (true) {
        if (false && !(false)) {
        	
        }
    }
    mobs.give(
    mobs.target(NEAREST_PLAYER),
    GRASS,
    1
    )
    for (let index = 0; index < 4; index++) {
        gameplay.timeSet(gameplay.time(DAY))
        gameplay.setWeather(CLEAR)
        agent.move(FORWARD, 1)
        blocks.fill(
        GRASS,
        pos(0, 0, 0),
        pos(0, 0, 0),
        FillOperation.Replace
        )
        blocks.print(
        "HELLO",
        GRASS,
        pos(0, 0, 0),
        WEST
        )
    }
    agent.collectAll()
    agent.setAssist(PLACE_ON_MOVE, false)
    agent.place(FORWARD)
    agent.setItem(GRASS, 1, 1)
    agent.destroy(FORWARD)
    agent.till(FORWARD)
})
player.onChat("jump", function () {
	
})
```
