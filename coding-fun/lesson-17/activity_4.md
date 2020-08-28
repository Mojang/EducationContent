### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration true 
### @explicitHints 1


# Beets!

## Step 1
You are provided with three functions: ``||functions: plantSeed||``, ``||functions: plantSection||`` and ``||functions: checkTurn||``. First, create 2 new ``||variable: variables||`` and name them **leftBlock** and **rightBlock**. Set ``||variable: leftBlock||`` to **lapis lazuli** and ``||variable: rightBlock||`` to **quartz**. Swap **lapis lazuli** and **quartz** in the ``||functions: turn||`` function to the newly created variables. In the new ``||player: on chat||`` command add your condition: ``||loops:while||`` the Agent is ``||agent:inspecting the block down||``, and it is not a **gold block**, ``||functions: call||`` the necessary functions. 



```template
/**
 * We are calling a function inside a function
 */
function plantSection () {
    for (let index = 0; index < 11; index++) {
        plantSeed()
    }
    agent.move(FORWARD, 1)
}
 /**
 * The code was modified to not place seeds if there's no block under the Agent.
 */
function plantSeed () {
    agent.till(FORWARD)
    agent.move(FORWARD, 1)
    if (agent.detect(AgentDetection.Block, DOWN)) {
        agent.place(DOWN)
    }
}
function turn (leftBlock: number, rightBlock: number) {
    if (agent.inspect(AgentInspection.Block, DOWN) == LAPIS_LAZULI_BLOCK) {
        agent.turn(RIGHT_TURN)
        agent.move(FORWARD, 1)
        agent.turn(RIGHT_TURN)
    } else if (agent.inspect(AgentInspection.Block, DOWN) == BLOCK_OF_QUARTZ) {
        agent.turn(LEFT_TURN)
        agent.move(FORWARD, 1)
        agent.turn(LEFT_TURN)
    }
}

```


```ghost
player.onChat("plant", function () {
    while (agent.inspect(AgentInspection.Block, DOWN) != GOLD_BLOCK) {
        plantSection()
        checkTurn(LAPIS_LAZULI_BLOCK, BLOCK_OF_QUARTZ)
    }
})

function turn (leftBlock: number, rightBlock: number) {
    if (agent.inspect(AgentInspection.Block, DOWN) == block) {
        agent.turn(RIGHT_TURN)
        agent.move(FORWARD, 1)
        agent.turn(RIGHT_TURN)
    } else if (agent.inspect(AgentInspection.Block, DOWN) == block2) {
        agent.turn(LEFT_TURN)
        agent.move(FORWARD, 1)
        agent.turn(LEFT_TURN)
    }
}

let leftBlock = BLOCK_OF_QUARTZ
let rightBlock = LAPIS_LAZULI_BLOCK
```
