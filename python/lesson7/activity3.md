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
**Part 1:** Write a code to make the Agent move on the guideline of Redstone dust and place bloks within it to make a small house foundation. Use **two** 
`||loops:while||` loops with **two** sequences, one for the strait pieces and one for the outside corner. 

## Step 2 
**Part 2:** Add to the code to make the Agent build a foundation for a larger house. Write a additional `||loops:while||` loop with another sequences for the 
inside corners.  
### ~ tutorialhint 
When writing the inside corners the Agent needs to go into the outline to place a block and then out again. 

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
//Make the Agent place a block to its left            |Part 2        
//Make the Agent move forward                         |Part 2
//End of while loop 3
//End of while loop 1
                              
```
