### @explicitHints true

# Activity 2 - Firing system.

```python
positions.add()
pos(0, 0, 0)
mobs.spawn(FIREWORKS_ROCKET, agent.get_position())
blocks.place()
loops.pause(100)
agent.move(FORWARD, 5)
agent.get_position()
if True: 
    pass
else: 
    pass
elif:
    pass
while True:
    pass
```

## Step 1
**Part 1:** Write another function to make the Agent shoot the first row of blocks above itself.
The Agent needs to use fireworks rockets when shooting. Each shoot block needs to be replaced with an **AIR** block. 

## Step 2 
**Part 2:** Add to the code to make the Agent do the same thing but also for the second row above, using an additional `||logic: elif||`
conditional. 

```template
//Place your functions below # 
//Replace with comment about function below      
//Declare function 2                                       |Part 1
//If conditional, test for block condition, Agent pos + 2  |Part 1
//Spawn firework rockets at Agent position                 |Part 1
//Pause for 100ms                                          |Part 1
//Place AIR block at Agent pos + 2                         |Part 1
//Elif conditional, test for block condition, Agent pos + 2        |Part 2
//Spawn firework rockets at Agent position                         |Part 2
//Pause for 100ms                                                  |Part 2
//Place AIR block at Agent pos + 2                                 |Part 2
//Replace the lines below with your code #           
def move():
    if blocks.test_for_block(LIGHT_BLUE_CONCRETE, pos(0, -1, 0)):
        agent.move(RIGHT, 1)
    elif blocks.test_for_block(RED_CONCRETE, pos(0, -1, 0)):
        agent.move(LEFT, 1)
while True:
    move()
# Call function 2                                          |Part 1          
```
