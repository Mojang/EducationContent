### @explicitHints true

# Diamond rush. 

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
Finish the code so that the Agent moves forward and counts each gold block he passes over.  At the end hell stack how ever many gold blocks he has passed over. 

```template
diamond = 0
for index in range(diamond)
    agent.place(FORWARD)
    loops.pause(500)
```