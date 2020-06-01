### @explicitHints true

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
Write a code to make the Agent move forward as long as there is Redstone dust in front. While going forward the Agent should place a one-block high
block to its left. When it encounters a change in terrain it should place the wall over the elavation. 


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