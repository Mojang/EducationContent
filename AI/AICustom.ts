
//% weight=94 color=#EC7505 icon="\uf1b3"
namespace hourOfCode {
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
    let shortHazard = 31   // fern and tallgrass
    let tallHazard = 175   // double plant (variants: peony, rose bush, double tallgrass, large fern, lilac, sunflower)
    let airBlock = Block.Air
    let brokeNonHazard = false
    let taskIsComplete = false
    let monitorCount = 18

    /**
     * Detects if there is dry brush next to the agent in the specified direction
     * @param dir the direction to detect the dry brush
     */
    //% block="agent detect dry brush %dir"
    //% weight=80
    export function ItWorks(dir: SixDirection) {
        let currentTarget = agent.inspect(AgentInspection.Block, dir)
        return currentTarget == tallHazard || currentTarget == shortHazard
    }
}
