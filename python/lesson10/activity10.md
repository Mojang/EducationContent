### @explicitHints true
### @hideIteration true 

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
You have been given a list. Delete the quotes (**'**) from the begining and end of each line. To find what block type the Agent should stand on, **sort** the list alphabetically
and get the **second** block from the list. Press the button next to the correct blocks to teleport the Agent to there. 
To find what block type your player should stand on **reverse**  the list and **pop** the **fourth** block in the list. 
Get the **sixth** block from the list and stand on that block. 

```template
'block_list = ["DIAMOND", "ICE", "EMERALD", "STONE", "WOOD", "GOLD", "QUARTZ"]'
```