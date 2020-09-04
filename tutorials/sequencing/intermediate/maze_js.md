# Agent Maze: JavaScript

## Step 1
Code an ``||player:on chat||`` command, name it **tp**, and code the agent to ``||agent:teleport to player||``.

```javascript
player.onChat("tp", function () {
})
```

## Step 2

Code another ``||player:on chat||`` command, name it **side1**, then code the agent to  ``||agent:place on move||`` and set it to **true**. Add ``||agent:agent set item||`` command and set the count to **64**.

```javascript
player.onChat("side1", function () { 
    agent.setAssist(PLACE_ON_MOVE, true)
    agent.setItem(GRASS, 64, 1) 
   
}) 
```

## Step 3

Code the agent to ``||agent:move forward||`` by **4** and then **turn left**.  

```javascript
player.onChat("side1", function () { 
    agent.setAssist(PLACE_ON_MOVE, true) 
    agent.move(FORWARD, 4) 
    agent.turn(LEFT_TURN) 
}) 
```

## Step 4

Code the agent to ``||agent:move forward||`` by **5**, ``||agent:agent turn||`` **right**, and then ``||agent:agent move||`` **forward by 5** again.

```javascript
player.onChat("side1", function () { 
    agent.setAssist(PLACE_ON_MOVE, true) 
    agent.move(FORWARD, 4) 
    agent.turn(LEFT_TURN) 
    agent.move(FORWARD, 5) 
    agent.turn(RIGHT_TURN) 
    agent.move(FORWARD, 5) 
    })
```

## Step 5

Code the agent to ``||agent:place on move||`` and set it to **false**. 

```javascript
player.onChat("side1", function () { 
    agent.setAssist(PLACE_ON_MOVE, true) 
    agent.move(FORWARD, 4) 
    agent.turn(LEFT_TURN) 
    agent.move(FORWARD, 5) 
    agent.turn(RIGHT_TURN) 
    agent.move(FORWARD, 5) 
    agent.setAssist(PLACE_ON_MOVE, false) 
    }) 
```

## Step 6

Code the agent to ``||agent:turn||`` **left**, ``||agent:move||`` **forward by 2**, and then ``||agent:turn||`` **left** again.

```javascript
player.onChat("side1", function () { 
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

## Step 7

Code a new ``||player:on chat||`` command and name it **side2**. Code the agent to ``||agent:place on move||`` to **true**. Add ``||agent:agent set item||`` command and set the count to **64**.

```javascript
player.onChat("side2", function () { 
    agent.setAssist(PLACE_ON_MOVE, true) 
    agent.setItem(GRASS, 64, 1) 
    }) 
```

## Step 8

Code the agent to ``||agent:move||`` **forward by 7** and then ``||agent:turn||`` **left**.

```javascript
player.onChat("side2", function () { 
    agent.setAssist(PLACE_ON_MOVE, true) 
    agent.move(FORWARD, 7) 
    agent.turn(LEFT_TURN) 
})
```

## Step 9

Code the agent to ``||agent:move||`` **forward by 5** and then ``||agent:turn||`` **right**.

```javascript
player.onChat("side2", function () { 
    agent.setAssist(PLACE_ON_MOVE, true) 
    agent.move(FORWARD, 7) 
    agent.turn(LEFT_TURN) 
    agent.move(FORWARD, 5) 
    agent.turn(RIGHT_TURN) 
})
```

## Step 10

Finally, code the agent to ``||agent:move||`` **forward by 3**.

```javascript
player.onChat("side2", function () { 
    agent.setAssist(PLACE_ON_MOVE, true) 
    agent.move(FORWARD, 7) 
    agent.turn(LEFT_TURN) 
    agent.move(FORWARD, 5) 
    agent.turn(RIGHT_TURN) 
})
```

## Step 11

Return to Minecraft, type **tp**, then type **side2** into the chat line to see the agent build your second wall.

```javascript
player.onChat("tp", function () { 
    agent.teleportToPlayer() 
}) 
player.onChat("side1", function () { 
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

