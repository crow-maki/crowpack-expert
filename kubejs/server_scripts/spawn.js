let $HeightMapTypes = Java.loadClass('net.minecraft.world.level.levelgen.Heightmap$Types')

PlayerEvents.loggedIn(event => {
  const startingStage = 'starting'
  if (!event.player.stages.has(startingStage)) {

    let lostCitiesLevel = event.server.getLevel("lostcities:lostcity")
    let playerPos = event.player.blockPosition().mutable()
    event.server.runCommand(`forge generate ${playerPos.x} 0 ${playerPos.z} 1 lostcities:lostcity`)

    event.server.scheduleInTicks(100, () => {
      let tpY = lostCitiesLevel.getChunkAt(playerPos).getHeight($HeightMapTypes.WORLD_SURFACE_WG, playerPos.x, playerPos.z)
      let tpPos = playerPos.setY(tpY)
      event.player.teleportTo("lostcities:lostcity", tpPos.x, tpPos.y, tpPos.z, 0, 0)
      event.player.spawnLocation = lostCitiesLevel.getBlock(playerPos.x, tpY + 1, playerPos.z)

    })

    event.player.give(tome())

    event.player.stages.add(startingStage)
  }
})