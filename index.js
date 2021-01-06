module.exports = function misc(dispatch) {
    let enabled = true

    dispatch.command.add("heck", () => {
        enabled = !enabled
        dispatch.command.message(`Free flight on new island ${enabled ? "enabled" : "disabled"}`)
    })

    dispatch.hook("S_LOAD_TOPO", 3, () => {
        if (!enabled) return

        dispatch.toClient('S_ABNORMALITY_BEGIN', 3, {
            target: dispatch.game.me.gameId,
            id: 30010000,
            duration: 9999999999,
            stacks: 1
        })
    })
}