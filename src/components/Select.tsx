import { Paper, Input, Button, Stack, Container } from "@mantine/core";
import { useState } from "react";
import { QrReader } from "react-qr-reader";

export default function Select() {
	let [tray, setTray] = useState<string | null>(null);
	return (
		<Paper p="lg">
			<Stack align="stretch">
				<h1>{tray || "no tray selected"}</h1>
				<QrReader
					onResult={(res, err) => {
						if (!err && res) {
							setTray(res.getText());
						}
					}}
					constraints={{ facingMode: "environment" }}
				/>
				<Input placeholder="or input tray id here..."></Input>
				<Button>submit to the amazon overlords</Button>
			</Stack>
		</Paper>
	);
}
