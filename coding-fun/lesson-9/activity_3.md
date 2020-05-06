### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration true 
### @explicitHints 1


# Track Down the Rover 

## Step 1
Fix this coding snippet. Here is the objective: using the Agent's navigational skills, you should be able to arrive to the rover. 



```template
player.onChat("rover", function () {
    while (agent.inspect(AgentInspection.Block, FORWARD) != EMERALD_BLOCK) {
            if (agent.inspect(AgentInspection.Block, UP) == GOLD_BLOCK) {
            agent.turn(RIGHT_TURN)
        }
            if (agent.inspect(AgentInspection.Block, RIGHT) == IRON_BLOCK) {
            agent.turn(LEFT_TURN)
        }
        agent.move(FORWARD, 1)
    }
    player.say("Found the rover!")
})
```

