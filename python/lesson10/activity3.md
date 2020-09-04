### @explicitHints true
### @hideIteration true 

# Diamond or dirt?

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
Write some code to calculate the answers to these four expressions. You need to get the Agent to the gold block, do this by placing a diamond or dirt
block, from the chest, depending on the answer of the expression. From left to right, if the answer is 1 place a diamond block, if its 0 place a dirt block. 
```python
1. 10000 / 10000 + 64.64 + 64.64 - 72 - 57.28
2. 64 / 4 + 64 / 64 - 128 / 8 - 1
3. 19283746 / 19283746 - 1 + 1000 / 100 - 9
4. 8 - 9 + 7 + 32 * 2 - 64 / 2 - 38
```
```template
//Calculate the expression: 10000 / 10000 + 64.64 + 64.64 - 72 - 57.28 
//
//Calculate the expression: 64 / 4 + 64 / 64 - 128 / 8 - 1 
//
//Calculate the expression: 19283746 / 19283746 - 1 + 1000 / 100 - 9
//
//Calculate the expression: 8 - 9 + 7 + 32 * 2 - 64 / 2 - 38 
```

