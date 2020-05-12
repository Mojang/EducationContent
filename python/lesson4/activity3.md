### @explicitHints true

# Activity 3 - NOT WORKING!! cleaning up!

```python
for i in range(2):
pass
agent.collect_all()
agent.move(FORWARD, 5)
agent.place(FORWARD)
agent.drop_all(FORWARD)
agent.turn(LEFT_TURN)
```

## Step 1
Using a `||player: on chat command||` make a code so that the Agent will pick up the box and move it.

## Step 2
In the same `||player: on chat command||` edit the code so that the Agent does the same thing but **4** times. Use a `||loops: for||` loop to acomplish that.


```template
def on_chat():

player.on_chat("box", on_chat)
``` 