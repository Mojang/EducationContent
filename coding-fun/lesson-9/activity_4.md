### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration true 
### @explicitHints 1


# Repair the Rover 

## Step 1
Fix this coding snippet. Here is the objective: the Agent needs to repair the rover by placing blocks where the holes are found.  



```template
player.onChat("repair", function () {
    while (agent.inspect(AgentInspection.Block, FORWARD) != AIR) {
        agent.move(RIGHT, 1)
        if (agent.inspect(AgentInspection.Block, FORWARD) == GOLD_BLOCK) {
            agent.move(RIGHT, 1)
            agent.turn(RIGHT_TURN)
            agent.move(RIGHT, 1)
        }
    }
    player.say("Found the break!")
    agent.setItem(REDSTONE_BLOCK, 1, 1)
    agent.place(BACK)
})
```
