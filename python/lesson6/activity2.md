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
**Part 1:** Write a code to make the Agent turn left once it reaches the sign and stop on the gold block. Use and `||agent:agent inspect||` command
as the condition and compare it to **left**.
### ~ tutorialhint 
To compare a condition against the Minecraft world use **==**.


## Step 2
**Part 2:** Edit the code so that the Agent turns in both directions untill it reaches the gold block. Do this by adding another conditional
in between the **if** and **else** parts.
### ~ tutorialhint 
To add another conditional use the **elif** command with an `||agent:agent inspect||` command
as the condition compared it to **right**.

```template
left = BLUE_GLAZED_TERRACOTTA
right = PINK_GLAZED_TERRACOTTA
//Change value of loop below from 9 to 21                       |Part 2
//Replace with for loop set to 9                                |Part 1
//Replace with else if conditional with agent inspect condition |Part 1
//Make the agent turn left                                      |Part 1
//Replace with elif conditional with agent inspect condition    |Part 2
//Make the agent turn right                                     |Part 2
//Replace with else part of the else if conditional             |Part 1
//Make the agent move forward                                   |Part 1
//End of loop                                                   |Part 1
```
