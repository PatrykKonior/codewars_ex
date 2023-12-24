function findNeedle(haystack) {
    let index = haystack.findIndex(x => x === "needle")
    return `found the needle at position ${index}`
  }