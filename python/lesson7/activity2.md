### @explicitHints true
### @hideIteration true 
# Activity 2 - Firebreak. 

```python
agent.turn(LEFT_TURN)
agent.place(RIGHT)
agent.move(FORWARD, 5)
agent.detect(AgentDetection.BLOCK, FORWARD) 
while True:
      pass
```

## Step 1
Write some code to make the Agent move forward when there is Redstone dust in front of it.
While moving forward the Agent should make a one-block high wall to its left.
When it encounters a change in terrain height the Agent needs to move up and continue the wall.

```template
//Replace the lines below with your code #
//While loop 1 with an Agent detect Redstone condition 
//While loop 2 with an Agent detect block condition 
//Make the Agent place a block to its left         
//Make the Agent move up                            
//Make the Agent place a block to its left         
//Make the Agent move forward
//End of while loop 2
//Make the Agent place a block to its left         
//Make the Agent move forward
//End while loop 1                         
```