### @explicitHints true
### @hideIteration true 
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
Write some code to make the Agent detect and avoid randomly placed blocks, as it moves through the course. To do this use an 
`||logic:if else||` conditional with an **elif** conditional in between. For the **if** condition use two `||agent:agent detect||` commands 
with an **and not** operator in between them. For the **elif** condition use two `||agent:agent detect||` commands 
with an **and** operator in between them. An example of two conditions with an **and not** operator:
```python
agent.detect(AgentDetection.BLOCK, DIRECTION) and not agent.detect(AgentDetection.BLOCK, DIRECTION)
```

### ~ tutorialhint 
When using more than one condition together you can use an **and** or **and not** to check multiple states. 

```template
//Replace the lines below with your code #    
//for loop set to 23                                            
//if else conditional with two Agent detect commands, seperated by an and not operator
agent.move(LEFT, 1)                              
//elif conditional with two Agent detect commands, seperated by an and operator
agent.move(RIGHT, 2)
//else part of the else if conditional             
agent.move(FORWARD, 1)                                   
//End of loop                                       
```
