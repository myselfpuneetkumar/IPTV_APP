import { useState } from "react";

export default function ImportM3U() {
    const [channels, setChannels] = useState([]);

    function m3uToJson(m3uContent) {
        const lines = m3uContent.split("\n");
        const channels = [];

        let currentChannel = null;

        for (let line of lines) {
            line = line.trim();

            if (line.startsWith("#EXTINF:")) {
                const nameMatch = line.match(/,(.*)$/);
                const logoMatch = line.match(/tvg-logo="([^"]*)"/);
                const categoryMatch = line.match(/group-title="([^"]*)"/);

                currentChannel = {
                    name: nameMatch ? nameMatch[1] : "",
                    logo: logoMatch ? logoMatch[1] : "",
                    category: categoryMatch ? categoryMatch[1] : "",
                    type: "Free",
                    link: ""
                };
            } else if (line && !line.startsWith("#") && currentChannel) {
                currentChannel.link = line;
                channels.push(currentChannel);
                currentChannel = null;
            }
        }

        return channels;
    }

    const handleFileUpload = (event) => {
        const file = event.target.files[0];

        if (!file) return;

        const reader = new FileReader();

        reader.onload = async (e) => {
            const m3uContent = e.target.result;
            const parsedChannels = m3uToJson(m3uContent);

            setChannels(parsedChannels);

            console.log(parsedChannels);

            // Optional: Save to JSON Server
            for (const channel of parsedChannels) {
                await fetch("http://localhost:3000/channels", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(channel)
                });
            }

            alert("Channels Imported Successfully");
        };

        reader.readAsText(file);
    };

    return (
        <>
            <h1>Import M3U File</h1>

            <input
                type="file"
                accept=".m3u,.m3u8"
                onChange={handleFileUpload}
            />

            <h2>Total Channels: {channels.length}</h2>

            {channels.map((channel, index) => (
                <div key={index}>
                    <h3>{channel.name}</h3>
                    <img
                        src={channel.logo}
                        alt={channel.name}
                        width="100"
                    />
                    <p>{channel.category}</p>
                </div>
            ))}
        </>
    );
}