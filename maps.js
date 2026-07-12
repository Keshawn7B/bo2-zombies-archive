window.MAP_GUIDES = {
  sections: [
    { id: 'weapons', label: 'Best weapons', title: 'Best to worst weapons', description: 'Practical ranking for a normal high-round setup. Wonder weapons are listed separately.' },
    { id: 'wonder', label: 'Wonder weapons', title: 'Wonder weapons and unique equipment', description: 'Map-exclusive weapons, upgrade paths, and the role each item fills.' },
    { id: 'quest', label: 'Easter egg', title: 'Easter egg guide', description: 'A compact checklist. Complex quests may require specific player counts or a chosen story path.' },
    { id: 'highround', label: 'High round', title: 'High-round strategy', description: 'Setup priorities, safe routes, and the usual late-round game plan.' },
    { id: 'buildables', label: 'Buildables', title: 'Buildables and part locations', description: 'Workbench items and the areas where their pieces spawn.' },
    { id: 'enemies', label: 'Enemies', title: 'Enemy types and weaknesses', description: 'Special enemies, dangerous behaviors, and efficient counters.' },
    { id: 'perks', label: 'Perks', title: 'Perks and locations', description: 'Available perk machines, map rules, and useful setup notes.' }
  ],
  maps: [
    {
      id: 'tranzit', name: 'TranZit', dlc: 'Base game', mode: '1–4 players', difficulty: 'Hard', code: 'GRN RUN',
      summary: 'A large connected route through Bus Depot, Diner, Farm, Power Station, Town, and the cornfield. The bus, fog, buildables, and long recovery routes make planning more important than raw firepower.',
      weapons: [
        ['Ray Gun Mark II', 'S', 'High damage, penetration, no splash damage, and excellent Panzer-free crowd control.'],
        ['RPD / HAMR', 'A', 'Large magazines and strong Double Tap performance for training or holding the tunnel.'],
        ['Mustang & Sally', 'A', 'Powerful emergency clear; dangerous without persistent PhD protection.'],
        ['Galil', 'A', 'Reliable damage, clean handling, and good reserve ammunition.'],
        ['Ray Gun', 'B', 'Strong early and mid game, but splash damage and crawlers become risky.'],
        ['AK74u / MP5', 'B', 'Renewable wall ammunition makes them dependable point and recovery weapons.'],
        ['Jet Gun', 'Special', 'Infinite-damage potential, but the meter and break-apart behavior require deliberate use.']
      ],
      wonder: [
        ['Thrustodyne Aeronautics Model 23', 'Build the four parts at the Town bar workbench. Feather the trigger; holding it too long overheats and breaks the weapon into parts.'],
        ['Ray Gun Mark II', 'Mystery Box weapon when the relevant DLC entitlement is present. Its burst penetrates multiple zombies and avoids splash damage.'],
        ['Ray Gun', 'Mystery Box classic. Effective for mobility and revives, but explosive self-damage remains a major risk.']
      ],
      questNote: 'Tower of Babble has separate Richtofen and Maxis routes. Confirm the route before committing resources; later steps differ and public matches often mix objectives.',
      quest: [
        ['Build the Turbine', 'Collect all three Bus Depot parts and assemble the Turbine before leaving the first area.'],
        ['Open the route', 'Restore power at the Power Station and reach the pylon in the cornfield between Farm and Power.'],
        ['Choose a side', 'Follow either Richtofen’s Jet Gun route or Maxis’s power-off and Avogadro route. Do not mix the two paths.'],
        ['Prepare the tower', 'Complete the path-specific action beneath the pylon, then coordinate Turbines or EMP use at the required street lamps.'],
        ['Confirm completion', 'The tower lighting and character dialogue indicate the selected side has been completed for that profile.']
      ],
      highround: [
        ['Choose a controlled area', 'The tunnel and Town routes are more predictable than riding the bus indefinitely. Keep one escape direction open.'],
        ['Use renewable ammo', 'Carry an AK74u or MP5 for points and recovery, then pair it with a high-damage Box weapon.'],
        ['Treat the Jet Gun as a tool', 'Use short bursts on a grouped train and stop before the meter peaks. Do not rely on it during a panic turn.'],
        ['Manage travel before the round', 'Do long trips, Pack-a-Punch access, and buildable replacement with a crawler or at the end of a round.'],
        ['Bank recovery points', 'Town’s bank can speed up future setups, but opening routes safely still matters more than buying everything immediately.']
      ],
      buildables: [
        ['Turbine', ['All three parts spawn inside Bus Depot: mannequin, fan, and tail section.', 'Workbench: Bus Depot.']],
        ['Zombie Shield', ['Parts spawn around the Diner and garage area.', 'Workbench: Diner garage.']],
        ['Automatic Turret', ['Parts spawn around Farm, including the farmhouse and barn area.', 'Workbench: Farm. Requires a nearby Turbine.']],
        ['Electric Trap', ['Parts spawn throughout the Power Station area.', 'Workbench: Power Station. Requires a nearby Turbine.']],
        ['Jet Gun', ['Jet engine: tunnel between Bus Depot and Diner.', 'Wires: Power Station laboratory.', 'Handbrake: Nacht der Untoten in the cornfield.', 'Pressure gauge: Hunter’s Cabin between Power and Town.', 'Workbench: Town bar.']]
      ],
      enemies: [
        ['Denizens', 'Latch onto players in the fog and slow travel.', 'Keep moving and melee repeatedly while attached. Street lamps provide brief safe navigation points.'],
        ['Avogadro', 'Electric boss that appears after the storm conditions are met.', 'EMP grenades are the cleanest counter. Galvaknuckles and other melee attacks also damage it.'],
        ['Lava zombies', 'Explode after death when ignited, causing chip damage and visual obstruction.', 'Kill from a little distance and avoid standing on lava while turning into a horde.']
      ],
      perks: [
        ['Quick Revive', 'Bus Depot', 'Solo version provides self-revives until its normal purchase limit.'],
        ['Speed Cola', 'Diner', 'Useful for LMG and recovery builds.'],
        ['Double Tap II', 'Farm', 'A major damage increase for bullet weapons.'],
        ['Juggernog', 'Town', 'Core survivability purchase.'],
        ['Stamin-Up', 'Town', 'Highly valuable for fog travel and long rotations.'],
        ['Tombstone Soda', 'Town', 'Co-op only; creates a tombstone pickup after bleeding out.']
      ]
    },
    {
      id: 'bus-depot', name: 'Bus Depot', dlc: 'Base game', mode: 'Survival / Grief', difficulty: 'Hard', code: 'DEPOT',
      summary: 'A stripped survival arena with no perks and no Pack-a-Punch in standard Survival. The challenge is almost entirely movement, ammo economy, and keeping the center clear.',
      weapons: [
        ['Ray Gun Mark II', 'S', 'The safest high-damage Box weapon for the small arena.'],
        ['RPD / HAMR', 'A', 'Large magazines help when the center briefly closes.'],
        ['Galil', 'A', 'Reliable handling and good reserve ammunition.'],
        ['Ray Gun', 'B', 'Strong but dangerous at point-blank range without Juggernog.'],
        ['Executioner', 'B', 'Excellent close damage, but five rounds and no perk support make mistakes severe.'],
        ['M14 / Olympia', 'C', 'Useful only in the opening rounds; there is no Pack-a-Punch scaling.']
      ],
      wonder: [
        ['Ray Gun Mark II', 'Mystery Box. Best overall emergency weapon because it does not inflict splash damage.'],
        ['Ray Gun', 'Mystery Box. Effective at creating space, but self-damage can immediately end a run.']
      ],
      questNote: 'Bus Depot Survival has no main quest. Its appeal is the perkless survival challenge.',
      quest: [
        ['No main Easter egg', 'There is no full story quest in standard Bus Depot Survival.'],
        ['Optional challenge', 'Use the map as a pure movement and resource test: no perks, no Pack-a-Punch, and very limited space.']
      ],
      highround: [
        ['Keep the center open', 'Run a broad loop and avoid killing randomly across every doorway.'],
        ['Turn before firing', 'Group the horde, create separation, then shoot through the front rather than backpedaling into new spawns.'],
        ['Respect splash damage', 'The Ray Gun is useful, but a close explosion without Juggernog is often fatal.'],
        ['Cycle the Box early', 'Secure a strong weapon before the map becomes too crowded to safely spend points.']
      ],
      buildables: [['No buildables', ['Standard Survival does not provide usable buildable workbenches.']]],
      enemies: [
        ['Standard zombies', 'Fast spawn pressure from a small number of entrances.', 'Use a complete loop instead of reversing direction repeatedly.'],
        ['Fire zombies', 'Explode when killed after crossing lava.', 'Create distance before shooting and avoid knifing an ignited target.']
      ],
      perks: [['No perk machines', 'Standard Survival', 'Bus Depot’s defining rule is that no perks are available.']]
    },
    {
      id: 'town', name: 'Town', dlc: 'Base game', mode: 'Survival / Grief', difficulty: 'Medium', code: 'TOWN',
      summary: 'A compact survival favorite with immediate Pack-a-Punch access, lava hazards, strong core perks, and two readable training loops. It is one of the best places to practice classic BO2 movement.',
      weapons: [
        ['Ray Gun Mark II', 'S', 'Best overall Town weapon: high damage, penetration, and no splash damage.'],
        ['Mustang & Sally', 'S', 'Clears full groups quickly, but requires careful spacing because standard Town has no PhD Flopper.'],
        ['RPD / HAMR', 'A', 'Excellent sustained damage with Double Tap II.'],
        ['Voice of Justice', 'A', 'Pack-a-Punched Executioner; devastating at close range through the middle rounds.'],
        ['Galil', 'A', 'Balanced handling, damage, and reserve ammunition.'],
        ['DSR 50', 'B', 'Strong penetration and headshot value; repeated re-Packs can produce iron sights.'],
        ['Ray Gun', 'B', 'Useful for revives and clearing space, but splash damage is dangerous.'],
        ['MP115 Kollider', 'B', 'Weaker than Box weapons, but renewable MP5 wall ammunition makes it the best recovery option.'],
        ['Mnesia / Hades', 'C', 'Pack-a-Punched wall weapons remain usable, but fall behind stronger Box choices.']
      ],
      wonder: [
        ['Ray Gun Mark II', 'Mystery Box. Safest high-round damage option on Town.'],
        ['Ray Gun', 'Mystery Box. Strong crowd control with meaningful splash risk.'],
        ['Mustang & Sally', 'Pack-a-Punched M1911. Not technically a wonder weapon, but functions as Town’s strongest explosive panic option.']
      ],
      questNote: 'Town has no main story quest. The optional music Easter egg uses three teddy bears placed around the playable area.',
      quest: [
        ['No main quest', 'Town Survival is designed as a direct round-based map.'],
        ['Activate the music egg', 'Interact with all three hidden teddy bears around Town. An activation sound confirms each bear.'],
        ['Use the map for practice', 'The repeatable goal is efficient setup, clean trains, and progressively higher rounds.']
      ],
      highround: [
        ['Use the central loop', 'Circle the main street and cut through only when the front of the train has fully cleared.'],
        ['Avoid random lava crossings', 'Jump cleanly over the cracks; repeated fire damage can remove your margin for error.'],
        ['Pair power with wall ammo', 'Carry a Mark II, explosive weapon, or LMG alongside the MP5 for renewable recovery ammunition.'],
        ['Keep emergency space', 'Do not kill continuously while turning. Group first, then fire down a lane.'],
        ['Rebuy in a safe order', 'After a down: Juggernog first, then movement or reload support, then Pack-a-Punch recovery.']
      ],
      buildables: [['No buildables', ['Town Survival has no buildable workbench.']]],
      enemies: [
        ['Standard zombies', 'Fast close-range pressure in narrow building exits.', 'Train outdoors and enter buildings only with a clear exit.'],
        ['Fire zombies', 'Ignite after crossing lava and explode on death.', 'Kill from range and avoid shooting an ignited zombie directly beside you.']
      ],
      perks: [
        ['Juggernog', 'Upper Town building', 'Highest-priority purchase.'],
        ['Speed Cola', 'Town building', 'Best with LMGs and slow reloads.'],
        ['Double Tap II', 'Town building', 'Essential for conventional bullet weapons.'],
        ['Stamin-Up', 'Town building', 'Improves training and recovery routes.'],
        ['Quick Revive', 'Available in solo', 'Solo self-revive behavior follows the normal purchase limit.']
      ]
    },
    {
      id: 'farm', name: 'Farm', dlc: 'Base game', mode: 'Survival / Grief', difficulty: 'Medium', code: 'FARM',
      summary: 'A small rural survival map centered on the farmhouse and barn. It has useful perks but no Pack-a-Punch, so late-round damage and ammo become the main limits.',
      weapons: [
        ['Ray Gun Mark II', 'S', 'Best late-round damage and safety in the tight barn routes.'],
        ['RPD / HAMR', 'A', 'Strong with Double Tap II, but reload only after creating distance.'],
        ['Galil', 'A', 'Balanced Box rifle with good ammunition.'],
        ['Ray Gun', 'B', 'Strong clearing power with splash risk.'],
        ['Executioner', 'B', 'Very strong at close range before health scaling overtakes it.'],
        ['MP5 / Olympia', 'C', 'Wall availability helps early, but no Pack-a-Punch means poor long-term scaling.']
      ],
      wonder: [
        ['Ray Gun Mark II', 'Mystery Box. The strongest conventional high-round choice.'],
        ['Ray Gun', 'Mystery Box. Effective but risky around the barn and farmhouse doors.']
      ],
      questNote: 'Farm has no main story Easter egg in standard Survival.',
      quest: [
        ['No main quest', 'Farm is a focused survival and Grief arena.'],
        ['Optional objective', 'Treat perk order, Box timing, and a clean barn loop as the map’s practical progression.']
      ],
      highround: [
        ['Run the barn loop', 'Use the outer barn route and avoid stopping inside narrow doorways.'],
        ['Group before firing', 'Without Pack-a-Punch, ammunition efficiency matters more than constant kills.'],
        ['Keep a panic weapon', 'A Ray Gun or Mark II is useful when the loop collapses.'],
        ['Plan for damage falloff', 'Late rounds become slower because every weapon remains unupgraded.']
      ],
      buildables: [['No buildables', ['Farm Survival has no buildable workbench.']]],
      enemies: [
        ['Standard zombies', 'Doorway pressure around the barn and farmhouse.', 'Use the outside loop and avoid reversing inside.'],
        ['Fire zombies', 'Explode after crossing lava.', 'Create space before finishing them.']
      ],
      perks: [
        ['Juggernog', 'Farmhouse area', 'Core survivability.'],
        ['Double Tap II', 'Barn area', 'The most important damage upgrade because Pack-a-Punch is absent.'],
        ['Speed Cola', 'Farm area', 'Supports LMG reloads and recovery.'],
        ['Quick Revive', 'Solo availability', 'Provides the standard solo self-revive function.']
      ]
    },
    {
      id: 'nuketown', name: 'Nuketown Zombies', dlc: 'Bonus map', mode: 'Survival', difficulty: 'Hard', code: 'NTZ',
      summary: 'A small, fast map where perk machines and Pack-a-Punch fall from the sky in a randomized order. A run can be comfortable or extremely dangerous depending on when Juggernog arrives.',
      weapons: [
        ['Ray Gun Mark II', 'S', 'Strongest safe damage option in the cramped yards.'],
        ['Mustang & Sally', 'A', 'Excellent emergency weapon once Pack-a-Punch lands; splash damage remains dangerous.'],
        ['RPD / HAMR', 'A', 'Large magazines are valuable when both houses are blocked.'],
        ['Galil', 'A', 'Reliable general-purpose Box rifle.'],
        ['Ray Gun', 'B', 'Strong but risky in the narrow house exits.'],
        ['Executioner', 'B', 'High close damage, limited magazine.'],
        ['M14 / Olympia', 'C', 'Early survival only unless Pack-a-Punch arrives and you deliberately keep the wall weapon.']
      ],
      wonder: [
        ['Ray Gun Mark II', 'Mystery Box. Best all-around late-round weapon.'],
        ['Ray Gun', 'Mystery Box. Useful for space, revives, and grouped zombies.']
      ],
      questNote: 'Nuketown Zombies has no full main quest. Its notable secrets are the randomized drop system, Moon-era story timing, and music interactions.',
      quest: [
        ['Track falling machines', 'A siren and impact announce a new perk machine or Pack-a-Punch landing in one of the backyards.'],
        ['Adapt to the order', 'Do not assume Juggernog will arrive early. Buy weapons and open both yards to preserve movement.'],
        ['Optional music egg', 'Interact with the hidden teddy bears to activate the map’s song.']
      ],
      highround: [
        ['Open both houses', 'A complete loop is more important than saving one door on this small map.'],
        ['Use the backyards', 'Train in the more comfortable yard and use the house only as a transition route.'],
        ['Prepare for late Juggernog', 'Until it lands, avoid close Box spins and unnecessary indoor fights.'],
        ['Watch the population counter', 'The Nuketown sign tracks remaining population and helps pace the end of a round.']
      ],
      buildables: [['No buildables', ['Nuketown Zombies has no buildable workbench.']]],
      enemies: [
        ['Standard zombies', 'High spawn density in a compact area.', 'Use a full yard loop and avoid standing in the houses.'],
        ['Fire zombies', 'Can ignite around environmental fire and explode on death.', 'Finish them at range.']
      ],
      perks: [
        ['Randomized perk drops', 'Both backyards', 'Perks land in a random order as the match advances.'],
        ['Pack-a-Punch', 'Random drop', 'It also falls from the sky and may arrive before or after critical perks.'],
        ['Juggernog', 'Random drop', 'The timing of this machine heavily determines early difficulty.']
      ]
    },
    {
      id: 'die-rise', name: 'Die Rise', dlc: 'Revolution', mode: '1–4 players', difficulty: 'Hard', code: 'DIE RISE',
      summary: 'A vertical skyscraper complex built around elevators, one-way drops, dangerous jumps, and the Sliquifier. Route knowledge is more important here than on almost any other BO2 map.',
      weapons: [
        ['Sliquifier', 'S', 'Infinite-damage chain reactions and the center of nearly every serious high-round strategy.'],
        ['AN-94', 'S', 'Elite wall weapon with excellent damage and renewable ammunition.'],
        ['SVU-AS', 'A', 'Strong wall sniper for headshots, points, and precision.'],
        ['Ray Gun Mark II', 'A', 'Excellent safety weapon for tight elevators and corridors.'],
        ['RPD / HAMR', 'A', 'High sustained damage, though reload timing is dangerous on narrow floors.'],
        ['Galil', 'B', 'Reliable Box rifle without renewable ammunition.'],
        ['Ray Gun', 'B', 'Useful but can create slippery Sliquifier interactions and close-range splash risk.']
      ],
      wonder: [
        ['Sliquifier', 'Build it in the lower skyscraper. Its purple slick causes zombies to slide and can chain kills through a grouped horde.'],
        ['Ray Gun Mark II', 'Mystery Box. Reliable backup when the route becomes too tight for a Sliquifier setup.'],
        ['Ray Gun', 'Mystery Box. Useful for clearing elevators, but not the primary high-round solution.']
      ],
      questNote: 'High Maintenance requires four coordinated players and has separate Richtofen and Maxis endings. This checklist is an overview rather than a speedrun route.',
      quest: [
        ['Activate power', 'Reach the lower power room and turn on the building systems.'],
        ['Build the Sliquifier', 'Collect its four parts around the lower skyscraper and assemble it at the workbench.'],
        ['Set the elevators', 'Coordinate players, elevator symbols, and the golden floor symbols used by the selected quest path.'],
        ['Complete path-specific steps', 'Richtofen and Maxis use different combinations of Sliquifier shots, Galvaknuckles, balls, and tower interactions.'],
        ['Finish at the tower', 'Coordinate all four players for the final pylon sequence and confirm the chosen character’s dialogue.']
      ],
      highround: [
        ['Use a Sliquifier lane', 'The Buddha room and selected rooftop routes let chain reactions spread through a full train.'],
        ['Avoid unnecessary jumps', 'Most failed runs come from movement errors, not weapon damage. Use known routes only.'],
        ['Keep the AN-94 available', 'Wall ammunition provides a consistent recovery weapon and points between Sliquifier shots.'],
        ['Track elevator timing', 'Do not enter a shaft without checking the car position and escape route.'],
        ['Control the slick', 'Purple residue can slide the player as well as zombies. Fire from a stable position.']
      ],
      buildables: [
        ['Sliquifier', ['All four parts spawn around the lower skyscraper near the power room, sewing room, and adjacent corridors.', 'Workbench: lower skyscraper.']],
        ['Trample Steam', ['Four parts spawn around the starting skyscraper and nearby upper floors.', 'Workbench: starting building. Used for launches, route access, and defense.']],
        ['Nav Table', ['Parts are distributed across the map and connect to the Victis super-quest progression.', 'Not required for normal survival.']]
      ],
      enemies: [
        ['Jumping Jacks', 'Special-round enemies that leap rapidly and can overwhelm a narrow room.', 'Coordinate accurate kills and avoid missed attacks if attempting the free-perk reward. Galvaknuckles are a strong counter.'],
        ['Standard zombies', 'Approach from vertical drops, windows, and elevator routes.', 'Control one lane and avoid fighting with an unchecked drop behind you.'],
        ['Fall damage', 'The map’s most dangerous “enemy.”', 'Know every one-way drop and never improvise a jump during a full round.']
      ],
      perks: [
        ['Perk elevators', 'Multiple elevator shafts', 'Machines move vertically and may be unavailable on the current floor.'],
        ['Who’s Who', 'Elevator machine', 'After going down, control a weak duplicate and attempt to revive your original body.'],
        ['Jumping Jack reward', 'Special round', 'A correctly completed round can award a random perk beyond the normal purchase limit.'],
        ['Pack-a-Punch', 'Elevator machine', 'Check the roof indicator and elevator position before committing a weapon.']
      ]
    },
    {
      id: 'mob', name: 'Mob of the Dead', dlc: 'Uprising', mode: '1–4 players', difficulty: 'Medium', code: 'ALCATRAZ',
      summary: 'A dense Alcatraz map with Afterlife, a buildable plane, Brutus, the Blundergat family, and strong wall weapons. It rewards deliberate setup and offers several excellent high-round routes.',
      weapons: [
        ['Vitriolic Withering', 'S', 'Upgraded Acid Gat; distracts and destroys groups while creating emergency space.'],
        ['The Sweeper', 'S', 'Pack-a-Punched Blundergat with massive close-range damage and strong reserve ammo.'],
        ['Hell’s Redeemer', 'S', 'Infinite-ammo charged throw capable of killing full groups when used correctly.'],
        ['Ray Gun Mark II', 'A', 'Powerful backup for Brutus and close corridors.'],
        ['M1927 / AK-47', 'A', 'Strong renewable wall weapons for points and recovery.'],
        ['Death Machine', 'A', 'High sustained damage after Pack-a-Punch, balanced by slower movement.'],
        ['Ray Gun', 'B', 'Useful for revives and Brutus, but splash damage remains risky.'],
        ['Uzi', 'B', 'Excellent wall-ammo recovery weapon near common routes.']
      ],
      wonder: [
        ['Blundergat', 'Mystery Box or free skull reward. Pack-a-Punch becomes The Sweeper.'],
        ['Acid Gat / Vitriolic Withering', 'Convert the Blundergat using the Acid Gat Kit, then Pack-a-Punch for the strongest distraction weapon.'],
        ['Hell’s Retriever / Hell’s Redeemer', 'Feed the three Cerberus heads, collect the Retriever, then complete the bridge and prison upgrade conditions for the Redeemer.'],
        ['Golden Spork', 'Powerful melee reward from a multi-step prison side quest.']
      ],
      questNote: 'Pop Goes the Weasel requires a full four-player match for the final confrontation. The prison cycle must be repeated before the group returns to the bridge in Afterlife.',
      quest: [
        ['Build the plane', 'Collect the five plane parts from the prison’s major areas and assemble them on the roof.'],
        ['Fly to the bridge', 'Use the plane to reach Pack-a-Punch. Refuel and repeat the trip until the cycle requirement is complete.'],
        ['Follow the audio trail', 'Use the Citadel number panel and prison audio logs to reveal the crew’s history.'],
        ['Enter Afterlife together', 'Use the electric chairs and board the spectral plane for the final bridge trip.'],
        ['Resolve the cycle', 'On the bridge, Weasel fights the other three prisoners. The winning side determines the ending.']
      ],
      highround: [
        ['Choose Cafeteria or Bridge', 'The Cafeteria trap route is consistent; the Golden Gate Bridge is open and readable once reached.'],
        ['Use the Acid Gat for space', 'Fire into the ground or front of the train to pull zombies away from the player.'],
        ['Carry a wall weapon', 'M1927, AK-47, or Uzi ammunition makes long games sustainable.'],
        ['Use traps after damage falls off', 'The Cafeteria acid trap and other map systems remain effective regardless of round health.'],
        ['Keep Afterlife utility available', 'Do not waste every Afterlife charge early if you still need power switches or emergency access.']
      ],
      buildables: [
        ['Plane', ['Five parts are obtained from the Laundry, Docks, Warden’s Office, Infirmary, and Citadel Tunnels routes.', 'Workbench: prison roof. Fuel cans are recollected for repeat trips.']],
        ['Zombie Shield', ['Parts spawn around the Docks, Citadel Tunnels, and prison interior routes.', 'Workbench options allow placement near the preferred strategy.']],
        ['Acid Gat Kit', ['Three kit parts spawn across the Cell Blocks, Warden’s Office, and Infirmary-side areas.', 'Workbench converts a Blundergat into the Acid Gat.']]
      ],
      enemies: [
        ['Brutus', 'Heavy warden who can lock perk machines, the Box, and workbenches.', 'Shoot the helmet, use high burst damage, and kill him before he locks multiple utilities.'],
        ['Standard zombies', 'Dense spawns from cells and narrow corridors.', 'Use Afterlife routes and traps to avoid fighting in a dead-end hallway.'],
        ['Afterlife limit', 'Not an enemy, but a critical resource.', 'Track remaining charges before intentionally downing to power equipment.']
      ],
      perks: [
        ['Juggernog', 'Docks route', 'Core survivability purchase.'],
        ['Speed Cola', 'Warden’s Office area', 'Useful for Death Machine, LMGs, and recovery.'],
        ['Double Tap II', 'Citadel Tunnels route', 'Major bullet-weapon damage increase.'],
        ['Electric Cherry', 'Prison route', 'Reload shock is especially useful in narrow corridors.'],
        ['Deadshot Daiquiri', 'Prison route', 'Supports headshot builds.'],
        ['Pack-a-Punch', 'Golden Gate Bridge', 'Reach it by building and flying the plane.']
      ]
    },
    {
      id: 'buried', name: 'Buried', dlc: 'Vengeance', mode: '1–4 players', difficulty: 'Easy', code: 'RESOLUTION 1295',
      summary: 'An underground western town with Arthur, chalk wall weapons, the Paralyzer, Vulture Aid, multiple traps, a haunted mansion, and unusually strong camping strategies.',
      weapons: [
        ['Paralyzer', 'S', 'Infinite ammunition, movement utility, and strong low-to-mid-round control. Damage eventually slows, but mobility remains valuable.'],
        ['Ray Gun Mark II', 'S', 'Excellent high-round damage and safe penetration.'],
        ['AN-94', 'S', 'Top-tier wall weapon with renewable ammunition.'],
        ['PDW-57', 'A', 'Large reserve ammo and convenient wall access.'],
        ['SVU-AS', 'A', 'Strong headshot wall weapon with excellent point efficiency.'],
        ['LSAT', 'A', 'Large magazine and strong sustained damage; easy early access from the starting area.'],
        ['Voice of Justice', 'A', 'Executioner upgrade with extreme close-range damage.'],
        ['RPD / HAMR', 'B', 'Powerful but less sustainable than the map’s best wall weapons.'],
        ['Ray Gun', 'B', 'Strong clearing power with familiar splash risk.']
      ],
      wonder: [
        ['Paralyzer', 'Mystery Box. Slows, lifts, and kills zombies while also allowing the player to hover and reach shortcuts.'],
        ['Ray Gun Mark II', 'Introduced with Vengeance and available from the Mystery Box.'],
        ['Time Bomb', 'Mystery Box tactical equipment that records a game state and rewinds the match when activated.'],
        ['Remington New Model Army', 'Unique revolver found only on Buried; not a wonder weapon, but a notable map-exclusive firearm.']
      ],
      questNote: 'Mined Games has Richtofen and Maxis paths and normally requires four players. The final sharpshooter step demands clear communication and assigned targets.',
      quest: [
        ['Build the path device', 'Construct the Gallows for Maxis or the Guillotine for Richtofen using the required parts.'],
        ['Power the orbs', 'Use the Paralyzer and other path-specific actions on the four energy orbs around the map.'],
        ['Follow the wisp', 'Trigger and escort the wisp through the town without losing it.'],
        ['Complete the maze and switches', 'Coordinate mansion, maze, lever, and symbol steps required by the selected side.'],
        ['Finish sharpshooter', 'Assign each player a shooting lane and hit every target in the final timed sequence.']
      ],
      highround: [
        ['Use the Juggernog alley camp', 'Turbine plus Subsurface Resonator can control a narrow lane while the team manages replacements.'],
        ['Use the Saloon or courthouse routes', 'Traditional training remains viable when a camp breaks or the Paralyzer loses killing speed.'],
        ['Keep an AN-94 or PDW', 'Buried’s wall weapons make ammunition recovery unusually easy.'],
        ['Use Arthur before rounds become hectic', 'Break barriers, move the Box, and lock useful locations during setup.'],
        ['Preserve mansion points', 'Witches steal points on contact. Enter with a clear path and a weapon that kills them quickly.']
      ],
      buildables: [
        ['Turbine', ['Parts are inside the General Store on both floors.', 'Used to power several other buildables.']],
        ['Subsurface Resonator', ['All components spawn inside the General Store.', 'Place a Turbine nearby to power the sonic blast.']],
        ['Head Chopper', ['All components spawn inside the General Store.', 'Ceiling-height blade trap suited to narrow lanes.']],
        ['Trample Steam', ['All components spawn inside the General Store.', 'Launches players or zombies and can open movement options.']],
        ['Nav Table', ['Parts are spread through the map, including the tunnels and starting route.', 'Used for Victis super-quest progress, not normal survival.']]
      ],
      enemies: [
        ['Ghosts / witches', 'Steal 2,000 points per touch while points remain and can down a player after points are depleted.', 'Use a high-damage weapon, keep moving, and avoid entering the mansion with barely enough points for Pack-a-Punch.'],
        ['Arthur', 'Friendly utility character, not an enemy.', 'Use candy for helpful behavior and booze to make him charge barriers. Do not repeatedly damage him.'],
        ['Standard zombies', 'Can be funneled into extremely strong trap lanes.', 'Traps, wall weapons, and the Paralyzer provide several independent control methods.']
      ],
      perks: [
        ['Juggernog', 'Blocked alley near the jail side', 'Have Arthur break the barrier to reach it.'],
        ['Vulture Aid', 'Church', 'Reveals useful objects, drops ammo and points, and creates masking gas.'],
        ['Quick Revive', 'Starting area', 'Return through the broken-fountain portal when needed.'],
        ['Double Tap II', 'Town building', 'Strongly improves conventional weapons such as the AN-94.'],
        ['Speed Cola', 'Town building', 'Useful with LMG and shotgun setups.'],
        ['Stamin-Up', 'Town building', 'Supports mansion and maze movement.'],
        ['Mule Kick', 'Town building', 'Allows a third weapon; protect the third slot after a down.'],
        ['Free perk reward', 'Haunted mansion', 'Eliminating the mansion ghosts under the map’s reward conditions can produce a perk bottle.']
      ]
    },
    {
      id: 'origins', name: 'Origins', dlc: 'Apocalypse', mode: '1–4 players', difficulty: 'Very hard', code: 'SITE 64',
      summary: 'A large World War I battlefield with mud, six generators, giant robots, four elemental staffs, Panzer Soldats, and one of the most involved main quests in classic Zombies.',
      weapons: [
        ['Upgraded Ice Staff', 'S', 'Charged storms control large groups and anchor many high-round strategies.'],
        ['Upgraded Wind Staff', 'S', 'Extremely strong close defense with limited reserve shots.'],
        ['Upgraded Fire Staff', 'S', 'High damage and strong area control, especially before extreme rounds.'],
        ['Upgraded Lightning Staff', 'A', 'Excellent control and charged damage, though usually ranked below Ice for long games.'],
        ['Ray Gun Mark II', 'A', 'Strong Panzer and corridor weapon without splash damage.'],
        ['Boomhilda', 'A', 'Pack-a-Punched Mauser; powerful mobility and Panzer damage with splash risk.'],
        ['MG08/15', 'A', 'Large magazine and excellent sustained damage.'],
        ['Scar-H / STG-44', 'B', 'Reliable conventional rifles; wall availability makes the STG useful for recovery.'],
        ['One Inch Punch upgrade', 'Special', 'Quest melee upgrade capable of powerful emergency kills and required for the main quest.']
      ],
      wonder: [
        ['Staff of Ice → Ull’s Arrow', 'Build from snow dig parts, solve the Crazy Place puzzle, cleanse the tombstones, align the blue rings, and charge the pedestal.'],
        ['Staff of Fire → Kagutsuchi’s Blood', 'Build from Panzer, glowing plane, and Generator 6 rewards; complete the grates, church torches, red rings, and soul charge.'],
        ['Staff of Wind → Boreas’ Fury', 'Collect one part from each giant robot; complete the ring puzzle, smoke-ball route, yellow rings, and soul charge.'],
        ['Staff of Lightning → Kimat’s Bite', 'Collect three tank-jump parts; complete the note puzzle, electrical panels, purple rings, and soul charge.'],
        ['G-Strike Beacon', 'Upgrade the stone tablets through the Tank Station and church process, then charge them with melee kills.']
      ],
      questNote: 'Little Lost Girl can be completed solo or cooperatively. The checklist uses the community step names and assumes all four staffs are built and upgraded.',
      quest: [
        ['Secure the Keys', 'Build and upgrade all four elemental staffs.'],
        ['Ascend from Darkness', 'Place the staffs in their required robot and Excavation Site pedestals, then complete the staff placement sequence.'],
        ['Rain Fire', 'Enter the correct robot, press the internal button, and throw a G-Strike onto the seal near Generator 5.'],
        ['Unleash the Horde', 'Release and defeat the Panzer Soldats that emerge from the opened chamber.'],
        ['Skewer the Winged Beast', 'Use Zombie Blood to reveal and eliminate the invisible pilot after shooting down the glowing plane.'],
        ['Wield a Fist of Iron', 'Use the upgraded melee attack to defeat the glowing Templar zombies in the Excavation Site.'],
        ['Raise Hell', 'Return all staffs to the Crazy Place and fill them with zombie souls.'],
        ['Freedom', 'Release the Maxis Drone in the Crazy Place and interact with the portal to finish the quest.']
      ],
      staffGuides: [
        ['Ice Staff — Ull’s Arrow', [
          'Build: dig up the three blue staff parts while it is snowing. Use the blue record and Gramophone to open the Ice tunnel and collect the crystal.',
          'Crazy Place: decode the ice pillar symbol and shoot the matching ceiling tile until the puzzle completes.',
          'Tombstones: freeze each of the three marked tombstones with the Ice Staff, then shoot the frozen stone with a normal bullet weapon.',
          'Excavation: rotate the blue rings until every blue gem lines up, then shoot the blue orb below them.',
          'Charge: place the staff in its blue Crazy Place pedestal and kill zombies nearby until it is upgraded.'
        ]],
        ['Fire Staff — Kagutsuchi’s Blood', [
          'Build: obtain one part from the first Panzer, one from the glowing plane, and one from the Generator 6 reward box. Open the Fire tunnel with the red record.',
          'Crazy Place: kill zombies on the metal grates until all cauldrons are lit.',
          'Church: read the lit symbols and shoot the corresponding numbered torches with the Fire Staff.',
          'Excavation: align the red rings and shoot the red orb.',
          'Charge: place the staff in the red Crazy Place pedestal and collect souls.'
        ]],
        ['Wind Staff — Boreas’ Fury', [
          'Build: enter each of the three giant robots and collect one yellow part from each head. Open the Wind tunnel with the yellow record.',
          'Crazy Place: rotate the suspended rings so the correct wind-symbol pattern faces the portal.',
          'Battlefield: shoot the three smoking stone balls so every plume points toward the Excavation Site.',
          'Excavation: align the yellow rings and shoot the yellow orb.',
          'Charge: place the staff in the yellow Crazy Place pedestal and collect souls.'
        ]],
        ['Lightning Staff — Kimat’s Bite', [
          'Build: ride the tank and jump to the three purple part platforms along its route. Open the Lightning tunnel with the purple record.',
          'Crazy Place: play the correct note sequence on the triangular lightning keys.',
          'Electrical panels: rotate the seven sparking dials around the map until each panel stops arcing.',
          'Excavation: align the purple rings and shoot the purple orb.',
          'Charge: place the staff in the purple Crazy Place pedestal and collect souls.'
        ]]
      ],
      highround: [
        ['Complete the full staff setup', 'The upgraded Ice Staff is the usual primary high-round weapon; keep another staff or Mark II for emergencies.'],
        ['Use the Fire Tunnel or Crazy Place', 'Both offer controlled spawns when the required doors and portals are managed correctly.'],
        ['Preserve staff ammunition', 'Use charged shots on full groups rather than single zombies. Max Ammo timing determines pace.'],
        ['Control the generators', 'Templar zombies can disable them. Protect only the generators needed for the active strategy when rounds become long.'],
        ['Prepare for Panzers', 'Keep a burst-damage weapon ready and fight them away from deep mud whenever possible.']
      ],
      buildables: [
        ['Zombie Shield', ['Parts spawn across the trench network, generally around the Generator 2/3 routes, No Man’s Land, and church-side paths.', 'Use a workbench near a strategy route for easy replacement.']],
        ['Maxis Drone', ['Brain: starting room table.', 'Frame and rotor parts spawn along the Excavation, church, and tank routes.', 'Workbench: lower Excavation Site.']],
        ['Elemental Staffs', ['Each staff requires three colored parts, its matching record, the black record, Gramophone access, and the elemental crystal from the Crazy Place.', 'Build all staffs at the lower Excavation Site pedestals.']],
        ['G-Strike Beacon', ['Collect and cleanse the stone tablets, then charge them with melee kills.', 'Used as powerful tactical equipment and required for the main quest.']]
      ],
      enemies: [
        ['Panzer Soldat', 'Armored boss with a grappling claw and flamethrower.', 'Break the faceplate, shoot the exposed head, and use Mark II, Boomhilda, staffs, or sustained head damage.'],
        ['Templar zombies', 'Attack active generators and can shut them down.', 'Respond only when the generator matters to the current route; staffs clear groups efficiently.'],
        ['Mud', 'Severely slows movement across open areas.', 'Use raised boards, Stamin-Up, tank routes, and staff tunnels to reduce exposure.'],
        ['Giant robots', 'Their feet can instantly down players outside the lit entry foot.', 'Only stand beneath the glowing foot when entering; otherwise clear the footprint path.']
      ],
      perks: [
        ['Quick Revive', 'Generator 1', 'Early solo safety.'],
        ['Speed Cola', 'Generator 3', 'Useful for MG08/15 and other slow reloads.'],
        ['Stamin-Up', 'Generator 5', 'One of the map’s best perks because of mud and long travel.'],
        ['Juggernog', 'Generator 4 area', 'Core survivability; prioritize after enough generators are active.'],
        ['Double Tap II', 'Challenge reward / Wunderfizz', 'Complete the map challenge reward or obtain it from Wunderfizz; strong for conventional weapons and Panzer damage.'],
        ['Mule Kick', 'Generator 6 area', 'Useful for carrying a staff, conventional weapon, and Panzer counter.'],
        ['Der Wunderfizz', 'Randomized machine locations', 'Provides additional perks and can exceed the normal four-perk setup through map rewards.'],
        ['Pack-a-Punch', 'Excavation Site', 'Activate all six generators to enable it.']
      ]
    }
  ]
};
