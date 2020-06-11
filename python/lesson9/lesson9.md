### @explicitHints true

# Agent Invader  

```python
positions.add()
pos(0, 0, 0)
mobs.spawn(FIREWORKS_ROCKET, agent.get_position())
blocks.place()
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
**Activity 1- Game controls:**
There are two 'buttons' on the controller, blue is to make the Agent's move left and red is to make the Agent's move right. Write a code 
so that when you stand on the red or blue blocks the Agent moves in the correct direction.  

### ~ tutorialhint
A `||loops:while||` loop with the condition set to **True** will repeat continuously. 

## Step 2
**Activity 2 - Firing system:**
**Part 1:** Write another function to make the Agent shoot the first row of blocks above itself.
The Agent needs to use fireworks rockets when shooting. Each shoot block needs to be replaced with an **AIR** block. 

## Step 3
**Part 2:** Add to the code to make the Agent do the same thing but also for the second row above, using an additional `||logic: elif||`
conditional. 

## Step 4
**Activity 3 - Scoring system:**
Declare a variable in the code named `||variables:score||`. Then add **1** to that variable each time the Agent shoots a gold block.
Edit the condition in the while loop, so that it only loops when `||variables:score||` is smaller, or equal to, **10**. 
### ~ tutorialhint
**Smaller or equal to** means **<=**.


```template
//Replace with your functions below #
//Declare function 2                                                              |Activity 2 Part 1
//Declare count variable as global                                                                   |Activity 3      
//If conditional, test for block condition, Agent pos + 2                         |Activity 2 Part 1
//Spawn firework rockets at Agent position                                        |Activity 2 Part 1
//Pause for 100ms                                                                 |Activity 2 Part 1
//Place AIR block at Agent pos + 2                                                |Activity 2 Part 1
//Add 1 to the variable score                                                                        |Activity 3
//Elif conditional, test for block condition, Agent pos + 2                       |Activity 2 Part 2
//Spawn firework rockets at Agent position                                        |Activity 2 Part 2
//Pause for 100ms                                                                 |Activity 2 Part 2
//Place AIR block at Agent pos + 2                                                |Activity 2 Part 2
//Add 1 to the variable score                                                                        |Activity 3
//Replace with comment about function below                           |Acttivity 1      
//Declare function                                                    |Acttivity 1
//If conditional with test for block condition (LIGHT_BLUE_CONCRETE)  |Acttivity 1
//Make the Agent move right                                           |Acttivity 1
//Elif conditional with test for block condition (RED_CONCRETE)       |Acttivity 1
//Make the Agent move left                                            |Acttivity 1
//Replace the lines below with your code #  
//Declare the variable score                                                                         |Activity 3 
//Add a start splash screen using the gameplay title command                                         |Activity 3
//Change while loop to only loop when score is <= 15                                                 |Activity 3
//While loop with True as condition                                   |Acttivity 1
//Call function                                                       |Acttivity 1
//Call function 2                                                                 |Activity 2 Part 1
//Add a end splash screen using the gameplay title command                                           |Activity 3
//Spawn lighting bolt on Agent position                                                              |Activity 3  
```
