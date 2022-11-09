const mage = {
    healthPoints: 130,
    intelligence: 45,
    mana: 125,
    damage: undefined,
  };
  
  const warrior = {
    healthPoints: 200,
    strength: 30,
    weaponDmg: 2,
    damage: undefined,
  };
  
  const dragon = {
    healthPoints: 350,
    strength: 50,
    damage: undefined,
  };
  
  const battleMembers = { mage, warrior, dragon };


  const dragonAttack = () => {
    const minDmg = 15;
    const maxDmg = Math.floor(Math.random() * dragon.strength);
  
    const dragonDmg = maxDmg > minDmg ? maxDmg : minDmg;
  
    return dragonDmg;
  };



  const warriorAttack = () => {
    const minDmg = warrior.strength;
    const maxDmg = Math.floor(Math.random() *(minDmg * warrior.weaponDmg));
    const warriorDmg = maxDmg > minDmg ? maxDmg : minDmg;
    return warriorDmg;
  };

   const mageAttack = () => {
    const mageMana = mage.mana;
    const minDmg = mage.intelligence;
    const maxDmg = minDmg * 2;
    const turnStats = {
        manaSpent: 0,
        damageDealt: 'Not enough mana...',
    };

      if (mageMana > 15) {
            const mageDmg = minDmg < maxDmg ? maxDmg : minDmg;
            turnStats.manaSpent = 15;
            turnStats.damageDealt = mageDmg;
            return turnStats;
        }   
    return turnStats;
   };

   const turnResults = () => battleMembers

   const gameActions = (func1, func2, func3) => {
       const guerreiro = func1();
       const mago = func2();
       const dragao = func3();
        dragon.healthPoints -= guerreiro;
         warrior.damage = guerreiro;
         mage.mana -= mago.manaSpent;
         dragon.healthPoints -= mago.damageDealt;
        mage.damage = mago.damageDealt;
        mage.healthPoints -= dragao;
        warrior.healthPoints -= dragao;
        dragon.damage = dragao;
        return turnResults();
   };
    
      console.log(gameActions(warriorAttack, mageAttack, dragonAttack));
  
  
//     mageAttack() => {
//         const mageTurnStats = mageAttack(mage);
//         const mageDamage = mageTurnStats.damageDealt;
//         m
//       },
//    dragonAttack() => {
//         const dragonDamage = dragonAttack(dragon);
        
//       },
//       turnResults () => battleMembers,
//   });
  
//   gameActions.warriorTurn(warriorAttack);
//   gameActions.mageTurn(mageAttack);
//   gameActions.dragonTurn(dragonAttack);
//   gameActions.warriorTurn(warriorAttack);
//   gameActions.mageTurn(mageAttack);
//   gameActions.dragonTurn(dragonAttack);
//   gameActions.warriorTurn(warriorAttack);
//   gameActions.mageTurn(mageAttack);
//   gameActions.dragonTurn(dragonAttack);




  