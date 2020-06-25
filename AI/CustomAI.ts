/**
 * Writing data for hacking stem experiments
 */
//% weight=94 color=#EC7505 icon="\uf1b3"
namespace AIForEarth {
    // the agentDestroy and hazardsRemain functions are supposed to
    // look indistinguishable from lesson to lesson, since only one
    // set will ever appear at a time. their display names should
    // not specifically include which lesson they are a part of
    let targetsL4 = 5
    let targetsL5 = 10
    let targetsL6 = 49
    let counterL4 = 9
    let counterL5 = 30
    let counterL6 = 60
    let shortHazard = 31   
    let tallHazard = 175   
    let airBlock = Block.Air
    let brokeNonHazard = false
    let taskIsComplete = false
    let monitorCount = 18

    /**
     * Test
     * @param dir the direction of detection
     */
    //% block="agent test air %dir"
    //% weight=80
    
    export function agentTest(dir: SixDirection) {
        return agent.inspect(AgentInspection.Block, dir) == airBlock
    }
}