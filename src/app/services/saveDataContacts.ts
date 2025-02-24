import dotenv from "dotenv";
import fs from "fs";
import path from "path";

dotenv.config();
const contactsFilePath = process.env.CONTACTS_DATA_PATH;

if (!contactsFilePath) {
    throw new Error("CONTACTS_DATA_PATH environment variable it`s not defined.");
}
export const saveContactData = (data: any) => {
    try {
        
        const dirPath = path.dirname(contactsFilePath);
        if (!fs.existsSync(dirPath)) {
            fs.mkdirSync(dirPath, { recursive: true });
        }

        
        let contacts = [];
        if (fs.existsSync(contactsFilePath)) {
            const fileContent = fs.readFileSync(contactsFilePath, "utf8");
            contacts = fileContent ? JSON.parse(fileContent) : [];
        }

        
        contacts.push(data);

        
        fs.writeFileSync(contactsFilePath, JSON.stringify(contacts, null, 2), "utf8");

        console.log("Contact save successfully!");
    } catch (error) {
        console.error("Error to save contact:", error);
        throw new Error("Failure to save contact data.");
    }
};