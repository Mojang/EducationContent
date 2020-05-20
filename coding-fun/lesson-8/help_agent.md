### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration true 
### @explicitHints 1


# Iron

## Step 1
While the Agent **inspects the block down** and this block is not **iron ore**, it needs to **move forward**. If the Agent **detects a block forward**, then it needs to **destroy forward**. When the Agent locates iron, program it to **collect** it. Note that in order to collect a block, Agent needs to destroy it first. 

```ghost
player.onChat("4", function () {
    while (agent.inspect(AgentInspection.Block, DOWN) != IRON_ORE) {
        if (agent.detect(AgentDetection.Block, FORWARD)) {
            agent.destroy(FORWARD)
        }
        agent.move(FORWARD, 1)
    }
    player.say("Found the iron ore!")
    agent.destroy(DOWN)
    agent.collectAll()
})
```
