import { prisma } from "@prisma/client";
import { prismaClient } from "../src/database/prismaClient";

async function main() {
    const triggerOne = await prismaClient.triggerType.create({
        data: {
            description: 'Continuos Time',
            is_accumulated: false,
            status: true,
            unit_of_measurement: 'TM',

            Trigger: {
                create: {
                    description: 'Produced Pieces Trigger',
                    id_user: 1,
                    status: false,
                    value: 5,
                    group: 'AMP'
                }
            }
        },
    });

    const triggerTwo = await prismaClient.triggerType.create({
        data: {
            description: 'Productivity Time',
            is_accumulated: false,
            status: true,
            unit_of_measurement: 'TM',

            Trigger: {
                create: {
                    description: 'Machine Status Trigger',
                    id_user: 1,
                    status: false,
                    value: 5,
                    group: 'CAR'
                }
            }
        },
    });

    console.log(triggerOne, triggerTwo);
    console.log("[PRISMA CLIENT] Seeds generated");
    
}

main()
    .then(async () => {
        await prismaClient.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prismaClient.$disconnect();
        process.exit(1);
    });