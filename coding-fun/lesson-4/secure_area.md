### @codeStart players set @s makecode 0
### @codeStop players set @s makecode 1

### @hideIteration false 
### @flyoutOnly 1
### @explicitHints 1


# Secure the Area

## Step 1
Use an ``||player:on chat||`` command to start coding. You will need to add ``||agent:agent destroy||``, ``||agent: agent place||`` , ``||agent: agent set block||`` and ``||agent: agent move||`` blocks to your code. 

## Step 2
Select **oak fence** block & **64** for the ``||agent:agent set block||``. Think about the correct sequence of agent commands & the correct directions. 

#### ~ tutorialhint
The right sequence of the Agent's actions is ``||agent: agent place||``, ``||agent: agent destroy||`` and ``||agent: agent move||``. 

## Step 3
Add a ``||loops: repeat||`` block. Don't forget to select how many times you want the code to repeat. 

#### ~ tutorialhint
You can try your code as many times as you want to. Don't try to get it right from the first attempt. 

## Step 4
When done, press the **Play** buton to compile the code. Don't forget to run your code in Minecraft. 

```ghost
player.onChat("1", function () {
    agent.setItem(OAK_FENCE, 64, 1)
    for (let index = 0; index < 17; index++) {
        agent.place(RIGHT)
        agent.destroy(FORWARD)
        agent.move(FORWARD, 1)
    }
})

``` 

