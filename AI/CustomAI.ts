//% color=#00bbff
namespace AIForEarth{

    /**
     * Test
     * @param value, the number of sequence loops
     */
    //% block
    export function testSequence(value: number){
        let i
        for (i = 0; i < value; i++) {
            agent.move(FORWARD, 3)
            agent.turn(TurnDirection.Right)
            agent.move(FORWARD, 3)
            agent.turn(TurnDirection.Right)
            agent.move(FORWARD, 3)
            agent.turn(TurnDirection.Right)
            agent.move(FORWARD, 3)
            agent.turn(TurnDirection.Right)
        }
    }
}