### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration false 
### @flyoutOnly 1
### @explicitHints 1


# Program the Agent to move up to the gold plate!

## Step 1
Select an ``||player:on chat command||`` and rename it from **run** to **2**. Select an ``||agent: agent move||`` block and drag it inside the ``||player:on chat command||``. 

#### ~ tutorialhint 
You can change the number of steps your Agent will move by changing the number inside the ``||agent: agent move||``.You also can use ``||agent: agent turn||`` block to turn the Agent to the left or right.

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