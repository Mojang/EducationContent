### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration false 
### @explicitHints 1


# Pretty things!

## Step 1
Your mission is to to construct the alternating pattern of **quartz pillar** and **lapiz lazuli** blocks along the floor border of the bath. Start by creating ``||variable:blockA||`` and ``||variable:blockB||`` variables. Set the ``||variable:blockA variable||`` to a **block of quartz** and ``||variable:blockB variable||`` to a **lapis lazuli block**. Add the commands to the ``||loops: on start||`` block. 

## Step 2
``||logic: If||`` ``||count||`` = **0**, then agent needs to set ``||variable:blockA||``, ``||agent:destroy down||``, ``||agent:place down||`` and ``||variable:change the count by 1||``. ``||logic: Else||`` the Agent needs to set ``||blockB||``, place blocks and ``||change count by -1||``.  

## Step 3
The Agent needs to place blocks in a row ``||loops: while||`` it does ``||logic:not||`` ``|| detect||`` a block **forward**. 

## Step 4
There are **4** sides of reservoir that the Agent needs to complete, so add a ``||loops: repeat||`` block. Set the ``||count||`` to **0** before sending the Agent to place blocks.

```template
let count = 0
player.onChat("floor", function () {
    count = 0
})
```


```ghost
player.onChat("floor", function () {
    count = 0
    for (let index = 0; index < 4; index++) {
        while (!(agent.detect(AgentDetection.Block, FORWARD))) {
            if (count == 0) {
                agent.setItem(blockA, 1, 1)
                agent.destroy(DOWN)
                agent.place(DOWN)
                count += 1
            } else {
                agent.setItem(blockB, 1, 1)
                agent.destroy(DOWN)
                agent.place(DOWN)
                count += -1
            }
            agent.move(FORWARD, 1)
        }
        agent.turn(RIGHT_TURN)
    }
})
let count = 0
let blockB = 0
let blockA = 0
blockA = BLOCK_OF_QUARTZ
blockB = LAPIS_LAZULI_BLOCK
```
