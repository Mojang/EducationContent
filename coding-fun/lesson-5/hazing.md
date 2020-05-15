### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration true 
### @explicitHints 1


# Hazing 

## Step 1
The Agent needs to set **tripwire** so that wolves won't get in. Set the ``||agent:agent set block||`` to **tripwire** and set the count to **64**. Use the ``||loops:while||`` block and drop a condition inside it.  

#### ~ tutorialhint
Remember to use **not** in your condition. 

```blocks
player.onChat("hazing", function () {
    agent.setItem(TRIPWIRE, 64, 1)
    while (!(agent.detect(AgentDetection.Block, FORWARD))) {
    	
    }
})

``` 
```ghost
player.onChat("hazing", function () {
    agent.setItem(TRIPWIRE, 64, 1)
    while (!(agent.detect(AgentDetection.Block, FORWARD))) {
        agent.place(DOWN)
        agent.move(FORWARD, 1)
    }
})
```
