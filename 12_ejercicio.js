

/* Desarrolla una función que busque en un array de objetos representando mutantes si existe alguno con un poder específico y retorne un mensaje indicando si fue encontrado o no.

Considera el caso de múltiples mutantes con el mismo poder. */


const mutants = [
    { name: 'Wolverine', power: 'regeneration' },
    { name: 'Magneto', power: 'magnetism' },
    { name: 'Professor X', power: 'telepathy' },
    { name: 'Jean Grey', power: 'telekinesis' },
    { name: 'Rogue', power: 'power absorption' },
    { name: 'Storm', power: 'weather manipulation' },
    { name: 'Mystique', power: 'shape-shifting' },
    { name: 'Beast', power: 'superhuman strength' },
    { name: 'Colossus', power: 'steel skin' },
    { name: 'Nightcrawler', power: 'teleportation' }
  ];
  
  function findMutantsByPower(mutants, power) {

    const Power = mutants.filter(mutant => mutant.power === power)

    if (Power.length > 0) {
      return "Se encontró mutantes con el poder " + power
    }
    else {
      return "No se encontró ningún mutante con el poder " + power
    }
  }
  
  console.log(findMutantsByPower(mutants, "telekinesis"))