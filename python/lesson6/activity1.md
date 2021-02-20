### @explicitHints true

# Activity 1 -  Stop and go.

```python
loops.pause(2000)
agent.move(FORWARD, 5)
for i in range(2):
      pass
if True:
      pass
agent.detect(AgentDetection.BLOCK, FORWARD)
```

## Step 1
**Part 1:** Write some code so that the Agent will only move when there **is** a block on its left side. 
Use a `||agent: agent detect||` command for the condition: 
```python
agent.detect(AgentDetection.BLOCK, LEFT)
```

## Step 2
**Part 2:** Edit the code so that the Agent moves when there **no** block to its left. 
Do this by adding a **not** operator before the condition. 

## Step 3
**Part 3:** Make the Agent move again after the `||loops:pause||` command to reach the last gold block.

### ~ tutorialhint
**1000** ms is **1** second.

```template
//Replace the lines below with your code #    
//for loop set to 7                            |Part 1
//Add the operator NOT to the condition below          |Part 2 
//if conditional with an Agent detect condition|Part 1
//Make the Agent move forward                  |Part 1
//if conditional with an Agent detect condition                |Part 3
loops.pause(2000)
//Make the Agent move forward                                  |Part 3
//End of loop
```
