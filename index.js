switch a {
  case 1,2:  // Noncompliant; only 2 is ever handled by this case
    doTheThing(a);
  case 3 || 4: // Noncompliant; only '3' is handled
    doThatThing(a);
  case 5:
    doTheOtherThing(a);
  default:
    console.log("Neener, neener!");  // this happens when a==1 or a == 4
}
