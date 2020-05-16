### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration true 
### @explicitHints 1


# Locating stone 

## Step 1
Fix this coding snippet. Here is what the Agent needs to do: the Agent moves **4** steps to the **left** and checks if there is **stone** in front of it. If there is **stone**, it says **"Found the stone"**, if not, then it says **"No stone here"**. The Agent needs to repeat the whole operation **4** times. 



```template
player.onChat("stone", function () {
    for (let index = 0; index < 3; index++) {
        agent.move(RIGHT, 4)
        agent.destroy(DOWN)
        agent.move(DOWN, 1)
        if (agent.inspect(AgentInspection.Block, FORWARD) != STONE) {
            player.say("Found the stone!")
            agent.destroy(FORWARD)
            agent.collectAll()
        } else {
            player.say("No stone here!")
        }
        agent.move(UP, 1)
    }
})
```
