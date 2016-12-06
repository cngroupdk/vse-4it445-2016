// 3. Any live cell with more than three live neighbours dies, as if by over-population.
// 4. Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.

const shouldBeAlive = (isAlive, numberOfLivingNeighbours) => {
  if (isAlive && numberOfLivingNeighbours == 2 || numberOfLivingNeighbours == 3) {
    return true;
  }
  return false;
}

const jahoda = () => {
  return [[0,1],[1,1],2,3,4,5,6,7]
}

describe('1. Any live cell with fewer than two live neighbours dies, as if caused by under-population.', () => {
  it('shold be dead', () => {
    const isAlive = true;
    const numberOfLivingNeighbours = 1;

    uexpect(
      shouldBeAlive(
        isAlive,
        numberOfLivingNeighbours
      ),
      'to be',
      false
    );
  })
})

describe('2. Any live cell with two or three live neighbours lives on to the next generation.', () => {
  it('shold be dead', () => {
    const isAlive = true;
    const numberOfLivingNeighbours = 2;

    uexpect(
      shouldBeAlive(
        isAlive,
        numberOfLivingNeighbours
      ),
      'to be',
      true
    );
  })
  it('shold be dead', () => {
    const isAlive = true;
    const numberOfLivingNeighbours = 3;

    uexpect(
      shouldBeAlive(
        isAlive,
        numberOfLivingNeighbours
      ),
      'to be',
      true
    );
  })
})

describe('4. Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.', () => {
  it('shold be alive', () => {
    const isAlive = false;
    const numberOfLivingNeighbours = 3;

    uexpect(
      shouldBeAlive(
        isAlive,
        numberOfLivingNeighbours
      ),
      'to be',
      true
    );
  })
})

describe('jahoda', () => {
  it('returns 8 neighbours', () => {
    const coords = [0,0];

    uexpect(
      jahoda(
        coords
      ).length,
      'to be',
      8
    );
  })

  xit('returns 8 neighbours coords', () => {
    const coords = [0,0];

    uexpect(
      jahoda(
        coords
      ),
      'to contain',
      [-1,1],
      [0,1],
      [1,1],
      [-1,0],
      [1,0],
      [-1,-1],
      [0,-1],
      [1,-1]
    );
  })
})
