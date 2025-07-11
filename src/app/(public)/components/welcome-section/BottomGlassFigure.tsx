import React from 'react';

const BottomGlassFigure: React.FC = () => {
	return (
		<svg viewBox="0 0 359 230" width="100%" height="100%" preserveAspectRatio="none">
			<defs>
				<clipPath id="bot-clip" clipPathUnits="objectBoundingBox">
					<path
						d="
								M0.440 0.487
					C0.440 0.583 0.490 0.661 0.552 0.661
					H0.889
					C0.949 0.661 0.997 0.737 0.997 0.830
					V0.830
					C0.997 0.924 0.949 1 0.889 1
					H0.224
					C0.187 1 0.156 0.953 0.156 0.894
					V0.894
					C0.156 0.835 0.125 0.787 0.088 0.787
					H0.078
					C0.035 0.787 0 0.733 0 0.665
					V0.174
					C0 0.078 0.050 0 0.111 0
					H0.329
					C0.390 0 0.440 0.078 0.440 0.174
					V0.487
					Z
					"
					/>
				</clipPath>
			</defs>
			<image
				href="/jpg/glass-bg.jpg"
				width="359"
				height="230"
				clipPath="url(#bot-clip)"
				preserveAspectRatio="xMidYMid slice"
			/>
		</svg>
		// <svg
		// 	viewBox="0 0 359 230"
		// 	width="100%"
		// 	height="100%"
		// 	className="block"
		// 	preserveAspectRatio="none"
		// >
		// 	<defs>
		// 		<clipPath id="bottom-clip" clipPathUnits="objectBoundingBox">
		// 			<path
		// 				d="
		//           M0.440 0.487
		//           C0.440 0.583 0.490 0.661 0.552 0.661
		//           H0.889
		//           C0.949 0.661 0.997 0.737 0.997 0.830
		//           V0.830
		//           C0.997 0.924 0.949 1 0.889 1
		//           H0.224
		//           C0.187 1 0.156 0.953 0.156 0.894
		//           V0.894
		//           C0.156 0.835 0.125 0.787 0.088 0.787
		//           H0.078
		//           C0.035 0.787 0 0.733 0 0.665
		//           V0.174
		//           C0 0.078 0.050 0 0.111 0
		//           H0.329
		//           C0.390 0 0.440 0.078 0.440 0.174
		//           V0.487
		//           Z
		//         "
		// 			/>
		// 		</clipPath>
		// 	</defs>
		// 	<foreignObject
		// 		width="100%"
		// 		height="100%"
		// 		clipPath="url(#bottom-clip)"
		// 	>
		// 		<div style={{ width: "100%", height: "100%" }}>
		// 			<Image
		// 				src="/jpg/glass-bg.jpg"
		// 				alt="Image"
		// 				fill
		// 				className="object-cover"
		// 				priority
		// 			/>
		// 		</div>
		// 	</foreignObject>
		// </svg>
	);
};

export default BottomGlassFigure;
