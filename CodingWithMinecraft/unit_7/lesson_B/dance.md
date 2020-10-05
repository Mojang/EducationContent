### @explicitHints 1

# Activity: Dance Dance Agent 

## Step 1
Make the "dance" command. Drag a new ``||Player:on chat command||`` block to the coding Workspace. Name this command **"dance"**.

## Step 2
Create a sequence of moves for your agent to follow. Here is one example:

```template 
player.onChat("dance", function () {
    agent.move(LEFT, 1)
    agent.attack(FORWARD)
    agent.move(RIGHT, 1)
    agent.move(RIGHT, 1)
    agent.move(RIGHT, 1)
    agent.turn(TurnDirection.Left)
    agent.move(LEFT, 1)
})
```

## Step 3
Dance again and again. Drag a ``||Loops:repeat||`` block into the ``||Player:on chat command "dance"||`` block and surround the agent blocks.

## Step 4
Use the ``||Loops:repeat||`` block to repeat your sequence of dance moves as many times as you want.

### ~ tutorialhint
``` blocks
player.onChat("dance", function () {
    for (let i = 0; i < 4; i++) {
        agent.move(LEFT, 1)
        agent.attack(FORWARD)
        agent.move(RIGHT, 1)
        agent.move(RIGHT, 1)
        agent.move(RIGHT, 1)
        agent.turn(TurnDirection.Left)
        agent.move(LEFT, 1)
    }
})
```

## Step 5
Where is your agent? Last, you need to get your agent to your character so you can see your robot dance. Remember, you can teleport your agent.  Let's make a separate ``||PLayer:on chat command||`` to get your agent.

## Step 6
Drag a new ``||PLayer:on chat command||`` block to the coding Workspace and name it "tp".

## Step 7
Put ``||Agent:agent teleport to player||`` inside ``||Player:on chat command "tp"||``.

## Step 8
Go into Minecraft. First, teleport the agent to your location by entering **tp** in the chat window. Then make him dance by entering dance in the chat window!

## Step 9
Slo-Mo. Because the agent moves through the dance steps so quickly, it may be hard to see his dance routine. MakeCode has a Slo-Mo feature that allows you to slow down a program so that you can move step by step through each instruction as it is carried out. This is very helpful when you are trying to troubleshoot code or watch a robot dance! The **Slo-Mo** button is at the lower left of the MakeCode screen and has an icon of a snail on it. When you click to toggle it on, the button turns yellow. Now, when you run a MakeCode program, everything will run slowly. You should be able to see each instruction highlighted in the coding Workspace as the robot carries it out in Minecraft. Also, changing your view with **F5** may make the dance more visible.

### ~ tutorialhint
``` blocks
player.onChat("dance", function () {
    for (let i = 0; i < 4; i++) {
        agent.move(LEFT, 1)
        agent.attack(FORWARD)
        agent.move(RIGHT, 1)
        agent.move(RIGHT, 1)
        agent.move(RIGHT, 1)
        agent.turn(TurnDirection.Left)
        agent.move(LEFT, 1)
    }
})
player.onChat("tp", function () {
    agent.teleportToPlayer()
})

```
