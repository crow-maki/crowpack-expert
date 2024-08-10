PlayerEvents.loggedIn(event => {
  const startingStage = 'starting'
  if (!event.player.stages.has(startingStage)) {
    event.player.give(tome())
    event.player.give('sophisticatedbackpacks:backpack')
    event.player.give('croptopia:grilled_cheese', 20)

    event.player.stages.add(startingStage)
  }
})