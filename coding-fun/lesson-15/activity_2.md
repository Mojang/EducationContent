### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration false 
### @explicitHints 1


# A little help!

## Step 1
Start by creating ``||length||`` and ``||segments||`` variables. Set the ``||length variable||`` to **5** and ``||segments||`` to **6**. 

## Step 2
Drag a ``||Set block||`` command and set it to **white concrete** with the count set to **64**. Figure out what directions the Agent needs to place blocks. Ensure that you ``||loops:repeat||`` this procedure ``||length||`` times.      
## Step 3
After that the Agent needs to ``||move down||`` and ``||loops: repeat||`` the same procedure ``||segments||`` times. 

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