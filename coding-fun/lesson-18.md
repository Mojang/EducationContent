### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration true 
### @explicitHints 1


# Beets!

## Step 1
It is your time to shine! 

```ghost
blocks.onBlockBroken(GRASS, function () {
    for (let index = 0; index < 4; index++) {
    	
    }
})
player.onTravelled(WALK, function () {
    player.runChatCommand("jump")
})
function doSomething () {
	
}
player.onItemInteracted(IRON_SHOVEL, function () {
    player.say(":)")
})
loops.forever(function () {
    while (agent.detect(AgentDetection.Block, FORWARD)) {
        if (blocks.testForBlock(GRASS, pos(0, 0, 0))) {
        	
        }
        if (agent.inspect(AgentInspection.Block, FORWARD) == 0 + 0) {
        	
        }
        if (false && !(false)) {
        	
        }
    }
})
blocks.onBlockPlaced(IRON_SHOVEL, function () {
    blocks.place(GRASS, pos(0, 0, 0))
})
player.onChat("jump", function () {
    gameplay.setWeather(CLEAR)
    gameplay.timeSet(gameplay.time(DAY))
})
let block = BLOCK_OF_QUARTZ
let block2 = LAPIS_LAZULI_BLOCK
agent.move(FORWARD, 1)
agent.turn(LEFT_TURN)
agent.teleportToPlayer()
agent.place(FORWARD)
agent.destroy(FORWARD)
agent.destroy(FORWARD)
agent.till(FORWARD)
agent.dropAll(FORWARD)
agent.collectAll()
mobs.spawn(PRIMED_TNT, world(0, 0, 0))
mobs.spawn(CHICKEN, pos(0, 0, 0))
agent.setItem(GRASS, 1, 1)
```
