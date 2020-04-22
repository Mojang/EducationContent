### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration false 
### @flyoutOnly 1
### @explicitHints 1


# Higher Ground!

## Step 1
Program the Agent to build a tower with **oak** blocks taht is **10** blocks high. First, ensure that the Agent has **64** blocks of **oak plank**  using ``||agent:set block or item||`` command. Program the Agent to place **forward**, **left** & **right** by using ``||agent:agent place||`` block. Think if the Agent needs to **move up** after placing the blocks.  

#### ~ tutorialhint 
Try using ``||loops:repeat||`` block and change the number to **10**. 

## Step 2
Program the Agent to move **down** from the tower and place **ladder** that is **10** blocks high. You need the ladder so that you can climb up!

#### ~ tutorialhint 
Don't forget to select **64** blocks of **ladder** in the Agent's inventory, so that the Agent can place the ladder. 


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


