import React from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Image from 'next/image';

interface featureCardProps {
	img: any;
	title: string;
	description: string;
}

export default function FeatureCard({
	img,
	title,
	description,
}: featureCardProps) {
	return (
		<Card sx={{ width: '30%', backgroundColor: '#93B1A6' }}>
			<CardActionArea>
				<Image src={img} alt="some ramdone" width={350} height={350} />
				<CardContent
					sx={{
						backgroundColor: '#5C8374',
					}}
				>
					<Typography
						gutterBottom
						variant="h5"
						component="div"
						sx={{
							color: '#183D3D',
						}}
					>
						{title}
					</Typography>
					<Typography
						variant="body2"
						color="#ffffff"
						sx={{
							opacity: '0.5',
						}}
					>
						{description}
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	);
}
