### @explicitHints true
### @hideIteration true 
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
Delete the quotes (**'**) from the begining and end of each line. 
Finish the code so that the Agent moves towards the gold block and counts each diamond block it passes over.   
At the end, when the Agent reaches to the gold block, it will stack the number of diamonds, passed over, in a pillar.
```template
'diamond = 0'
'for index in range(11):'
'    agent.move(FORWARD, 1)'
'for index2 in range(diamond)'
'    agent.place(FORWARD)'
'    loops.pause(500)'
```