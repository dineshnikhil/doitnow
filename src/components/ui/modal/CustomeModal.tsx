import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import AddTaskForm from '@/components/AddTaskForm';

const style = {
	position: 'absolute' as 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
	bgcolor: 'background.paper',
	border: '2px solid #000',
	boxShadow: 24,
	p: 4,
};

export default function CustomeModal({
	onHandleClose,
	open,
}: {
	onHandleClose: () => void;
	open: any;
}) {
	return (
		<Modal
			open={open}
			onClose={onHandleClose}
			aria-labelledby="modal-modal-title"
			aria-describedby="modal-modal-description"
		>
			<AddTaskForm />
		</Modal>
	);
}
