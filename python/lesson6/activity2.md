### @explicitHints true
 
# Activity 2 -  Is it left, or right? 

```python
agent.inspect(AgentInspection.BLOCK, FORWARD)
agent.turn(LEFT_TURN)
agent.move(FORWARD, 5)
for i in range(2):
      pass
if True:
      pass
```

## Step 1
**Part 1:** Write some code, using an `||logic:if else||` conditional, to make the Agent turn left when it reaches the sign and
then move forward onto the gold block. Use an `||agent:agent inspect||` command as the condition and compare it to the variable **left**.
The `||agent:agent inspect||` command looks like: 
```python
agent.inspect(AgentInspection.BLOCK, FORWARD)
```
Use the variables already provided in your code: left = BLUE_GLAZED_TERRACOTTA, right = PINK_GLAZED_TERRACOTTA
### ~ tutorialhint 
To check if two values are equal, use **==**.

## Step 2
**Part 2:** Edit the code so that the Agent turns in both directions until it reaches the gold block. Do this by adding an **elif**
conditional in between the **if** and **else** parts.
### ~ tutorialhint 
Use the **elif** conditional with an `||agent:agent inspect||` command
as the condition and compare it to the variable **right**.

```template
left = BLUE_GLAZED_TERRACOTTA
right = PINK_GLAZED_TERRACOTTA
//Replace the lines below with your code #
//Change value of loop below from 9 to 21                     |Part 2
//for loop set to 9                                   |Part 1
//if else conditional with an Agent inspect condition |Part 1
agent.turn(LEFT_TURN)
//elif conditional with an Agent inspect condition            |Part 2
//Make the agent turn right                                   |Part 2
//else part of the if else conditional                |Part 1
//Make the agent move forward                         |Part 1
//End of loop                                         |Part 1
```
