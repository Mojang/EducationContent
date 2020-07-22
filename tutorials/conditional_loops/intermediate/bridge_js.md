# Build a Bridge: Javascript


## Step 1
Code aN ``||player:on chat||`` command and name it **“build”**.

```javascript
player.onChat("build", function () {
})
```

## Step 2
Code the agent to ``||agent:set a block||`` of **oak wood planks**, count of **64**, in slot **1** inside the ``||player:on chat||`` command.

```javascript
player.onChat("build", function () {
    agent.setItem(PLANKS_OAK, 64, 1)
})
```

## Step 3
Code the agent to ``||agent:move forward||`` by **1**.

```javascript
player.onChat("build", function () {
    agent.setItem(PLANKS_OAK, 64, 1)
    agent.move(FORWARD, 1)
})
```

## Step 4

Inside the ``||player:on chat||``  command, code a ``||loops:while||`` loop that starts with checking if the agent does ``||agent:not detect a block||``  **down**.

```javascript
player.onChat("build", function () {
    agent.setItem(PLANKS_OAK, 64, 1)
    agent.move(FORWARD, 1)
    while (!(agent.detect(AgentDetection.Block, DOWN))) {
    	
    }
})
```

## Step 5

Inside the ``||loops:while||`` loop , code for the ``||agent:agent to place||`` **down**.

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

After the ``||agent:place down||`` command, code for the ``||agent:agent to move||`` **forward by 1**. Then end the ``||loops:while||`` loop.

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
## Step 7
Press the **Play** button, go to Minecraft, type **t** and try out **build**.

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

```ghost
agent.teleportToPlayer()
```
