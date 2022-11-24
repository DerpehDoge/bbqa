import { AppShell, Center, useMantineTheme } from "@mantine/core";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Select from "./components/Select";
import Vote from "./components/Judge";

function App() {
	const theme = useMantineTheme();
	const [group, setGroup] = useState<string>();

	return (
		<AppShell
			style={{
				backgroundColor:
					theme.colorScheme == "dark"
						? theme.colors.dark[8]
						: theme.colors.gray[0],
				color: theme.colorScheme == "dark" ? "white" : "black",
				fontFamily: "Roboto Mono",
			}}
		>
			<Center
				style={{
					height: "100%",
				}}
			>
				{group ? <Vote group={group} /> : <Select />}
			</Center>
		</AppShell>
	);
}

export default App;
