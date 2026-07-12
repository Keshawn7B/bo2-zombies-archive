(() => {
  const origins = window.MAP_GUIDES?.maps?.find(map => map.id === 'origins');
  if (!origins) return;

  origins.staffGuides = [
    {
      id: 'ice',
      element: 'Ice',
      name: 'Ice Staff',
      upgraded: 'Ull’s Arrow',
      role: 'Best high-round staff · charged blizzard control',
      build: [
        ['Collect the three blue parts', 'Dig glowing dig sites only while it is snowing. One part comes from the spawn zone, one from the middle battlefield, and one from the church zone.'],
        ['Find the blue record', 'Check the Generator 2 / Tank Station area.'],
        ['Get the blue crystal', 'Place the Gramophone at the Ice tunnel beside the church, enter the Crazy Place, and take the crystal from the blue pedestal.'],
        ['Assemble the staff', 'Build it at the blue pedestal on the lowest floor of the Excavation Site.']
      ],
      phases: [
        {
          label: 'PUZZLE 01',
          title: 'Match the Crazy Place symbols',
          steps: [
            ['Read the ice-wall pattern', 'Look at the dot pattern displayed on the blue ice wall.'],
            ['Shoot the matching ceiling stone', 'Use the Ice Staff on the floating ceiling stone whose symbol matches the wall.'],
            ['Repeat six times', 'The wall changes after every correct shot. A wrong shot resets the stones already completed.']
          ]
        },
        {
          label: 'WORLD STEP',
          title: 'Freeze and break the three tombstones',
          note: 'Freeze each tombstone with the Ice Staff, then immediately shoot it with a normal bullet weapon.',
          steps: [
            ['Tombstone 1', 'Right of the MP40 wall-buy near Generator 4.'],
            ['Tombstone 2', 'Between the Excavation Site and the nearby giant-robot footprint close to Generator 4.'],
            ['Tombstone 3', 'On the hill reached by turning right from the rear exit of the Generator 2 bunker, beside the fallen robot hand.']
          ]
        },
        {
          label: 'EXCAVATION',
          title: 'Align the blue rings',
          steps: [
            ['Set the ring color', 'Use the four levers on the lower Excavation levels until every ring light is blue.'],
            ['Release the orb', 'Shoot the blue orb beneath the rings with the Ice Staff. It should rise into the ceiling.']
          ]
        },
        {
          label: 'FINAL CHARGE',
          title: 'Charge the staff in the Crazy Place',
          steps: [
            ['Place the staff', 'Return it to the blue pedestal in the Crazy Place.'],
            ['Collect souls', 'Kill roughly 20 zombies close to the pedestal.'],
            ['Take Ull’s Arrow', 'The HUD staff icon gains a red outline when the charge is complete.']
          ]
        }
      ],
      result: 'Charged shots create a long-lasting blizzard. Sekhmet’s Vigor can remotely revive teammates.'
    },
    {
      id: 'fire',
      element: 'Fire',
      name: 'Fire Staff',
      upgraded: 'Kagutsuchi’s Blood',
      role: 'Large burning blast · strong close-area control',
      build: [
        ['Generator 6 part', 'Power Generator 6 and collect the red part from its reward chest.'],
        ['Plane part', 'Shoot down the glowing orange plane and collect the dropped part.'],
        ['Panzer part', 'Defeat the first Panzer Soldat and pick up the part it drops.'],
        ['Record, crystal, and assembly', 'Find the red record around the church / Generator 6 area. Open the Fire tunnel near Generator 1, collect the red crystal, and build the staff at the red Excavation pedestal.']
      ],
      phases: [
        {
          label: 'PUZZLE 01',
          title: 'Ignite the Crazy Place cauldrons',
          steps: [
            ['Stand on the Fire grates', 'Fight in the Fire section of the Crazy Place while standing on the metal grates.'],
            ['Fill all four cauldrons', 'Kill about 30 zombies with the Fire Staff until all four cauldrons burn and the completion sound plays.']
          ]
        },
        {
          label: 'PUZZLE 02',
          title: 'Solve the church torch code',
          note: 'The bloodstain represents torch 4, and torch 4 is always included. The other three numbers change each match.',
          steps: [
            ['Read the symbols upstairs', 'Identify the four glowing wall symbols on the upper church floor.'],
            ['Convert symbols to torch numbers', 'Use the symbol-to-number pattern and note the four corresponding numbers.'],
            ['Shoot the basement torches', 'Go to the church basement and shoot only those four numbered torches with the Fire Staff.'],
            ['Confirm completion', 'The correct torches remain lit and a beam rises from the Excavation Site.']
          ]
        },
        {
          label: 'EXCAVATION',
          title: 'Align the red rings',
          steps: [
            ['Set all rings red', 'Rotate the four Excavation rings until every ring light is red.'],
            ['Release the orb', 'Shoot the red orb beneath the rings with the Fire Staff.']
          ]
        },
        {
          label: 'FINAL CHARGE',
          title: 'Charge the staff in the Crazy Place',
          steps: [
            ['Place the staff', 'Return it to the red pedestal.'],
            ['Collect souls', 'Kill roughly 20 zombies close to the pedestal.'],
            ['Take Kagutsuchi’s Blood', 'Pick it up after the HUD staff icon gains a red outline.']
          ]
        }
      ],
      result: 'The charged attack creates a much larger burning blast. Sekhmet’s Vigor can remotely revive teammates.'
    },
    {
      id: 'wind',
      element: 'Wind',
      name: 'Wind Staff',
      upgraded: 'Boreas’ Fury',
      role: 'Emergency knockback · charged tornado',
      build: [
        ['Enter all three giant robots', 'Shoot a glowing robot foot before it steps down, then enter through the opened foot.'],
        ['Collect the yellow parts', 'One part is inside Freya at the church, one inside Odin in the center, and one inside Thor near spawn.'],
        ['Get the yellow record and crystal', 'Find the record around Generator 5 / the Lightning tunnel entrance. Open the Wind tunnel near Generator 4 and collect the yellow crystal.'],
        ['Assemble the staff', 'Build it at the yellow pedestal on the lowest floor of the Excavation Site.']
      ],
      phases: [
        {
          label: 'PUZZLE 01',
          title: 'Align the Crazy Place symbol rings',
          steps: [
            ['Rotate the four rings', 'Shoot the suspended rings in the Wind section to rotate them.'],
            ['Match every row', 'Line each row up with the corresponding symbol on the nearby stone pillar.'],
            ['Listen for confirmation', 'The rings rise and an audio cue plays when the fixed completed pattern is correct.']
          ]
        },
        {
          label: 'WORLD STEP',
          title: 'Aim the three smoke balls at Excavation',
          note: 'Shoot each stone ball with the Wind Staff until its smoke stream points toward the Excavation Site.',
          steps: [
            ['Smoke ball 1', 'Behind Stamin-Up near Generator 5.'],
            ['Smoke ball 2', 'Between Generator 4 and the Wind tunnel.'],
            ['Smoke ball 3', 'On the outside No Man’s Land / tank-return path; reach it by backtracking from church or jumping from the returning tank.']
          ]
        },
        {
          label: 'EXCAVATION',
          title: 'Align the yellow rings',
          steps: [
            ['Set all rings yellow', 'Rotate the four rings until every light is yellow.'],
            ['Release the orb', 'Shoot the yellow orb beneath the rings with the Wind Staff.']
          ]
        },
        {
          label: 'FINAL CHARGE',
          title: 'Charge the staff in the Crazy Place',
          steps: [
            ['Place the staff', 'Return it to the yellow pedestal.'],
            ['Collect souls', 'Kill roughly 20 zombies close to the pedestal.'],
            ['Take Boreas’ Fury', 'Pick it up after the HUD staff icon gains a red outline.']
          ]
        }
      ],
      result: 'A charged shot creates a tornado that pulls in and kills nearby zombies. Sekhmet’s Vigor can remotely revive teammates.'
    },
    {
      id: 'lightning',
      element: 'Lightning',
      name: 'Lightning Staff',
      upgraded: 'Kimat’s Bite',
      role: 'Fast projectiles · chain stun utility',
      build: [
        ['Tank jump 1', 'Ride from church toward Generator 2 and jump right onto the cut-off wooden staircase before the Generator 2 trench.'],
        ['Tank jump 2', 'On the return trip toward church, jump left onto the scaffold connected to the Excavation Site.'],
        ['Tank jump 3', 'Later on the same return trip, jump right onto the dirt path before church and climb to the upper church area.'],
        ['Record, crystal, and assembly', 'Find the purple record around Generator 4. Open the Lightning tunnel near Generator 5, collect the purple crystal, and build the staff at the purple Excavation pedestal.']
      ],
      phases: [
        {
          label: 'PUZZLE 01',
          title: 'Play the Crazy Place keyboard code',
          note: 'Number the seven keys on the bottom row from left to right. Do not use the upper row.',
          code: ['1–3–6', '3–5–7', '2–4–6'],
          steps: [
            ['Shoot each chord in order', 'Complete the first chord, then the second, then the third. The sequence is the same every match.']
          ]
        },
        {
          label: 'PUZZLE 02',
          title: 'Set the seven electrical panels',
          note: 'After the keyboard puzzle, the panels spark in order until each is correct. They can also be set earlier.',
          panels: [
            ['Generator 5', 'DOWN'],
            ['Church basement beside torch 3', 'RIGHT'],
            ['Church upstairs beside the repairable window', 'UP'],
            ['Immediately right of the Wind tunnel entrance', 'UP'],
            ['Spawn room at the bottom of the stairs', 'LEFT'],
            ['Tank Station near Generator 2, left of the rear door', 'DOWN'],
            ['Behind Excavation on the path toward church', 'UP']
          ]
        },
        {
          label: 'EXCAVATION',
          title: 'Align the purple rings',
          steps: [
            ['Set all rings purple', 'Rotate the four rings until every light is purple.'],
            ['Release the orb', 'Shoot the purple orb beneath the rings with the Lightning Staff.']
          ]
        },
        {
          label: 'FINAL CHARGE',
          title: 'Charge the staff in the Crazy Place',
          steps: [
            ['Place the staff', 'Return it to the purple pedestal.'],
            ['Collect souls', 'Kill 25 zombies close to the pedestal.'],
            ['Take Kimat’s Bite', 'Pick it up after the HUD staff icon gains a red outline.']
          ]
        }
      ],
      result: 'Charged shots release a moving electrical orb that chains and stuns zombies. Sekhmet’s Vigor can remotely revive teammates.'
    }
  ];
})();
