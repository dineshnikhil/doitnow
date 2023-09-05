import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

export default function TaskTableRow() {
	return (
		<TableRow
			key={Math.random()}
			sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
		>
			<TableCell>1</TableCell>
			<TableCell>one</TableCell>
			<TableCell>one description</TableCell>
		</TableRow>
	);
}
