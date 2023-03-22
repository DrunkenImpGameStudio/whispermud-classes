'use strict';

module.exports = {
  name: 'Thief',
  description: 'Some description',
  
  abilityTable: {
    3: { skills: ['rend'] },
    5: { skills: ['lunge'] },
    7: { skills: ['shieldblock'] },
   10: { skills: ['secondwind'] },
  },

  setupPlayer: (state, player) => {
    const energy = state.AttributeFactory.create('energy', 100);
    player.addAttribute(energy);
    player.prompt = '[ %health.current%/%health.max% <b>hp</b> %energy.current%/%energy.max% <b>energy</b> ]';
  }
};
