### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration true 
### @explicitHints 1


# Simulation  

## Step 1
Now it is your time to try different coding solutions!


```ghost
player.onChat("surroundings", function () {
    while (agent.inspect(AgentInspection.Block, FORWARD) != GOLD_BLOCK) {
        if (agent.detect(AgentDetection.Block, FORWARD)) {
            agent.turn(LEFT_TURN)
        } else {
            agent.move(FORWARD, 1)
        }
    }
    agent.destroy(FORWARD)
    agent.destroy(FORWARD)
    agent.place(FORWARD)
    agent.collectAll()
    agent.setItem(GRASS, 1, 1)
```
