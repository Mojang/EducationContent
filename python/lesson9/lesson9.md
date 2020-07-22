### @explicitHints true
# Agent Invader  

```python
pos(0, 0, 0)
mobs.spawn(FIREWORKS_ROCKET, agent.get_position())
blocks.place()
blocks.test_for_block(GRASS, pos(0, 0, 0))
positions.add(pos(0, 0, 0), pos(0, 0, 0))
loops.pause(100)
agent.move(FORWARD, 5)
agent.get_position()
gameplay.title(mobs.target(NEAREST_PLAYER), "Congratulations!", "You won!")
mobs.target(NEAREST_PLAYER)
player.say("HI")
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
**Activity 1 - Game controls:**
There are two 'buttons' on the controller, blue is to make the Agent move left and red is to make the Agent move right. Write some code 
so that when you stand on the red or blue blocks the Agent moves in the correct direction. Use the test for block command below, to check if a block 
is in a certain position:
```python
blocks.test_for_block(BLOCK_NAME, pos(0, 0, 0))
```

### ~ tutorialhint
A `||loops:while||` loop with the condition set to **True** will repeat continuously. Do **not** delete any pregiven code in the coding window.

## Step 2
**Activity 2 - Firing system -**
**Part 1:** Write another function to make the Agent shoot the gold blocks above it.
Use a `||mobs: mob spawn||` command with **FIREWORKS_ROCKET** to shoot. Each gold block shot needs to be replaced with an **AIR** block, to make it disapear.
Use an `||agent: agent position||` command to get the Agents position.
Use a add positions command with an `||agent: agent position||` command inside, to get the position of the **AIR** block. 
The two commands together look like:
```python 
positions.add(agent.get_position(), pos(0, 0, 0))
```
## Step 3
**Part 2:** Add to the code to make the Agent shoot at the second row of gold blocks, using an additional `||logic: elif||`
conditional. 

## Step 4
**Activity 3 - Scoring system:**
In the code you have been given a variable named `||variables:score||`, add **1** to the variable each time the Agent shoots a gold block.
Edit the condition in the while loop, so that it only loops when `||variables:score||` is less than or equal to **15**. 
Add two splash screens at the start and the end of the game using the `||gameplay:show title||` command. Declare the `||variable:score||` variable
as global, using the command:
```python
global score 
```

### ~ tutorialhint
**<=** means **less than or equal to**.


```template
//Replace with your functions below #
//Declare function 2                                                          |Act. 2 Part 1
//Declare score variable as global                                                           |Act. 3      
//If conditional, test for block condition, Agent pos + 2                     |Act. 2 Part 1
//Spawn firework rockets at Agent position                                    |Act. 2 Part 1
//Pause for 100ms                                                             |Act. 2 Part 1
//Place AIR block at Agent pos + 2                                            |Act. 2 Part 1
//Add 1 to the variable score                                                                |Act. 3
//Elif conditional, test for block condition, Agent pos + 3                   |Act. 2 Part 2
//Spawn firework rockets at Agent position                                    |Act. 2 Part 2
//Pause for 100ms                                                             |Act. 2 Part 2
//Place AIR block at Agent pos + 3                                            |Act. 2 Part 2
//Add 1 to the variable score                                                                |Act. 3
//Replace with comment about function below                           |Act. 1      
//Declare function                                                    |Act. 1
//If conditional with test for block condition (LIGHT_BLUE_CONCRETE)  |Act. 1
//Make the Agent move right                                           |Act. 1
//Elif conditional with test for block condition (RED_CONCRETE)       |Act. 1
//Make the Agent move left                                            |Act. 1
//Replace the lines below with your code #  
score = 0
//Add a start splash screen using the gameplay title command                                 |Act. 3
//Change while loop to only loop when score is <= 15                                         |Act. 3
//While loop with True as condition                                   |Act. 1
//Call function                                                       |Act. 1
//Call function 2                                                             |Act. 2 Part 1
//Add a end splash screen using the gameplay title command                                   |Act. 3
//Spawn lighting bolt on Agent position                                                      |Act. 3  
if score > 15
player.execute("scoreboard players set @p score 15")
```
