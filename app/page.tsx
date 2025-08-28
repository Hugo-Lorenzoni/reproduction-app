import { env } from "process";

/** Add your relevant code here for the issue to reproduce */
export default async function Home() {
  console.log("env", env.PHASE);
  console.log("process.env", process.env.PHASE);
  return null;
}
