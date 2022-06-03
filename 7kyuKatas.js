function ballCollector(detritus) {
    let monkeys = {
      weight: 0
    };
    const tennisBalls = detritus.filter(w => w === 58);
    monkeys.weight = 58 * tennisBalls.length;
    return monkeys;
  }