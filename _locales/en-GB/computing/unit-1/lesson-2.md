### @hideIteration false 
### @explicitHints 1


# Lesson 2

## Step 1
To program your Agent to move, select an ``||player:on chat||`` command and rename it from **run** to **move**. Select an ``||agent: agent move||`` command and drag it inside the ``||player:on chat||`` command.

### ~ tutorialhint
Don't forget to change the number of steps that you want the Agent to make. 

## Step 3
Make sure you combine ``||agent: agent move||`` and ``||agent: agent turn||`` commands for your final code. Make sure your Agent follows the orange line. 

## Step 4
When done, press the **Play** button to compile the code, then go to the Minecraft world, press **T** and type **move**.

## Step 5
To code your Agent to chop down a tree, select a new ``||player:on chat||`` command. Now you need to add ``||agent: agent move||``, ``||agent: agent destroy||`` commands. Think which direction you want the Agent to move. 

### ~ tutorialhint
The Agent can move **up**, **down**, **forward**, **back**, **left** or **right**. 

## Step 6
Don't forget to add ``||agent: agent collect all||`` command to your code to make sure that the Agent collects all the plank blocks. 

## Step 7 
Now you can practice using these commands in different combinations. 

```ghost
player.onChat("run", function () {
    player.say(":)")
    agent.teleportToPlayer()
    agent.turn(LEFT_TURN)
    agent.move(FORWARD, 1)
    agent.destroy(FORWARD)
    agent.collectAll()
})
``` 

