import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

export default function TaskTableRow({
	title,
	description,
}: {
	title: string;
	description: string;
}) {
	return (
		<TableRow
			key={Math.random()}
			sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
		>
			<TableCell>{title}</TableCell>
			<TableCell>{description}</TableCell>
		</TableRow>
	);
}
