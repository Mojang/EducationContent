### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration true 
### @explicitHints 1


# Locating stone 

## Step 1
Fix this coding snippet. Here is what the Agent needs to do: the Agent moves **3** steps to the **right** and checks if there is **stone** in front of it.



```template
player.onChat("stone", function () {
    for (let index = 0; index < 3; index++) {
        agent.move(RIGHT, 3)
        agent.destroy(DOWN)
        agent.move(UP, 3)
        if (agent.inspect(AgentInspection.Block, FORWARD) != STONE) {
            player.say("Found the stone!")
            agent.destroy(RIGHT)
            agent.collectAll()
        } else {
            player.say("No stone here!")
        }
        agent.move(UP, 1)
    }
})
```
