PlayerEvents.loggedIn(event => {
  const startingStage = 'starting'
  if (!event.player.stages.has(startingStage)) {
    event.player.give(tome())

    event.player.stages.add(startingStage)
  }
})