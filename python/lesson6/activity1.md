### @explicitHints true

# Activity 1 -  Stop and go.

```python
agent.detect(AgentDetection.BLOCK, FORWARD)
loops.pause(2000)
agent.move(FORWARD, 5)
for i in range(2):
      pass
if True:
      pass
```

## Step 1
**Part 1:** Write a code so that the Agent will move when there **is** a block on its left side.

## Step 2
**Part 2:** Edit the code so that the Agent moves when there **isn't** a block. Do this by adding a **not** operator before the condition. 

## Step 3
**Part 3:** Add to the code so that the Agent stops for **2** seconds when there **is** a block to its left. Do this by using the `||loops:pause||`
command. After the two seconds the Agent should move again.

### ~ tutorialhint
Remeber that **1000**ms is approximately **1** second.

```template
//Replace with for loop set to 7                          |Part 1
//Add the operator NOT to the condition below             |Part 2
//Replace with if conditional with agent detect condition |Part 1
//Make the Agent move forward                             |Part 1
//Replace with if conditional with agent detect condition |Part 3
//Pause for 2 seconds                                     |Part 3
//Make the Agent move forward                             |Part 3
//End of loop
```
