### @explicitHints true

# Activity 3 -  Getting through. 

```python
agent.detect(AgentDetection.BLOCK, FORWARD) 
agent.turn(LEFT_TURN)
agent.move(FORWARD, 5)
for i in range(2):
      pass
if True:
      pass
```

## Step 1
Write a code to make the Agent detect and avoid randomly placed blocks, as it moves through the course. To do this use an 
`||logic:if else||` conditional with an **elif** conditional in between. For the **if** condition use two `||agent:agent detect||` commands 
with a **and not** operator in between them. For the **elif** condition use two `||agent:agent detect||` commands 
with a **and** operator in between them.

### ~ tutorialhint 
When using more than one condition together you can use a **and** or **and not** to check multiple states. 

```template    
//Replace with for loop set to 23                                            
//Replace with if else conditional with two Agent detect commands, seperated by an and not operator
agent.move(LEFT, 1)                              
//Replace with elif conditional with two Agent detect commands, seperated by an and operator
agent.move(RIGHT, 2)
//Replace with else part of the else if conditional             
agent.move(FORWARD, 1)                                   
//End of loop                                       
```
