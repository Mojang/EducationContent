### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration true 
### @explicitHints 1


# Planting Beets!

## Step 1
Two functions **plantSeed** and **plantSection** are provided for you. Create a new ``||player: on chat||`` command and ``||functions: call plantSection||`` within it. Add an ``||logic: if||`` statement that checks if ``||agent: agent inspects block down||`` . If the block down is ``||blocks: lapis lazuli||``, then the agent needs  to ``||agent: turn right||``, ``||agent: move forward||`` and ``||agent: turn right||``. ``||logic: If||`` the agent ``||agent: inspects the block down||`` and it is ``||blocks: a block of quartz||``, then the agent needs to ``||agent: turn left||``, ``||agent: move forward||`` and ``||agent: turn right||``. Finally ``||functions: call plantSection||``.  

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

/**
* You need to check if the Agent is stepping on a lapis block turn right, if quartz turn left.
*/
```

```ghost
player.onChat("turn", function () {
    plantSection()
    if (agent.inspect(AgentInspection.Block, DOWN) == LAPIS_LAZULI_BLOCK) {
        agent.turn(RIGHT_TURN)
        agent.move(FORWARD, 1)
        agent.turn(RIGHT_TURN)
    } else if (agent.inspect(AgentInspection.Block, DOWN) == BLOCK_OF_QUARTZ) {
        agent.turn(LEFT_TURN)
        agent.move(FORWARD, 1)
        agent.turn(RIGHT_TURN)
    }
    plantSection()
})
```
