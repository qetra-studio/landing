import React from 'react';

const TopGlassFigure: React.FC = () => {
	return (
		<svg viewBox="0 0 359 442" className="block" width="100%" height="100%" preserveAspectRatio="none">
			<defs>
				<clipPath id="top-clip" clipPathUnits="objectBoundingBox">
					<path
						d="
              M0.842 0.058
              C0.842 0.0896 0.874 0.1155 0.913 0.1155
              H0.921
              C0.964 0.1155 1 0.1441 1 0.1794
              V0.91
              C1 0.9599 0.949 1 0.888 1
              H0.744
              C0.683 1 0.632 0.9599 0.632 0.91
              V0.792
              C0.632 0.7421 0.581 0.7014 0.52 0.7014
              H0.111
              C0.05 0.7014 0 0.6607 0 0.6106
              V0.274
              C0 0.2239 0.05 0.1832 0.111 0.1832
              H0.129
              C0.19 0.1832 0.24 0.1425 0.24 0.0927
              V0.09
              C0.24 0.04 0.29 0 0.351 0
              H0.771
              C0.803 0 0.842 0.0258 0.842 0.058
              Z
            "
					/>
				</clipPath>
			</defs>

			<image
				href="/jpg/glass-bg.jpg"
				className="object-cover"
				width="359"
				height="442"
				clipPath="url(#top-clip)"
				preserveAspectRatio="xMidYMid slice"
			/>
		</svg>
	);
};

export default TopGlassFigure;
