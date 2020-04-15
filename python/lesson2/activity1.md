# Agent Build

### @explicitHints true

## Introduction @unplugged

The agent is very useful if it can build things for you. One thing you will learn in this
tutorial is how to use to enable the **place on move** Agent assist setting. This tells
your agent to place a block every time it moves. You will make a program to tell the Agent
to place blocks, move forward, and turn left. With these actions you can make your agent
build a shape, like the square built in this tutorial.

![The agent can build things for you](/static/tutorials/agent-build.gif)

## Step 1

Bring your Agent near you so it can start building. Teleport the Agent to your position but move it forward by `3`.

Run the program and look to see that your Agent comes close to your position.

```python
agent.teleport_to_player()
agent.move(FORWARD, 3)
```

## Step 2

To let the Agent build while moving, set the **place on move** Agent assist setting to **true**.

```python
agent.teleport_to_player()
agent.move(FORWARD, 3)
# @highlight
agent.set_assist(PLACE_ON_MOVE, True)
```

## Step 3

The agent needs some blocks in the inventory to place while moving. Put some **sandstone** blocks into slot `1` of the inventory.

```python
agent.teleport_to_player()
agent.move(FORWARD, 3)
agent.set_assist(PLACE_ON_MOVE, True)
# @highlight
agent.set_item(SANDSTONE, 16, 1)
# @highlight
agent.set_slot(1)
```

## Step 4

Now, have the Agent build a **square** with a combination of moves and turns. By moving forward and turning `4` times, the Agent can make a square out of blocks.

Run the program and watch your Agent build!

```python
agent.teleport_to_player()
agent.move(FORWARD, 3)
agent.set_assist(PLACE_ON_MOVE, True)
agent.set_item(SANDSTONE, 16, 1)
agent.set_slot(1)
# @highlight
agent.move(FORWARD, 3)
# @highlight
agent.turn_left()
agent.move(FORWARD, 3)
agent.turn_left()
agent.move(FORWARD, 3)
agent.turn_left()
agent.move(FORWARD, 3)
agent.turn_left()
```

## Step 5

That's an awful lot of moves and turns! Instead, use a **for** loop to repeat a single **move** and **turn** combination instead.

Use a **for** loop to have **move** and **turn** repeat `4` times. Move over to a new location in Minecraft and run the program again.

```python
agent.teleport_to_player()
agent.move(FORWARD, 3)
agent.set_assist(PLACE_ON_MOVE, True)
agent.set_item(SANDSTONE, 16, 1)
agent.set_slot(1)
# @highlight
for i in range(4):
    agent.move(FORWARD, 3)
    agent.turn_left()
```

## Step 6

Ouch, the Agent keeps hitting the last block! It would be better if the Agent can turn away before hitting a block. Use **detect** and **if else** logic to turn and move out if a block is in the way.

If a block is detected ahead, the Agent turns right and moves forward by `1` to exit the square. If there is no block in the way, the Agent turns left and builds the next side of the square.

```python
agent.teleport_to_player()
agent.move(FORWARD, 3)
agent.set_assist(PLACE_ON_MOVE, True)
agent.set_item(SANDSTONE, 16, 1)
agent.set_slot(1)
for i in range(4):
    agent.move(FORWARD, 3)
    # @highlight
    if agent.detect(AgentDetection.BLOCK, FORWARD):
        agent.turn_right()
        agent.move(FORWARD, 1)
    else:
        agent.turn_left()
```

