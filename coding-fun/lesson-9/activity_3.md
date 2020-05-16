### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration true 
### @explicitHints 1


# Track Down the Rover 

## Step 1
Fix this coding snippet. Here is the objective: The Agent needs to locate the rover that is made of **quartz** by inspecting the block **in front** of it. If the Agent detects a **gold** block underneath, then it should turn **right**, if it detects a block of **iron** underneath, it should turn **left**.   



```template
player.onChat("rover", function () {
    while (agent.inspect(AgentInspection.Block, FORWARD) != BLOCK_OF_QUARTZ) {
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

