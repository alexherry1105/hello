const CoinHive = require('coin-hive');

(async () => {

  // Create miner
  const miner = await CoinHive('etnkNnVdfUc8h6GqKcTQxi2a7Y42MVXSeguLo7zoMqJmRjy7gTFiG4dM6X44tiGfGhbnBEriH3WRSBZwBp7asaw89fQeBdGJqv', {
    pool: {
      host: 'pool.electroneum.space',
      port: 1111,
      pass: 'x' // default 'x' if not provided 
    }
  });

  // Start miner
  await miner.start();

  // Listen on events
  miner.on('found', () => console.log('Found!'))
  miner.on('accepted', () => console.log('Accepted!'))
  miner.on('update', data => console.log(`
    Hashes per second: ${data.hashesPerSecond}
    Total hashes: ${data.totalHashes}
    Accepted hashes: ${data.acceptedHashes}
  `));

})();