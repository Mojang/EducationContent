# Agent Maze: Blocks

## Step 1
Create an ``||player:on chat||`` command and name it **tp**.

```blocks
player.onChat("tp", function () {
})
```

## Step 2

Get a ``||agent:teleport to player||`` and drag it inside the  ``||player:on chat||`` **tp** command.

**NOTE:** Note: This command is essential to get your agent to join you at your position.

```blocks
player.onChat("tp", function () {  
     agent.teleportToPlayer()  
})  
```

## Step 3

Get another ``||player:on chat||`` command and name it **side1**.

```blocks
player.onChat("side1", function () {
})
```

## Step 4

Get an ``||agent:place on move||`` and set it to **true**.  Place it inside ``||player:on chat||`` **side1** command.

```blocks
player.onChat(""side1"", function () {  
    agent.setAssist(PLACE_ON_MOVE, true)  
     
}) 
```

## Step 5

Get a ``||agent:move forward||`` and set it to **4**.  Place it inside ``||player:on chat||`` **side1** command under the previous commands.

```blocks
player.onChat(""side1"", function () {  
    agent.setAssist(PLACE_ON_MOVE, true)  
    agent.move(FORWARD, 4)  
})  
```

## Step 6

Add a ``||agent:turn||`` and set it to **turn left**. Drag it into the ``||player:on chat||`` **side1** command.

```blocks
player.onChat(""side1"", function () {  
    agent.setAssist(PLACE_ON_MOVE, true)  
    agent.move(FORWARD, 4)  
    agent.turn(LEFT_TURN)  
})  
```

## Step 7

Add another ``||agent:move forward||`` and set it to **5**.  Place it inside ``||player:on chat||`` **side1** command under the previous commands.

```blocks
player.onChat(""side1"", function () {  
    agent.setAssist(PLACE_ON_MOVE, true)  
    agent.move(FORWARD, 4)  
    agent.turn(LEFT_TURN)  
    agent.move(FORWARD, 5)  
    })  
```

## Step 8

Add another ``||agent:turn||`` and set it to **right**.  Place it inside ``||player:on chat||`` **side1** command under the previous commands.

```blocks
player.onChat(""side1"", function () {  
    agent.setAssist(PLACE_ON_MOVE, true)  
    agent.move(FORWARD, 4)  
    agent.turn(LEFT_TURN)  
    agent.move(FORWARD, 5)
    agent.turn(RIGHT_TURN)    
    })  
```

## Step 9

Right-click on the existing ``||agent:move||`` **forward by 5** and select **duplicate**. Drag the duplicate agent into the ``||player:on chat||`` **side1** command under the previous agent commands. **NOTE:** The duplicate function can save time when coding with blocks.

```blocks
player.onChat(""side1"", function () {  
    agent.setAssist(PLACE_ON_MOVE, true)  
    agent.move(FORWARD, 4)  
    agent.turn(LEFT_TURN)  
    agent.move(FORWARD, 5)  
    agent.turn(RIGHT_TURN)  
    agent.move(FORWARD, 5)  
    })  
```

## Step 10

Duplicate the existing ``||agent:place on move||``, then drag the duplicate into the ``||player:on chat||`` **side1** command under the previous agent commands.

```blocks
player.onChat(""side1"", function () {  
    agent.setAssist(PLACE_ON_MOVE, true)  
    agent.move(FORWARD, 4)  
    agent.turn(LEFT_TURN)  
    agent.move(FORWARD, 5)  
    agent.turn(RIGHT_TURN)  
    agent.move(FORWARD, 5)  
    agent.setAssist(PLACE_ON_MOVE, false)  
    })  
```

## Step 11

Duplicate the existing ``||agent:turn||`` **left**, then drag the duplicate into the ``||player:on chat||`` **side1** command under the previous agent commands.

## Step 12

Duplicate the existing ``||agent:move||`` **forward**, then drag the duplicate into the ``||player:on chat||`` **side1** command under the previous agent commands.

## Step 13

Duplicate the existing ``||agent:turn||`` **left**, then drag the duplicate into the ``||player:on chat||`` **side1** command under the previous agent commands.

```blocks
player.onChat(""side1"", function () {  
    agent.setAssist(PLACE_ON_MOVE, true)  
    agent.move(FORWARD, 4)  
    agent.turn(LEFT_TURN)  
    agent.move(FORWARD, 5)  
    agent.turn(RIGHT_TURN)  
    agent.move(FORWARD, 5)  
    agent.setAssist(PLACE_ON_MOVE, false)  
    agent.turn(LEFT_TURN)  
    agent.move(FORWARD, 2)  
    agent.turn(LEFT_TURN)  
})  
```

## Step 14

Return to Minecraft, type **tp**, and then type **side 1** into the chat line to see the agent build your first wall.

## Step 15

Duplicate the entire ``||player:on chat||`` **side1** command, then ename it **side2**.

## Step 16

Delete the last four commands from the new ``||player:on chat||`` **side2** command.

```blocks
player.onChat("side2", function () {  
    agent.setAssist(PLACE_ON_MOVE, true)  
    })  
```

## Step 17

Set the first ``||agent:move||`` to **forward by 7** and the last ``||agent:move||`` to **forward by 3**.

## Step 18

Change the last ``||agent:turn||`` **left** turn **right**.

## Step 19

Return to Minecraft, type **tp**, then type **side2** into the chat line to see the agent build your second wall.

### Full Code: 

```blocks
player.onChat("tp", function () {  
    agent.teleportToPlayer()  
})  
player.onChat(""side1"", function () {  
    agent.setAssist(PLACE_ON_MOVE, true)  
    agent.move(FORWARD, 4)  
    agent.turn(LEFT_TURN)  
    agent.move(FORWARD, 5)  
    agent.turn(RIGHT_TURN)  
    agent.move(FORWARD, 5)  
    agent.setAssist(PLACE_ON_MOVE, false)  
    agent.turn(LEFT_TURN)  
    agent.move(FORWARD, 2)  
    agent.turn(LEFT_TURN)  
})  
player.onChat("side2", function () {  
    agent.setAssist(PLACE_ON_MOVE, true)  
    agent.move(FORWARD, 7)  
    agent.turn(LEFT_TURN)  
    agent.move(FORWARD, 5)  
    agent.turn(RIGHT_TURN)  
    agent.move(FORWARD, 3)  
})  
```

