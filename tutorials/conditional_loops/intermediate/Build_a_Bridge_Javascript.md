
# Build a Bridge: Javascript


## Step 1
Code a ``||chat||`` command and name it **“build”**.

```javascript
player.onChat("build", function () {
})
```

## Step 2
Code the agent to ``||set a block||`` of **oak wood planks**, count of **64**, in slot **1** inside the ``||chat||`` command.

```javascript
player.onChat("build", function () {
    agent.setItem(PLANKS_OAK, 64, 1)
})
```

## Step 3
Code the agent to ``||move forward||`` by **1**.

```javascript
player.onChat("build", function () {
    agent.setItem(PLANKS_OAK, 64, 1)
    agent.move(FORWARD, 1)
})
```

## Step 4

Inside the ``||chat||``  command, code a ``||while loop||`` that starts with checking if the agent does ``||not detect a block||``  **down**.

```javascript
player.onChat("build", function () {
    agent.setItem(PLANKS_OAK, 64, 1)
    agent.move(FORWARD, 1)
    while (!(agent.detect(AgentDetection.Block, DOWN))) {
    	
    }
})
```

## Step 5

Inside the ``||while loop||`` , code for the ``||agent to place||`` **down**.

```javascript
player.onChat("build", function () {
    agent.setItem(PLANKS_OAK, 64, 1)
    agent.move(FORWARD, 1)
    while (!(agent.detect(AgentDetection.Block, DOWN))) {
        agent.place(DOWN)
    }
})
```

## Step 6

After the ``||place down||`` , code for the ``||agent to move||`` **forward by 1**. Then end the``||while loop||``.

```javascript
player.onChat("build", function () {
    agent.setItem(PLANKS_OAK, 64, 1)
    agent.move(FORWARD, 1)
    while (!(agent.detect(AgentDetection.Block, DOWN))) {
        agent.place(DOWN)
        agent.move(FORWARD, 1)
    }
})
```

### Full Code: 

```javascript
player.onChat("build", function () {
    agent.setItem(PLANKS_OAK, 64, 1)
    agent.move(FORWARD, 1)
    while (!(agent.detect(AgentDetection.Block, DOWN))) {
        agent.place(DOWN)
        agent.move(FORWARD, 1)
    }
})
```

