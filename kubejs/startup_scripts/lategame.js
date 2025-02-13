StartupEvents.registry('item', event => {
  event.create('fried_ender_dragon_egg').food(food => {
    food
      .hunger(12)
      .saturation(4.2) // 这个值并不直接表示饱和度
      .effect("minecraft:wither", 300, 1, 1)
      .effect("alexsmobs:sunbird_blessing", 300, 1, 1)
      .effect("enigmaticlegacy:molten_heart", 500, 1, 1)
      .effect("forbidden_arcanus:spectral_vision", 500, 1, 1)
      .effect("forbidden_arcanus:darkened", 400, 1, 1)
      .alwaysEdible() // 就像金苹果一样
  })
})

StartupEvents.registry('item', e => {
  e.create('elegy_of_memories').maxStackSize(1)
  .rarity('legendary')
  .tooltip('§5§o引发已逝记忆的回响')
})

StartupEvents.registry('item', e => {
  e.create('scroll_of_harmony').maxStackSize(1)
  .rarity('legendary')
  .tooltip('§5艺术的力量，被囚禁在纸片中')
})

StartupEvents.registry('item', e => {
  e.create('catalytic_essence').maxStackSize(16)
  .rarity('legendary')
  .tooltip('§5§o在现实尽头的一个微小点，宽度为存在，深度为永恒')
})

StartupEvents.registry('item', e => {
  e.create('cluster_of_amberia').maxStackSize(16)
  .rarity('legendary')
  .tooltip('§6§o一小块时间，囚禁在永恒不变的存在中')
})

StartupEvents.registry('item', e => {
  e.create('elven_flare').maxStackSize(64)
  .rarity('rare')
  .glow(true)
  .tooltip('§o§b如星星般炙热的火焰，困于冷若冰霜的牢笼中')
})

StartupEvents.registry('item', e => {
  e.create('overcompressed_stone_chunk').maxStackSize(16)
})

StartupEvents.registry('item', e => {
  e.create('empty_catalyst').maxStackSize(64)
})

StartupEvents.registry('item', e => {
  e.create('inactive_catalyst').maxStackSize(64)
})

StartupEvents.registry('item', e => {
  e.create('unawakened_catalyst').maxStackSize(64)
})

StartupEvents.registry('item', e => {
  e.create('fractured_catalyst').maxStackSize(64)
})

StartupEvents.registry('item', e => {
  e.create('amberia_shard_1').maxStackSize(64).rarity('legendary')
})

StartupEvents.registry('item', e => {
  e.create('amberia_shard_2').maxStackSize(64).rarity('legendary')
})

StartupEvents.registry('item', e => {
  e.create('amberia_shard_3').maxStackSize(64).rarity('legendary')
})

StartupEvents.registry('item', e => {
  e.create('amberia_shard_4').maxStackSize(64).rarity('legendary')
})

StartupEvents.registry('item', e => {
  e.create('amberia_shard_5').maxStackSize(64).rarity('legendary')
})

StartupEvents.registry('item', e => {
  e.create('amberia_shard_6').maxStackSize(64).rarity('legendary')
})

StartupEvents.registry('item', e => {
  e.create('amberia_shard_7').maxStackSize(64).rarity('legendary')
})

StartupEvents.registry('item', e => {
  e.create('amberia_shard_8').maxStackSize(64).rarity('legendary')
})

StartupEvents.registry('item', e => {
  e.create('amberia_shard_9').maxStackSize(64).rarity('legendary')
})

StartupEvents.registry('item', e => {
  e.create('amberia_shard_10').maxStackSize(64).rarity('legendary')
})

StartupEvents.registry('item', e => {
  e.create('amberia_shard_11').maxStackSize(64).rarity('legendary')
})

StartupEvents.registry('item', e => {
  e.create('amberia_shard_12').maxStackSize(64).rarity('legendary')
})

StartupEvents.registry('item', e => {
  e.create('elegy_of_answer').maxStackSize(1)
  .rarity('legendary')
  .tooltip('§6§o„希望最后死去，燃烧在绝望的深渊中“')
})
