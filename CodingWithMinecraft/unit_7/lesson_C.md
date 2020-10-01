### @explicitHints 1

# Activity: One Block At a Time 

## Step 1
Use Introduction to the Agent activity as the starter code. This will allow you to easily position your agent, and then you can adapt some of it to do something new.

```template
player.onChat("tp", function () {
    agent.teleportToPlayer()
})
player.onChat("fd", function () {
    agent.move(FORWARD, 1)
})
player.onChat("lt", function () {
    agent.turn(TurnDirection.Left)
})
player.onChat("bk", function () {
    agent.move(BACK, 1)
})
player.onChat("rt", function () {
    agent.turn(TurnDirection.Right)
})
```

## Step 2
Get Ready to Equip the Agent. To get your agent to place things, you first need to equip it with the block or item you want it to place. A chat command could make this a little easier, but in the end, there is no automated way of doing this completely at the time of this publication. From ``||Player:PLAYER||``, drag a ``||Player:on chat command||`` to the workspace.

## Step 3
Rename the command to **givegold**.

Go to the Search and find **give**.

## Step 4
Give yourself blocks, and then equip your agent manually. Change the 'Give' so you are giving your character blocks of gold. The maximum you can hold in one inventory slot is 64, so give your character **64** blocks of **gold**.

### ~ tutorialhint
``` blocks
player.onChat("givegold", function () {
    mobs.give(
    mobs.target(LOCAL_PLAYER),
    GOLD_BLOCK,
    64
    )
})
```

## Step 5
Equip the Agent. Now that you have blocks of gold equipped, you need to equip your agent. Use the ``||Player:on chat command 'tp'||`` to teleport your agent near you or walk over to your agent.

## Step 6
Right-click your agent to see the agent's inventory and your character's inventory. Transfer the blocks of gold to your agent. Any item you want the agent to use must be placed in the upper-left corner of its inventory first! That exact place, upper-left corner, is critical! It's the only place it will work.

## Step 7
Agent - Make a Small Square. Now that your agent has blocks of gold, it is time to make something. Remember Lesson 2 - Activity 1 - Yellow Brick Road? Let's have the agent make a square for this time that could one day link up to that yellow brick road! Agents cannot replace blocks, but they are able to destroy things!

## Step 8
Let's destroy the ground and replace those blocks with blocks of gold. First, duplicate ``||Player:on chat command "fd"||`` and rename it **square**. You can duplicate by right-clicking and selecting duplicate.

## Step 9
To make your square, you have to think about what it will take to make it. Start with the big goal and work your way down to the small pieces you need to make that happen. When you start coding, you work on the smallest part first, adding more as you go. 

## Step 10
Agent - Make a Small Square. Let's start by placing just one gold block to accomplish your goal. What code would you need to do this? From ``||Agent:AGENT||``, put ``||Agent:agent destroy down||`` inside ``||Player:on chat command "square"||``.

## Step 11
Put ``||Agent:agent place down||`` inside ``||Player:on chat command "square"||``. The agent will place whatever is in that upper-left corner of his inventory, like we talked about earlier. It will place the blocks of gold in this case. Now ``||Player:on chat command "square"||`` should look like the following:

### ~ tutorialhint
``` blocks 
player.onChat("square", function () {
    agent.destroy(DOWN)
    agent.place(DOWN)
})

```

## Step 12
Success! Now let's try to take this a step further. Using a loop, let's try to make one side of the square! You need your agent to move, and you need him to break and place several times. This is a perfect problem for a loop. From ``||Loops:LOOPS||``, grab a ``||Loops:repeat||`` loop to surround the existing code in ``||Player:on chat command "road"||``.

## Step 13
Adjust the ``||Loops:repeat||`` loop to repeat six times.

## Step 14
Adding ``||Agent:agent move forward by 1||`` at the end of this loop will get your agent moving while he destroys and places blocks.

### ~ tutorialhint
``` blocks
player.onChat("square", function () {
    for (let i = 0; i < 6; i++) {
        agent.destroy(DOWN)
        agent.place(DOWN)
        agent.move(FORWARD, 1)
    }
})

player.onChat("tp", function () {
    agent.teleportToPlayer()
})
player.onChat("fd", function () {
    agent.move(FORWARD, 1)
})
player.onChat("lt", function () {
    agent.turn(TurnDirection.Left)
})
player.onChat("bk", function () {
    agent.move(BACK, 1)
})
player.onChat("rt", function () {
    agent.turn(TurnDirection.Right)
})
```
