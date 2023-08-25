import { Button, Grid } from '@mui/material';
import { Paper } from '@mui/material';
import Typography from '@mui/material/Typography';
import Image from 'next/image';

import wellcomeImage from '../../public/images/welcome.svg';
import adduser from '../../public/images/addusers.svg';
import exportData from '../../public/images/export.svg';
import todomanager from '../../public/images/todoManager.svg';
import FeatureCard from './ui/cards/FeatureCard';

export default function Wellcome() {
	return (
		<>
			<div
				style={{
					padding: '7% 14%',
				}}
			>
				<Grid container spacing={2}>
					<Grid item xs={6}>
						<Typography
							variant="h4"
							style={{
								color: '#ffffff',
								margin: '5% 0',
							}}
						>
							Welcome to 🎯DoItNow : Your Ultimate Todo Task Manager
						</Typography>
						<Button
							sx={{
								fontSize: '1.1rem',
								fontWeight: 'bold',
								padding: '4% 0',
							}}
							variant="contained"
							fullWidth
						>
							Get Started for Free
						</Button>
						<Typography
							variant="body1"
							style={{
								color: '#ffffff',
								margin: '5% 0',
							}}
						>
							Are you tired of juggling endless to-do lists, sticky notes, and
							reminders scattered across various platforms? It's time to bring
							order and efficiency to your daily tasks with TaskMaster, the
							premier todo task manager designed to elevate your productivity to
							new heights.
						</Typography>
					</Grid>
					<Grid item xs={6}>
						<Image
							src={wellcomeImage}
							alt="wellcome image"
							width={500}
							height={500}
						/>
					</Grid>
				</Grid>
			</div>
			<div>
				<Paper
					elevation={3}
					style={{
						padding: '5% 12%',
					}}
				>
					<h1 style={{ fontSize: '2rem' }}>Why you Need 🎯DoItNow</h1>
					<Typography
						sx={{
							color: '#252422',
							opacity: '0.8',
							fontSize: '1.3rem',
							fontWeight: 'semiBold',
						}}
					>
						📝 Todo task managers are invaluable tools for enhancing day-to-day
						productivity. They enable users to organize and prioritize tasks,
						break down complex projects into manageable steps, and set reminders
						and deadlines to stay on track. By providing a clear overview of
						pending and completed tasks, these managers empower users to manage
						their time efficiently, reduce stress, and accomplish their goals
						effectively. 💪 Additionally, with seamless collaboration features
						and accessibility across devices, users can collaborate with teams,
						access their tasks on the go, and integrate with other productivity
						tools, making todo task managers essential companions for
						streamlining daily tasks and optimizing productivity. 🚀
					</Typography>
				</Paper>
			</div>
			<div
				style={{
					color: '#ffffff',
					padding: '7% 15%',
				}}
			>
				<Typography variant="h4">
					Powerful Features to Supercharge Your Productivity
				</Typography>
				<Typography variant="body1">
					Experience a new level of efficiency and organization with our
					feature-rich todo manager. From intuitive task management to seamless
					collaboration, our cutting-edge tools are designed to simplify your
					daily workflow and elevate your productivity. Stay in control,
					accomplish more, and unlock your full potential with our comprehensive
					suite of features tailored to meet your needs.
				</Typography>
				<div
					style={{
						display: 'flex',
						justifyContent: 'space-around',
					}}
				>
					<FeatureCard
						img={adduser}
						title="Collaborative Task Assignment"
						description="Effortlessly collaborate and assign tasks to team members with our streamlined 'Add User to Task' feature."
					/>
					<FeatureCard
						img={todomanager}
						title="Task Management"
						description="Take control of your tasks and boost productivity with our intuitive task management feature.fsafgasdfasg"
					/>
					<FeatureCard
						img={exportData}
						title="Seamless Todo Data Export"
						description="Effortlessly export your todo data to CSV format, enabling seamless integration with other todo platforms."
					/>
				</div>
			</div>
		</>
	);
}
