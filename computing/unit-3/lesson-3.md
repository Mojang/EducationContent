# Lesson 3: Plant Some Flowers 

## Step 1
Let's add some plants to the park. Give your Agent an inventory of flowers.

In Minecraft, ensure your player is at the following coordinates: **67, 69, -557**. If needed, use the slash command to teleport your player to the position by typing **/tp 67 69 -557** and selecting **Enter**.   

Place the flowers in **slots 1-5** of your Agent's Inventory. 

## Step 2
In MakeCode, rename the **run** element of the ``||Player:on chat command||`` block to **plant_flowers**. 

Drag the ``||Loops:repeat [4] times||`` code block into your ``||Player:on chat command||`` and set the number to the number of blocks you have along one side of your park. In our example, we will set this to **20**. 

``` blocks
player.onChat(" plant_flowers", function () {
    for (let index = 0; index < 20; index++) {
    	
    }
})
```

## Step 3
Now drag the ``||Agent:agent set active slot||`` code block inside the ``||loops: repeat loop||``.    

``` blocks
player.onChat(" plant_flowers", function () {
    for (let index = 0; index < 20; index++) {
        agent.setSlot(1)
    }
})
```

## Step 4
Visit a new toolbox drawer in the left menu, called the ``||Math:MATH||`` drawer. 

The blocks in this drawer allow you to use mathematics to create a ***variable*** in your code. You can think of a variable as box that holds information or data that can change as you code.  

Drag and drop the ``||Math:pick random [0] to [10]||`` code block to your ``||Player:on chat command||`` and place it as replacement for the number element of your ``||Agent:agent set active slot||``. 

This means that you have coded your Agent pick a random slot in its inventory, rather than choosing one slot specifically. 

``` blocks
player.onChat(" plant_flowers", function () {
    for (let index = 0; index < 20; index++) {
        agent.setSlot(Math.randomRange(0, 10))
    }
})
```

## Step 5
Set the first number to **1** and the second to **5**, corresponding with the five slots in which you placed the flowers in **Step 2**. 

## Step 6
Code your Agent randomly move around. Now visit the ``||Agent:Agent||``drawer and drag the ``||Agent:agent move [forward]||`` code block to the coding Workspace.   

``` blocks
player.onChat(" plant_flowers", function () {
    for (let index = 0; index < 20; index++) {
        agent.setSlot(Math.randomRange(1, 5))
        agent.move(FORWARD, 1)
    }
})
```

## Step 7
Add another ``||Math:pick random [0] to [10]||`` to replace the number oval of the ``||Agent:agent move [forward]||``. Change the second number of the ``||Math:pick random [0] to [10]||`` to **20**. 

When this line of code is activated, your Agent will move forward to a random block between its current position and 20 blocks ahead. 

``` blocks
player.onChat(" plant_flowers", function () {
    for (let index = 0; index < 20; index++) {
        agent.setSlot(Math.randomRange(1, 5))
        agent.move(FORWARD, Math.randomRange(0, 20))
    }
})
```

## Step 8
Drag two ``||Agent:agent place [forward]||`` code blocks to the coding Workspace, setting the second one to **back** with the drop-down menu. 

``` blocks
player.onChat(" plant_flowers", function () {
    for (let index = 0; index < 20; index++) {
        agent.setSlot(Math.randomRange(1, 5))
        agent.move(FORWARD, Math.randomRange(0, 20))
        agent.place(FORWARD)
        agent.place(BACK)
    }
})

```

## Step 9
Drag another ``||Agent:agent set active slot||`` code block to the coding Workspace. Revisit the ``||Math:MATH||`` drawer and add another ``||Math:pick random [0] to [10]||``. Add it to your ``||Agent:agent set active slot||`` code block and change the numbers to 1 and 5. 

``` blocks
player.onChat(" plant_flowers", function () {
    for (let index = 0; index < 20; index++) {
        agent.setSlot(Math.randomRange(1, 5))
        agent.move(FORWARD, Math.randomRange(0, 20))
        agent.place(FORWARD)
        agent.place(BACK)
        agent.setSlot(Math.randomRange(1, 5))
    }
})
```

## Step 10
Now revisit the ``||Agent:Agent||`` drawer and select an ``||Agent:agent move [forward]||`` code block to the coding Workspace, setting it to **back** with the drop-down menu. 

Select another ``||Math:pick another pick random [0] to [10]||`` and add it to your ``||Agent:agent move [back]||`` code block and set the numbers to **0** and **20**. 

``` blocks
player.onChat(" plant_flowers", function () {
    for (let index = 0; index < 20; index++) {
        agent.setSlot(Math.randomRange(1, 5))
        agent.move(FORWARD, Math.randomRange(0, 20))
        agent.place(FORWARD)
        agent.place(BACK)
        agent.setSlot(Math.randomRange(1, 5))
        agent.move(BACK, Math.randomRange(0, 20))
    }
})
```

## Step 11
Now visit the ``||Agent:Agent||`` drawer and drag two ``||Agent:agent place [forward]||`` code blocks to the coding Workspace, setting the second one to **back**. 

Finally, drag an ``||Agent:agent move [left]||`` code block to the coding Workspace to finish this code. 

``` blocks
player.onChat(" plant_flowers", function () {
    for (let index = 0; index < 20; index++) {
        agent.setSlot(Math.randomRange(1, 5))
        agent.move(FORWARD, Math.randomRange(0, 20))
        agent.place(FORWARD)
        agent.place(BACK)
        agent.setSlot(Math.randomRange(1, 5))
        agent.move(BACK, Math.randomRange(0, 20))
        agent.place(FORWARD)
        agent.place(BACK)
        agent.move(LEFT, 1)
    }
})
```

## Step 12
Position your Agent and run the code. Position your Agent at one corner of your park, with the Agent facing the bulk of the park and with the main body of the park to the left. We have marked this in the image below with Yellow Wool. 

Test your code. Your Agent should now move forward to a random location, plant two randomly selected flowers, move backward, do the same and move left to start again. This will create a random meadow of flowers. 
