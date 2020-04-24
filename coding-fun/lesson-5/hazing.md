### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration false 
### @flyoutOnly 1
### @explicitHints 1


# Hazing One

## Step 1
The Agent needs to set **tripwire** so that wolves won't get in. Set the ``||agent:agent set block||`` to **tripwire** and set the count to **64**. Use the ``||loops:while||`` block and drop a condition inside it.  

#### ~ tutorialhint

```blocks
player.onChat("hazing", function () {
    agent.setItem(TRIPWIRE, 64, 1)
    while (!(agent.detect(AgentDetection.Block, FORWARD))) {
    	
    }
})

``` 
## Step 3
Add ``||agent: agent place||`` and ``||agent: agent move||`` blocks inside the ``||loops:while||`` block. 

```ghost
player.onChat("run", function () {
    agent.setItem(TRIPWIRE, 64, 1)
    while (!(agent.detect(AgentDetection.Block, FORWARD))) {
        agent.place(DOWN)
        agent.move(FORWARD, 1)
    }
})
```
