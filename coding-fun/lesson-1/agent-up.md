### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration true 
### @flyoutOnly 1
### @explicitHints 1


# Program the Agent to move up to the gold plate!

## Step 1
Use ``||player:on chat||`` and  ``||agent:agent move||`` commands to program the Agent to move towards the gold plate. You can program the Agent to move **up**. When done, press the **Play** button to compile the code. Go to Minecraft to run your code in game.



```ghost
player.onChat("up", function () {
    agent.move(FORWARD, 1)
    agent.turn(LEFT_TURN)
})

```  
