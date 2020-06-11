### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration true 
### @explicitHints 1


# Track Down the Rover 

## Step 1
Fix this coding snippet. Here is the objective: while **inspecting forward** for a block of **quartz** and **not** finding it, the Agent needs to **move forward**. If it **detects** a **gold** block **down**, it needs to **turn right**. If it detects a **block of iron down**, it needs to **turn left**. In the end the Agent needs to say, "Found the rover!"




```template
player.onChat("rover", function () {
    while (agent.inspect(AgentInspection.Block, FORWARD) != BLOCK_OF_QUARTZ) {
            if (agent.inspect(AgentInspection.Block, UP) == GOLD_BLOCK) {
            agent.turn(LEFT_TURN)
        }
            if (agent.inspect(AgentInspection.Block, RIGHT) == IRON_BLOCK) {
            agent.turn(RIGHT_TURN)
        }
        agent.move(FORWARD, 1)
    }
    player.say("Found the rover!")
})
```

