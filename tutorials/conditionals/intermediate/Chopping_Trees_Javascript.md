# Chopping Trees: Javascript


## Step 1
Create an ``||chat||`` command and name it **“it”**.

```javascript
player.onChat("it", function () {
})
```

## Step 2

Inside the ``||chat||`` command, code the agent to ``||turn left||``.

```javascript
player.onChat("it", function () {
    agent.turn(LEFT_TURN)
})
```

## Step 3

Create another ``||chat||`` command and name it **“tp”**.

```javascript
player.onChat("tp", function () {
})
```

## Step 4

Inside the ``||chat||`` command, code the agent to ``||teleport||`` to the player.

```javascript
player.onChat("tp", function () {
    agent.teleportToPlayer()
})
```

## Step 5

Create a third ``||chat||`` command and name it **“chop”**.

```javascript
player.onChat("chop", function () {
})
```

## Step 6

Create a new ``||variable||``, name it **height**, and set it to **0**.

```javascript
let height = 0
player.onChat("lt", function () {
    agent.turn(LEFT_TURN)
})
player.onChat("tp", function () {
    agent.teleportToPlayer()
})
player.onChat("chop", function () {
    height = 0
})
```

## Step 7

Inside the **chop** ``||agent:on chat||`` command—directly under the **height** variable—create a ``||while loop||`` that begins with: ``||while the agent detects a block forward||``.

```javascript
player.onChat("chop", function () {
    height = 0
    while (agent.detect(AgentDetection.Block, FORWARD)) {
    	
    }
```

## Step 8

Add a ``||while loop||`` to change the **height** ``||variable||`` to the value of **height plus 1**.

```javascript
    while (agent.detect(AgentDetection.Block, FORWARD)) {
        height += 1
    }
```

## Step 9

In the ``||while loop||``—under the change variable **height**—code the agent to  ``||destroy up||``. 

Also, add a line to have the ``||agent move up by 1||``.

```javascript
    height += 1
        agent.destroy(UP)
        agent.move(UP, 1)
    }
```

## Step 10

Add a ``||for loop||`` after the ``||while loop||``. Insert the **height** variable into the **times** argument of the ``||repeat loop||``.

```javascript
for (let index = 0; index < height; index++) {
    } 
```

## Step 11

Inside the ``||for loop||``,  add a line for ``||agent move down by 1||`` and ``||agent destroy forward||``.

```javascript
for (let index = 0; index < height; index++) {
        agent.move(DOWN, 1)
        agent.destroy(FORWARD)
    }
```

## Step 12

After the ``||for loop||``, code the agent to ``||collect all||`` .

```javascript
    }
    agent.collectAll()
})
```

## Step 13

Go into Minecraft and test out the **it**, **tp**, and **chop** chat commands.

### Full Code: 

```javascript
let height = 0
player.onChat("lt", function () {
    agent.turn(LEFT_TURN)
})
player.onChat("tp", function () {
    agent.teleportToPlayer()
})
player.onChat("chop", function () {
    height = 0
    while (agent.detect(AgentDetection.Block, FORWARD)) {
        height += 1
        agent.destroy(UP)
        agent.move(UP, 1)
    }
    for (let index = 0; index < height; index++) {
        agent.move(DOWN, 1)
        agent.destroy(FORWARD)
    }
    agent.collectAll()
})
```

