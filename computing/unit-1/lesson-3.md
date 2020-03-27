### @hideIteration false 
### @explicitHints 1


# Lesson 3

## Step 1
To program your Agent to build, select an ``||player:on chat||`` command and rename it from **run** to **build_a_bridge**. Select an ``||agent: agent place on move||`` command and drag it inside the ``||player:on chat||`` command.

### ~ tutorialhint
Don't forget to set the condition to **true**, so that the Agent will be able to build. 

## Step 3
Identify **direction** in which you would like the Agent to place blocks by selecting an ``||agent: agent place||``. 

## Step 4
Now add an ``||agent: agent move||`` command to ensure that the Agent moves in the right direction. 

### ~ tutorialhint
Make sure your Agent has **building material** in its inventory. The blocks should be in **slot 1**. 

## Step 5
When done, press the **Play** button to compile the code, then go to the Minecraft world, press **T** and type **build_a_bridge**.

## Step 6 
Now you can practice using these commands in different combinations. 

```ghost
player.onChat("run", function () {
    player.say(":)")
    agent.teleportToPlayer()
    agent.turn(LEFT_TURN)
    agent.move(FORWARD, 1)
    agent.destroy(FORWARD)
    agent.collectAll()
    agent.setAssist(PLACE_ON_MOVE, false)
    agent.place(FORWARD)
})
``` 


