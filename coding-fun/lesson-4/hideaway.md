### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration false 
### @flyoutOnly 1
### @explicitHints 1


# Bamboo Hideaway

## Step 1
Use ``||agent:agent set block||``, ``||agent: agent place||`` and ``||agent:agent move||`` blocks to compile your code. You need to plant 3 blocks of bamboo on one side.  

## Step 2
Add ``||agent:agent turn||`` block to your code. There are 4 sides that the Agent needs to fill with bamboo. Drop your coding solution inside a new ``||loops: repeat||`` block. 

#### ~ tutorialhint
There should be 2 **repeat** loops, one nested inside the other. 
```blocks
player.onChat("3", function () {
    for (let index = 0; index < 3; index++) {
        agent.setItem(BAMBOO, 64, 1)
        agent.place(DOWN)
        agent.move(FORWARD, 1)
    }
    agent.turn(RIGHT_TURN)
})
```


