import { client } from "../../sanity/client.js";
import { ROLE_PRIORITY } from "./rolePriority.js";
import fs from "fs";
//obtain newly added roles from Sanity and compare with ROLE_PRIORITY
// Write roles not in ROLE_PRIORITY to newRoles.txt
const ROLES_QUERY = `*[_type == "officeBearer" && defined(role)].role`;

async function fetchAndCompareRoles() {
  try {
    const roles = await client.fetch(ROLES_QUERY);
    const uniqueRoles = Array.from(new Set(roles)).sort();
    const missingRoles = uniqueRoles.filter((role) => !(role in ROLE_PRIORITY));
    fs.writeFileSync("newRoles.txt", missingRoles.join("\n"), "utf-8");
    console.log("Roles not in ROLE_PRIORITY written to newRoles.txt");
    return missingRoles;
  } catch (err) {
    console.error("Error fetching roles:", err);
    return [];
  }
}

fetchAndCompareRoles();

export default fetchAndCompareRoles;
