const fs = require("fs");
const path = require("path");

exports.handler = async () => {
    try {
        const filePath = path.join(process.cwd(), "db.json");

        const data = JSON.parse(
            fs.readFileSync(filePath, "utf8")
        );

        return {
            statusCode: 200,
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
            },
            body: JSON.stringify(data.channels)
        };

    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({
                error: error.message
            })
        };
    }
};