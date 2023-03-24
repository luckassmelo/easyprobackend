import "dotenv/config";



export const zebraPrinter = {
    ip: process.env.ZEBRA_IP,
    printer: process.env.ZEBRA_NAME
}