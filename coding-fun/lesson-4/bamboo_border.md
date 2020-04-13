### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration false 
### @flyoutOnly 1
### @explicitHints 1


# Bamboo Border

## Step 1
There is a starter code that we prepared for you. Try running this code at first and learn from it. 

```template
player.onChat("border", function () {
    agent.setItem(BAMBOO, 64, 1)
    for (let index = 0; index < 16; index++) {
        agent.place(DOWN)
        agent.move(FORWARD, 1)
    }
    agent.turn(RIGHT_TURN)
```
## Step 2
You need to plant bamboo along 4 sides of the fence. The starter code works for 1 side, make sure you have all the code you need to program the Agent to plant bamboo for 3 different sides. 

## Step 3
As the Agent will use more than 64 blocks of bamboo, add ``||agent: agent set block||``, select **bamboo** and **64** blocks.

## Step 4 
When done, press the **Play** buton to compile the code. Don't forget to run your code in Minecraft. 


