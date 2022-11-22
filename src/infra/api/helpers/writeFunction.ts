import { readFileSync, writeFileSync, promises as fsPromises } from "fs";
import { join } from "path";

// ✅ write to file SYNCHRONOUSLY
export function syncWriteFile(filename: string, data: any) {
	writeFileSync(join(__dirname, filename), data, {
		flag: "a+",
	});

	const contents = readFileSync(join(__dirname, filename), "utf-8");

	return contents;
}
