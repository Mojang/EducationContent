### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration true 
### @flyoutOnly 1
### @explicitHints 1


# Program the Agent to move along the turtle tracks & destroy obstacles!

## Step 1
Use the Agent to **destroy the tree trunk** that is in the way by using ``||agent: agent destroy||`` & ``||agent:agent collect all||``blocks. Try using a ``||loops:repeat||`` block to make the code more efficient. When done, press the **Play** button to compile the code. Don't forget to run your code in Minecraft. 


```ghost
player.onChat("path", function () {
    for (let index = 0; index < 4; index++) {
        agent.turn(LEFT_TURN)
        agent.move(FORWARD, 1)
        agent.destroy(FORWARD)
        agent.collectAll()
    }
})
``` 

