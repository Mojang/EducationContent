###@explicitHints true

# Activity 3 - Pasture of trees. 

```python
agent.turn(RIGHT_TURN)
agent.place(RIGHT)
agent.move(FORWARD, 5)
agent.inspect(AgentInspection.BLOCK, FORWARD) 
agent.till(BACK)
for i in range(4):
      pass
if True: 
    pass
else: 
    pass
elif:
    pass
```

## Step 1
**Part 1:** Write three new functions with different sequences, one to make the Agent **move forward**, one to **turn left**, and one to **turn right**. 
Then use these functions in a `||loops:for||` loop to make the Agent pass over every block in the area, row by row, until it reaches to the gold block.

## Step 2 
**Part 2:** Add to the code to make the Agent till the grass blocks that it passes over and plant a sapling.
Do this by adding an `||logic:if else||` conditional, that inspects for grass blocks, in the function that moves the Agent forward. 

```template
//Place your functions below #  
//Add to the comment below, as it has now changed             |Part 2
//Replace with comment about function below           |Part 1    
//Declare function 1                                  |Part 1
//For loop 1 set to 8                                 |Part 1
//If else conditional with Agent inspect condition            |Part 2
//Add function that plants saplings                           |Part 2
//Place the command below in the else part of the conditional |Part 2
//Make the Agent move forward |Part 1
//End of loop 1
//Replace with comment about function below           |Part 1    
//Declare function 2                                  |Part 1
//Make the Agent turn right                           |Part 1
//Make the Agent move forward                         |Part 1
//Make the Agent turn right                           |Part 1
//Replace with comment about function below           |Part 1    
//Declare function 3                                  |Part 1
//Make the Agent turn left                            |Part 1
//Make the Agent move forward                         |Part 1
//Make the Agent turn left                            |Part 1
//Replace with comment about function below                   |Part 2 
//Declare function 4                                          |Part 2
//Make the Agent move forward                                 |Part 2
//Make the till back                                          |Part 2
//Make the place back                                         |Part 2
//Replace the lines below with your code #
//For loop 2 set to 4                                 |Part 1
//Make the Agent move forward                         |Part 1
//Make the Agent turn right                           |Part 1
//Make the Agent move forward                         |Part 1
//Make the Agent turn left                            |Part 1                       
```
