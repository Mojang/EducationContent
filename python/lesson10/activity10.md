### @explicitHints true

# Do I need to list it out? 

```python
agent.move(FORWARD, 5)
pos(0, 0, 0)
player.say("Finished")
agent.place(LEFT)
agent.inspect(AgentInspection.BLOCK, DOWN) 
agent.turn(RIGHT_TURN)
agent.destroy(BACK)
agent.drop_all(FORWARD)
agent.collect_all()
loops.pause(500)
for i in range(10):
    pass
if True: 
    pass
else: 
    pass
elif:
    pass
while True:
    pass
```

## Step 1
You have been given a list. To find what block type the Agent should stand on, **sort** the list alphabetically. 
Get the **second** block in that list, press the button next to those blocks to teleport the Agent to those blocks. To find what block type your player should stand on **reverse** and **pop** the **fourth** item in the list. 
Get the **sixth** block in that list and stand on that block. 

```template
block_list = ["DIAMOND", "ICE", "EMERALD", "STONE", "WOOD", "GOLD", "QUARTZ"]
```