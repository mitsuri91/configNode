import cowsay from "cowsay";
import "dotenv/config";

console.log(
    cowsay.say({
        text: `My name is ${process.env.NAME}, my campus is ${process.env.CAMPUS}`,
        e: "oO",
        T: "U ",
    }),
);