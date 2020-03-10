### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration true 
### @flyoutOnly 1
### @explicitHints 1


# Program the Agent to move to the gold plate!

## Step 1
Select an ``||player:on chat command||`` and rename it from **run** to **1**. Select an ``||agent: agent move||`` block and drag it inside the ``||player:on chat command||``. When done, press the **Play** buton to compile the code. Go to Minecraft & press **t** and type **1**. 

#### ~ tutorialhint 
You can change the number of steps your Agent will move by changing the number inside the ``||agent: agent move||``.You also can use ``||agent: agent turn||`` block to turn the Agent to the left or right.


```ghost
player.onChat("run", function () {
    agent.move(FORWARD, 1)
    agent.turn(LEFT_TURN)
})

``` 