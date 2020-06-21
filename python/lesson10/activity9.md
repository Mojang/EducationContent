### @explicitHints true

# The Agent labyrinth.

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
Get the Agent through the maze. Write a code to use the colored blocks on the floor as forward, left, and right control directions for the Agent to move in.
Then get the Agent to the end of the maze. 

### ~ tutorialhint
Try using a endlessly repeating while loop.
