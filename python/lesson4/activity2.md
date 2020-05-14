### @explicitHints true

# Activity 2 - Spin cycle.

```python
for i in range(2):
pass
agent.collect_all()
agent.move(FORWARD, 5)
agent.drop_all(FORWARD)

```

## Step 1
**Part 1:** Make a code so that the Agent will pickup the dirty laundry, move **forward** into the machine, spin left **20** times and then get out of
the machine to place the clean laundry on the other side of where the dirty laundry was.

## Step 2
**Part 2:** Edit the same code so that the Agent does the same thing but for **3** loads of laundry. Do this by using a `||loops: for||` loop before all of the other 
code.
### ~ tutorialhint 
Dont forget that two loops can't have the same names, so rename the second loop. 

```template
// replace with for loop                      | Part 2
agent.collect_all()
agent.move(FORWARD, 7)
agent.drop_all(FORWARD)
// replace with for loop                      | Part 1
// make the Agent turn left 20 times          | Part 1 
// make the Agent collect all                 | Part 1          
// make the Agent move back                   | Part 1
// make the Agent drop everything to the left | Part 1
```
