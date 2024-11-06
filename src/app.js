// arrays with the words
let pronoun = ["theonly", "my", "our"];
let adj = ["great", "crazy", "giant"];
let noun = ["cheerleader", "cat", "dragon", "master", "universe"];

// generating the domains
for (let c = 0; c < pronoun.length; c++) {
  for (let o = 0; o < adj.length; o++) {
    for (let p = 0; p < noun.length; p++) {
      console.log(pronoun[c] + adj[o] + noun[p] + ".com");
    }
  }
}
