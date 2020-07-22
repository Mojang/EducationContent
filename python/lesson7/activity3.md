### @explicitHints true

# Activity 3 - Home reconstruction. 

```python
agent.turn(LEFT_TURN)
agent.place(RIGHT)
agent.move(FORWARD, 5)
agent.detect(AgentDetection.BLOCK, FORWARD) 
while True:
      pass
```

## Step 1
**Part 1:** Write some code to make the Agent follow the guideline of Redstone dust and place blocks to its left to make the small house's foundation.
Use **two** `||loops:while||` loops with **two** sequences, one for the straight sections and one for the outside corners. 

## Step 2 
**Part 2:** Add to the code to make the Agent build the foundation of a larger house. Write a additional `||loops:while||` loop with 
an additional sequences for the inside corners.  
### ~ tutorialhint 
When writing the sequence for the inside corners it needs to include a part where 
the Agent needs to move one block beyond the outline to place a block, and then move back. 

```template
//Replace the lines below with your code #    
//While loop 1 with an Agent detect condition |Part 1
//Make the Agent place a block to its left    |Part 1       
//Make the Agent move forward                 |Part 1 
//While loop 2 with an Agent detect condition |Part 1
//Make the Agent turn left                    |Part 1                 
//Make the Agent move forward                 |Part 1
//End of while loop 2
//While loop 3 with an Agent detect condition         |Part 2
//Make the Agent place a block to its left            |Part 2        
//Make the Agent move forward                         |Part 2
//Make the Agent place a block to its left            |Part 2        
//Make the Agent move back                            |Part 2
//Make the Agent turn right                           |Part 2                 
//End of while loop 3
//End of while loop 1                        
```
