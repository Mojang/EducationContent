### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration false 
### @flyoutOnly 1
### @explicitHints 1


# Program the Agent to move up to the gold plate!

## Step 1
Use ``||player:on chat||`` and  ``||agent:agent move||`` commands to program the Agent to move towards the gold plate.

#### ~ tutorialhint 
You need to stay on your gold plate, while the Agent needs to stay on the other one. 

## Step 2
When done, press the **Play** buton to compile the code. Go to Minecraft to run your code.


```ghost
player.onChat("run", function () {
    agent.move(FORWARD, 1)
    agent.turn(LEFT_TURN)
})
```  