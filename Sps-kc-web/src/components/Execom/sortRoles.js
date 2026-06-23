import { ROLE_PRIORITY } from "./rolePriority.js";

// Output sorted ROLE_PRIORITY by value (priority)
const sortedRolePriority = Object.fromEntries(
  Object.entries(ROLE_PRIORITY).sort((a, b) => a[1] - b[1])
);
console.log(sortedRolePriority);
