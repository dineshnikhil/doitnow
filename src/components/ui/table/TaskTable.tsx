import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import TableHead from '@mui/material/TableHead';
import Paper from '@mui/material/Paper';
import TaskTableRow from './TaskTableRow';

export default function TaskTable({ todos }: { todos: [] }) {
	return (
		<div
			style={{
				width: '70%',
				margin: '0 auto',
			}}
		>
			<TableContainer component={Paper}>
				<Table aria-label="simple table">
					<TableHead>
						<TableRow>
							<TableCell>Task Title</TableCell>
							<TableCell>Discription</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{todos.map((todo: any) => {
							return (
								<TaskTableRow
									key={todo._id}
									title={todo.title}
									description={todo.description}
								/>
							);
						})}
					</TableBody>
				</Table>
			</TableContainer>
		</div>
	);
}
