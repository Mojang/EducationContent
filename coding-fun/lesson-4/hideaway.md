### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration false 
### @flyoutOnly 1
### @explicitHints 1


# Bamboo Hideaway

## Step 1
Use ``||agent:agent set block||``, ``||agent: agent place||`` and ``||agent:agent move||`` blocks to compile your code. Run your code.  

## Step 2
Add ``||agent:agent turn||`` block to your code. Think how many times you need to repeat the code so that the Agent could repeat the actions.

#### ~ tutorialhint
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
## Step 3 
Now nest your loop inside anoher loop. Add another ``||loops: repeat||`` block and drop your code inside. Think about how many times you need to repeat the code. 

