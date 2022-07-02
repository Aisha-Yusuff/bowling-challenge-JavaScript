const BowlingScore = require("../lib/bowlingScore");

describe("BowlingScore", () => {
  it("returns the score for one frame", () => {
    const bowlingScore = new BowlingScore([[4, 2]]);
    bowlingScore.frame();
    expect(bowlingScore.finalScore()).toEqual("Final Score: 6");
  });

  it("returns the score for multiple frames", () => {
    const bowlingScore = new BowlingScore([
      [4, 2],
      [3, 3],
      [1, 1],
    ]);
    bowlingScore.frame();
    expect(bowlingScore.finalScore()).toEqual("Final Score: 14");
  });

  it("returns the final score of the players gutter game", () => {
    const bowlingScore = new BowlingScore([
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
    ]);
    bowlingScore.frame();
    expect(bowlingScore.finalScore()).toEqual("Final Score: 0");
  });

  it("returns the final score of players game without spares and strikes", () => {
    const bowlingScore = new BowlingScore([
      [1, 1],
      [1, 1],
      [1, 1],
      [1, 1],
      [1, 1],
      [1, 1],
      [1, 1],
      [1, 1],
      [1, 1],
      [1, 1],
    ]);
    bowlingScore.frame();
    expect(bowlingScore.finalScore()).toEqual("Final Score: 20");
  });

  it("returns the final score including points from one spare scored in the game", () => {
    const bowlingScore = new BowlingScore([
      [0, 0],
      [6, 4],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
      [0, 0],
    ]);
    bowlingScore.frame();
    bowlingScore.spare();
    expect(bowlingScore.finalScore()).toEqual("Final Score: 16");
  });
});
