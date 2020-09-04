# Tutorial

## Step 1
Build a sustainable house with code! Use this starter code to get you going!

```python
def on_chat():
    agent.set_item(SANDSTONE, 64, 1)
player.on_chat("rl", on_chat)
def on_chat2():
    agent.move(FORWARD, 3)
player.on_chat("fd", on_chat2)
def on_chat3():
    agent.teleport_to_player()
    agent.set_assist(PLACE_ON_MOVE, True)
player.on_chat("pd", on_chat3)
def on_chat4():
    for index in range(5):
        agent.set_item(SANDSTONE, 64, 1)
        agent.teleport_to_player()
        agent.set_assist(PLACE_ON_MOVE, True)
        agent.move(FORWARD, 3)
        agent.turn(LEFT_TURN)
        if agent.detect(AgentDetection.BLOCK, FORWARD):
            agent.turn(RIGHT_TURN)
            agent.move(FORWARD, 3)
player.on_chat("square", on_chat4)
```

