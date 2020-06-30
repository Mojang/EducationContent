### @explicitHints true

# Activity 1 - Water barrier. 

```python
agent.turn(LEFT_TURN)
agent.place(RIGHT)
agent.move(FORWARD, 5)
agent.detect(AgentDetection.BLOCK, FORWARD) 
while True:
      pass
```

## Step 1
**Part 1:** Write a code to make the Agent move forward when there is Redstone dust in front of it. 

## Step 2 
**Part 2:** Add a sequence to the code so that the Agent places a two-block high wall to its right as it moves. 
### ~ tutorialhint
You don not have to give the Agent any blocks, it already has the required blocks in its inventory.  
```template
//Replace the lines below with your code #    
//While loop with an Agent detect condition |Part 1
//Make the Agent place a block to its right         |Part 2
//Make the Agent move up                            |Part 2
//Make the Agent place a block to its right         |Part 2
//Make the Agent move back down                     |Part 2
//Make the Agent move forward               |Part 1
//End of while loop                                
```
