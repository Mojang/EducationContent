### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration false 
### @flyoutOnly 1
### @explicitHints 1


# Higher Ground!

## Step 1
Step 1 is to ensure that the Agent has the necessary materials in the inventory. Use ``||agent:set block or item||``. Select the **plank** as a building material & its **amount**.
 
#### ~ tutorialhint
It's a good practice to provide **64** blocks for the Agent for each item. 

## Step 2
Step 2 is to program the Agent to place **forward**, **left** & **right** by using ``||agent:agent place||`` block. Does the Agent need to move **up** after? 

## Step 3
Step 3 is to program the Agent to build a **10** block high tower. 

#### ~ tutorialhint 
Try using ``||loops:repeat||`` block and change the number to **10**. 

## Step 4
Step 4 is to ensure that the Agent moves **down** from the tower.

## Step 5
Step 5 is to build the ladder in the tower, so that you can climb up! Use ``||agent:agent set block||`` and make sure that the ladder is **10** blocks high too!

```ghost
player.onChat("tower", function () {
    agent.move(FORWARD, 1)
    agent.setItem(LADDER, 64, 1)
    for (let index = 0; index < 10; index++) {
        agent.place(FORWARD)
        agent.move(UP, 1)
    }
    agent.move(DOWN, 10)
})

``` 


