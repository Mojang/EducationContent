### @hideIteration false 
### @explicitHints 1


# Lesson 1

## Step 1
To code a conversation with your Agent select an ``||player:on chat||`` command and rename it from **run** to **hello**. Select a ``||player: say||`` command and drag it inside the ``||player:on chat||`` command.

## Step 2
Type **Hi, I am your Agent!** inside the ``||player: say||`` command. When done, press the **Play** buton to compile the code, then go to Minecraft, press **T** and type **hello**.

## Step 3
Go back to your code and modify the conversation with the Agent. 

## Step 4
To teleport your Agent to different places select a new ``||player: on chat||`` command, drag it to the workspace and rename it to **come_here**. 

## Step 5
Drag an ``||agent:agent teleport to player||`` command and drop it inside the ``||player: on chat||`` command. 

## Step 6
When done, press the **Play** button to compile the code, then go to the Minecraft world, press **T** and type **come_here**.

## Step 7
To code your Agent to rotate select a new ``||player: on chat||`` command, drag it to the workspace and rename it to **turn**. 

## Step 8
Drag an ``||agent: agent turn||`` command and drop it inside the ``||player: on chat||`` command. You can decide which direction the Agent is going to rotate. 

## Step 9
When done, press the **Play** button to compile the code, then go to the Minecraft world, press **T** and type **turn**.

## Step 10 
Now you can practice using these commands in different combinations. 

```ghost
player.onChat("run", function () {
    player.say(":)")
    agent.teleportToPlayer()
    agent.turn(LEFT_TURN)
})
``` 
