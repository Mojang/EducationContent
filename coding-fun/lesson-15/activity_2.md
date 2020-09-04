### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration false 
### @explicitHints 1


# Columns!

## Step 1
Time to build the aqueducts! First, create ``||variable: length||`` and ``||variable: segments||`` variables. Then ``||variable: set length||`` to **5** and ``||variable: set segments||`` to **6** ``||loops: on start||``. 

## Step 2
Now within an ``||player: on chat command||`` you need to add all the actions that the Agent needs to perform in order to build **1** part: ``||agent: set block pillar of quartz||`` at the count of **64**, ``||agent: place||`` and ``||agent: move forward||``. Water in Minecraft will flow if there is a slope, so the Agent needs to **place left, right and down**. Place all these actions within a ``||loops: repeat||`` loop that **repeats** ``||variable: length||`` times. 

## Step 3
Now nest the first ``||loops: repeat||`` loop within another ``||loops: repeat||`` loop that repeats ``||variables:segments||`` times. Try it out in Minecraft!

### ~ tutorialHint
Add ``||agent: agent move down||`` block before the inner loop to make the code work!

```ghost
player.onChat("build", function () {
    agent.move(DOWN, 1)
    for (let index = 0; index < Segments; index++) {
        for (let index = 0; index < length; index++) {
            agent.setItem(WHITE_CONCRETE, 64, 1)
            agent.place(LEFT)
            agent.place(RIGHT)
            agent.place(DOWN)
            agent.move(FORWARD, 1)
        }
        agent.move(DOWN, 1)
    }
})
let Segments = 0
let length = 0
length = 5
Segments = 6
```
