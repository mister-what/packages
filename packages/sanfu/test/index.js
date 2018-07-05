const { pipeAcc, inspect, push, pick, S } = require('..')
const { set } = require('partial.lenses')
const { flip } = require('sanctuary')

const x = pipeAcc([ 
    ([a]) => a + 1
    , ([, b]) => b * 2
    , ([, , c]) => c - 1
 ]);

x(2).then(console.log)

const adder = push([]);

console.log(adder(55));

console.log(
    'PICK:',
    pick(['a', 'b']) ({ a:1, b:2, c:3 })
)

console.log(
    'Starling: ',
    S,
    S (a => b => a + b) (a => a + 99) (1)
)


const setDeps = set ([ 'pkg', 'dependencies' ])

console.log(
    'Starling set deps',
    S (flip(setDeps)) (a => (console.log('got:', a), ['w'])) ({ pkg: { dependencies: ['x'] } })
)