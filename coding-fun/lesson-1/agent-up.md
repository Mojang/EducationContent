### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration false 
### @flyoutOnly 1
### @explicitHints 1


# Program the Agent to move up to the gold plate!

## Step 1
Use an ``||player:on chat||`` and  ``||agent:agent move||`` commands to program the Agent to move towards the gold plate.

#### ~ tutorialhint 
You can program the Agent to move **up**.

## Step 2
When done, press the **Play** buton to compile the code. Go to Minecraft & press **t** and type **1**.

## Step 3
Adjust your code or create a new one by selecting a new ``||player: on chat command||``. Don't forget to run your code in Minecraft! 

```ghost
player.onChat("run", function () {
    agent.move(FORWARD, 1)
    agent.turn(LEFT_TURN)
})

```  