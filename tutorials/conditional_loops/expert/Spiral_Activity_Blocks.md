
# Spiral Activity: Blocks


## Step 1
Get an ``||player:on chat||`` command and name it **“spiral”**.

```blocks
player.onChat("spiral", function () {
})
```

## Step 2

Put a ``||while loop||`` inside the ``||agent:chat command||``. Get a ``||logic comparison||``, set it to **not equals** and drag it into the ``||while loop||`` in place of **true**. Get an ``||agent inspect||``, set it to **block** and **forward** and drag it into the **left** parameter of the comparison. Get a ``||basic block||``, set it to **Gold** and drag it into the **right** parameter of the comparison. 

```blocks
player.onChat("spiral", function () {
    while (agent.inspect(AgentInspection.Block, FORWARD) != GOLD_BLOCK) {
    	
    }
})
```

## Step 3

Add an ``||if else conditional||`` inside the ``||while loop||`` and replace the **true** argument in the ``||if else||`` conditional with a ``||logic not||``. Add an ``||agent detect||`` set to **block** and **forward** into the ``||logical not||``. Add an ``||agent move||`` **forward** by 1 into the ``||if conditional||``.

```blocks
player.onChat("spiral", function () {
    while (agent.inspect(AgentInspection.Block, FORWARD) != GOLD_BLOCK) {
        if (!(agent.detect(AgentDetection.Block, FORWARD))) {
            agent.move(FORWARD, 1)
        } else {
        	
        }
    }
})
```

## Step 4

Add an ``||agent:turn left||`` into the ``||else conditional||``.

```blocks
player.onChat("spiral", function () {
    while (agent.inspect(AgentInspection.Block, FORWARD) != GOLD_BLOCK) {
        if (!(agent.detect(AgentDetection.Block, FORWARD))) {
            agent.move(FORWARD, 1)
        } else {
            agent.turn(LEFT_TURN)
        }
    }
})
```

## Step 5

Add an ``||agent:move||`` **up** by **3** outside of the ``||while loop||`` but still inside the ``||on chat||`` command.  

```blocks
player.onChat("spiral", function () {
    while (agent.inspect(AgentInspection.Block, FORWARD) != GOLD_BLOCK) {
        if (!(agent.detect(AgentDetection.Block, FORWARD))) {
            agent.move(FORWARD, 1)
        } else {
            agent.turn(LEFT_TURN)
        }
    }
    agent.move(UP, 3)
})
```

## Step 6

Place a ``||repeat loop||`` onto the workspace and set it to repeat **4** times. Drag all your code (including the ``||while loop||`` and the last ``||agent:move||``) inside the ``||repeat loop||``. Drag the ``||repeat loop||`` (and everything inside it) into the ``||agent:on chat||`` command. 

```blocks
 player.onChat("spiral", function () {
    for (let index = 0; index < 2; index++) {
        while (agent.inspect(AgentInspection.Block, FORWARD) != GOLD_BLOCK) {
            if (!(agent.detect(AgentDetection.Block, FORWARD))) {
                agent.move(FORWARD, 1)
            } else {
                agent.turn(LEFT_TURN)
            }
        }
        agent.move(UP, 3)
    }
})

```

### Full Code: 

```blocks
 player.onChat("spiral", function () {
    for (let index = 0; index < 2; index++) {
        while (agent.inspect(AgentInspection.Block, FORWARD) != GOLD_BLOCK) {
            if (!(agent.detect(AgentDetection.Block, FORWARD))) {
                agent.move(FORWARD, 1)
            } else {
                agent.turn(LEFT_TURN)
            }
        }
        agent.move(UP, 3)
    }
})
```
