### @explicitHints true

# Activity 2 - Spin cycle.

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
Make a code so that the Agent will pickup the dirty laundry, move **forward** into the machine, spin around **20** times and then get out of
the mashine to place the clean laundry on the other side of where the dirty laundry was.

## Step 2
Edit the same code so that the Agent does the same thing but for **3** loads of laundry. Do this by using a `||loops: for||` loop before all of the other 
code.
### ~ tutorialhint 
Dont forget that two loops can't have the same names, so rename the second loop. 
