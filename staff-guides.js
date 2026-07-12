(() => {
  const origins = window.MAP_GUIDES?.maps?.find(map => map.id === 'origins');
  if (!origins) return;

  origins.staffGuides = [
    ['Ice Staff — Ull’s Arrow', [
      'Build the staff: dig the three blue parts only while it is snowing. One part comes from dig sites in the spawn zone, one from the middle battlefield, and one from the church zone.',
      'Get the records and crystal: the blue record is around Generator 2 / the Tank Station. Take the Gramophone to the Ice tunnel beside the church, enter the Crazy Place, and collect the blue crystal.',
      'Build it at the blue pedestal on the lowest floor of the Excavation Site.',
      'Crazy Place puzzle: read the dot pattern on the blue ice wall, then shoot the matching floating ceiling stone with the Ice Staff. Six stones must flip. The wall pattern changes after each correct shot; a wrong shot resets the flipped stones.',
      'Freeze and break tombstone 1: to the right of the MP40 wall-buy near Generator 4. Shoot it with the Ice Staff, then immediately shoot it with any normal bullet weapon.',
      'Freeze and break tombstone 2: between the Excavation Site and the nearby giant-robot footprint close to Generator 4.',
      'Freeze and break tombstone 3: on the small hill reached by turning right from the rear exit of the Generator 2 bunker, beside the fallen robot hand.',
      'Excavation rings: use the four levers in the lower Excavation Site until every ring light is blue. Shoot the blue orb underneath the rings with the Ice Staff; it will rise into the ceiling.',
      'Soul charge: place the staff in the blue pedestal in the Crazy Place and kill roughly 20 zombies nearby. When the HUD staff icon gains a red outline, take Ull’s Arrow from the pedestal.',
      'Upgrade result: charged shots create a long-lasting blizzard, and the alternate end of the staff can remotely revive teammates.'
    ]],
    ['Fire Staff — Kagutsuchi’s Blood', [
      'Build the staff: obtain one red part from the Generator 6 reward chest after powering it, one by shooting down the glowing orange plane, and one from the first Panzer Soldat.',
      'Get the records and crystal: the red record spawns around the church / Generator 6 area. Use the Gramophone at the Fire tunnel near Generator 1 on the route toward Generator 3, then collect the red crystal in the Crazy Place.',
      'Build it at the red pedestal on the lowest floor of the Excavation Site.',
      'Crazy Place cauldrons: kill about 30 zombies with the Fire Staff while they are standing on the metal grates in the Fire section. Continue until all four cauldrons are burning and the completion sound plays.',
      'Church symbol puzzle: go upstairs in the church and identify the four glowing wall symbols. They correspond to numbered torches in the church basement; shoot only those four torches with the Fire Staff. The bloodstain represents torch 4, and 4 is always part of the answer. The other three numbers vary each game.',
      'Confirm the church step: all four correct torches stay lit and a beam rises from the Excavation Site. A wrong torch does not complete the sequence, so re-read the upstairs symbols rather than firing at every torch.',
      'Excavation rings: rotate the four rings until all ring lights are red, then shoot the red orb below them with the Fire Staff.',
      'Soul charge: place the staff in the red Crazy Place pedestal and kill roughly 20 zombies nearby. Pick it up when the staff icon gains a red outline.',
      'Upgrade result: Kagutsuchi’s Blood gains a charge attack that leaves a larger burning blast and can revive teammates with Sekhmet’s Vigor.'
    ]],
    ['Wind Staff — Boreas’ Fury', [
      'Build the staff: collect one yellow part from the head of each giant robot—Freya at the church, Odin in the center, and Thor near spawn. Shoot the glowing foot before it steps on you to enter the robot.',
      'Get the records and crystal: the yellow record is around Generator 5 / the Lightning tunnel entrance. Use the Gramophone at the Wind tunnel near Generator 4 and collect the yellow crystal in the Crazy Place.',
      'Build it at the yellow pedestal on the lowest floor of the Excavation Site.',
      'Crazy Place ring puzzle: stand in the Wind section and shoot the four suspended symbol rings to rotate them. Each row must line up with the matching symbol on the stone pillar. The starting positions change, but the completed pattern is fixed; the rings rise and an audio cue plays when correct.',
      'Smoke ball 1: behind Stamin-Up near Generator 5. Shoot the stone ball with the Wind Staff until its smoke points toward the Excavation Site.',
      'Smoke ball 2: between Generator 4 and the Wind tunnel. Rotate it until the smoke points toward the Excavation Site.',
      'Smoke ball 3: on the outside No Man’s Land / tank-return path. Reach it by backtracking from the church or jumping from the returning tank, then rotate its smoke toward the Excavation Site.',
      'Excavation rings: set all four ring lights to yellow and shoot the yellow orb with the Wind Staff.',
      'Soul charge: place the staff in the yellow Crazy Place pedestal and kill roughly 20 zombies nearby. Pick up Boreas’ Fury after the red outline appears on the HUD icon.',
      'Upgrade result: a charged shot creates a tornado that pulls in and kills nearby zombies; Sekhmet’s Vigor can revive teammates at range.'
    ]],
    ['Lightning Staff — Kimat’s Bite', [
      'Build part 1: ride the tank from the church toward Generator 2 and jump right onto the cut-off wooden staircase before the Generator 2 trench.',
      'Build part 2: on the tank’s return trip toward the church, jump left onto the scaffold connected to the Excavation Site and follow it to the part.',
      'Build part 3: later on the same return trip, jump right onto the dirt path before the church and climb to the upper church area.',
      'Get the records and crystal: the purple record is around Generator 4. Use the Gramophone at the Lightning tunnel near Generator 5, collect the purple crystal, and build the staff at the purple Excavation pedestal.',
      'Crazy Place keyboard: number the seven keys on the bottom row from left to right. Shoot the three chords in this exact order: 1-3-6, then 3-5-7, then 2-4-6. The upper row is not used.',
      'Electrical panel 1 — Generator 5: turn the dial DOWN.',
      'Electrical panel 2 — church basement beside torch 3: turn the dial RIGHT.',
      'Electrical panel 3 — church upstairs beside the repairable window: turn the dial UP.',
      'Electrical panel 4 — immediately right of the Wind tunnel entrance: turn the dial UP.',
      'Electrical panel 5 — spawn room at the bottom of the stairs: turn the dial LEFT.',
      'Electrical panel 6 — Tank Station near Generator 2, left of the rear door: turn the dial DOWN.',
      'Electrical panel 7 — behind the Excavation Site on the path toward the church: turn the dial UP. After the keyboard puzzle, the panels spark in this order until each is correct; they may also be pre-set earlier.',
      'Excavation rings: rotate all four ring lights to purple, then shoot the purple orb with the Lightning Staff.',
      'Soul charge: place the staff in the purple Crazy Place pedestal and kill 25 zombies nearby. Pick up Kimat’s Bite when the HUD icon has a red outline.',
      'Upgrade result: charged shots release a moving electrical orb that chains and stuns zombies; Sekhmet’s Vigor can revive teammates remotely.'
    ]]
  ];
})();
