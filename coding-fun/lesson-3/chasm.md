### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration true 
### @flyoutOnly 1
### @explicitHints 1


# The great chasm!

## Step 1
Program the Agent to **build a bridge** across the chasm in the ice. Ensure that the Agent has the necessary materials in the inventory. Use ``||agent:set block or item||``. Select the **oak** as a building material & **64** for the **amount of blocks**. ``||loops:while||`` the Agent doesn **not** detect blocks down, program the Agent to place **down**.    

#### ~ tutorialhint 
Don't forget to use **not** in your **while** loop. 

```template
player.onChat("chasm", function () {
    while (!(agent.detect(AgentDetection.Block, FORWARD))) {
    	
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

