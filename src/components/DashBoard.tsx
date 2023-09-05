import AddTaskForm from './AddTaskForm';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

type todoType = {
	title: String;
	description: String;
};

export default function DashBoard({ todos }: { todos: [] }) {
	return (
		<>
			<AddTaskForm />
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
								<TableCell>No</TableCell>
								<TableCell>Task Title</TableCell>
								<TableCell>Discription</TableCell>
							</TableRow>
						</TableHead>
						<TableBody></TableBody>
					</Table>
				</TableContainer>
			</div>

			<div
				style={{
					padding: '7% 15%',
				}}
			>
				{todos.map((todo: any) => {
					return <h1 key={todo._id}>{todo.title}</h1>;
				})}
			</div>
		</>
	);
}
