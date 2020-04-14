
### @hideIteration false 
### @flyoutOnly 1
### @explicitHints 1


# Hazing One

## Step 1
Set the ``||agent:agent set block||`` to **tripwire** and set the count to **64**. 

## Step 2
Use the ``||loops:while||`` block and drop a condition inside the ``||loops:while||`` block.  

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

```blocks
player.onChat("run", function () {
    agent.setItem(TRIPWIRE, 64, 1)
    while (!(agent.detect(AgentDetection.Block, FORWARD))) {
        agent.place(DOWN)
        agent.move(FORWARD, 1)
    }
})
```