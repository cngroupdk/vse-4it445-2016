//
//

function isAliveInNextGeneration(isAlive, numberOfAliveNeighbours) {
  if (numberOfAliveNeighbours == 2 ) {
    return isAlive;
  }
  return  numberOfAliveNeighbours == 3;
}

function relativeNeighbourCoords() {
  return [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, 1],
    [1, 1],
    [1, 0],
    [1, -1],
    [0, -1],
  ];
}

describe('1. Any live cell with fewer than two live neighbours dies, as if caused by under-population.', () => {
  it('fails', () => {
    const isAlive = true;
    const numberOfAliveNeighbours = 0;

    uexpect(
      isAliveInNextGeneration(
        isAlive,
        numberOfAliveNeighbours,
      ),
      'to be',
      false
    );
  });
});

describe('2. Any live cell with two or three live neighbours lives on to the next generation.', () => {
  it('should be alive for 2 alive neighbours', () => {
    const isAlive = true;
    const numberOfAliveNeighbours = 2;

    uexpect(
      isAliveInNextGeneration(
        isAlive,
        numberOfAliveNeighbours,
      ),
      'to be',
      true
    );
  });
  it('should be alive for 3 alive neighbours', () => {
    const isAlive = true;
    const numberOfAliveNeighbours = 3;

    uexpect(
      isAliveInNextGeneration(
        isAlive,
        numberOfAliveNeighbours,
      ),
      'to be',
      true
    );
  });
});

describe('3. Any live cell with more than three live neighbours dies, as if by over-population.', () => {
  it('fails', () => {
    const isAlive = true;
    const numberOfAliveNeighbours = 4;

    uexpect(
      isAliveInNextGeneration(
        isAlive,
        numberOfAliveNeighbours,
      ),
      'to be',
      false
    );
  });
});

describe('4. Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.', () => {
  it('fails', () => {
    const isAlive = false;
    const numberOfAliveNeighbours = 3;

    uexpect(
      isAliveInNextGeneration(
        isAlive,
        numberOfAliveNeighbours,
      ),
      'to be',
      true
    );
  });
});

describe('ahoj.', () => {
  it('fails', () => {
    const isAlive = false;
    const numberOfAliveNeighbours = 2;

    uexpect(
      isAliveInNextGeneration(
        isAlive,
        numberOfAliveNeighbours,
      ),
      'to be',
      false
    );
  });
});

describe('Cell has -1 neighbour on left ', () => {
  it('fails', () => {
    const isAlive = true;
    const numberOfAliveNeighbours = 0;

    uexpect(
      relativeNeighbourCoords(),
      'to equal',
      [
        [-1, -1],
        [-1, 0],
        [-1, 1],
        [0, 1],
        [1, 1],
        [1, 0],
        [1, -1],
        [0, -1],
      ]
    );
  });
});
