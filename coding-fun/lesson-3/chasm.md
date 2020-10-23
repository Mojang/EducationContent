### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration true 
### @explicitHints 1


# The great chasm!

## Step 1
Program the Agent to **build a bridge** across the chasm in the ice. Use ``||agent:set block or item||`` to ensure that the Agent has the necessary materials in the inventory. Select the **oak** as a building material & **64** for the **amount of blocks**. ``||loops:while||`` the Agent does **not** detect blocks down, program the Agent to place the oak planks **down** and move **forward** to create a bridge.    


```template
player.onChat("chasm", function () {
    agent.setItem(PLANKS_OAK, 1, 1)
    agent.move(FORWARD, 1)
    while (!(agent.detect(AgentDetection.Block, DOWN))) {
    	
    }
})
```

```ghost
player.onChat("chasm", function () {
    agent.setItem(PLANKS_OAK, 64, 1)
    agent.move(FORWARD, 1)
    while (!(agent.detect(AgentDetection.Block, FORWARD))) {
        agent.place(DOWN)
        agent.move(FORWARD, 1)
    }
})

``` 

