### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration true 
### @flyoutOnly 1
### @explicitHints 1


# Program the Agent to move to the gold plate!

## Step 1
Select an ``||player:on chat||`` command and rename it from **run** to **1**. Select an ``||agent: agent move forward||`` block and drag it inside the ``||player:on chat||`` command. Change the **number** of steps the Agent moves to **3**, so that Agent can reach the gold plate. When done, press the **Play** button to compile the code, then go to Minecraft, press **t** and type **1**.

#### ~ tutorialhint 
You can change the number of steps your Agent will move by changing the number inside the ``||agent: agent move||`` block. You also can use an ``||agent: agent turn||`` block to turn the Agent to the left or right.



```ghost
player.onChat("1", function () {
    agent.move(FORWARD, 1)
    agent.turn(LEFT_TURN)
})

``` 
