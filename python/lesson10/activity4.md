### @explicitHints true
### @hideIteration true 

# Spring arrival

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
for index in range(10):
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
In the coding window you have a been given a code that does not work. Delete the quotes (**'**) from the begining and end of each line. 
This code is supposed to plant flowers on each block of grass by making the Agent move through the area row by row.
Can you finish the code by adding a conditional and debugging the main loop?
```template
'for index in range(4):'
'   for index2 in range(8):'
'        if agent.inspect(AgentInspection.BLOCK, DOWN) == GRASS:'
'            agent.place(DOWN)'
'        agent.move(FORWARD, 1)'
'   agent.turn(RIGHT_TURN)'
'   agent.move(FORWARD, 1)'
'   agent.turn(RIGHT_TURN)'
'   for index3 in range(8):'
'       if True:'
'           agent.place(DOWN)'
'       agent.move(FORWARD, 1)'
'   agent.turn(LEFT_TURN)'
'   agent.move(FORWARD, 1)'
'   agent.turn(LEFT_TURN)'
```

