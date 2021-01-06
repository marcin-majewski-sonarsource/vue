var merged = arr.reduce(function(a, b) {
  a.concat(b);
}); // Noncompliant: No return statement

