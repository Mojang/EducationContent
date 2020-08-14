### @hideIteration true 

# Tutorial

## Step 1
Program your agent to farm automatically in a row. 

```ghost
player.onChat("run", function () {
	
})
agent.teleportToPlayer()
agent.turn(LEFT_TURN)
agent.setAssist(PLACE_ON_MOVE, false)
agent.till(FORWARD)
agent.setItem(GRASS, 1, 1)
agent.move(FORWARD, 1)
agent.place(FORWARD)
for (let index = 0; index < 4; index++) {
	
}
while (agent.detect(AgentDetection.Block, FORWARD)) {
    agent.destroy(FORWARD)
}
while (!(agent.inspect(AgentInspection.Block, FORWARD) == GRASS)) {
	
}
```
