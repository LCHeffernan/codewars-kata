describe("Test Cases", function() {
    Test.assertSimilar(ballCollector([58, 68, 62, 69, 58]), { weight: 116 }, "Should return the combined weight of just the tennis balls!");
    Test.assertSimilar(ballCollector([60,66,71,68,62]), { weight: 0 }, "Should return the combined weight of just the tennis balls!");
    Test.assertSimilar(ballCollector([58]), { weight: 58 }, "Should return the combined weight of just the tennis balls!");
    Test.assertSimilar(ballCollector([58, 58, 58]), { weight: 174 }, "Should return the combined weight of just the tennis balls!");
  });