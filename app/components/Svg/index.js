import * as React from 'react';
import Svg, { G, Path, Defs } from 'react-native-svg';
import { _primary, _primary2, _secondary } from '../../utils/colors';

export function WashSVG({ height, width, color, ...props }) {
	return (
		<Svg
			{...props}
			height={height}
			viewBox='0 0 380 480'
			width={width}
			xmlns='http://www.w3.org/2000/svg'
		>
			<Path fill={color} d='M88 48H40a8 8 0 000 16h48a8 8 0 000-16zm0 0' />
			<Path
				fill={color}
				d='M368 472V8a8 8 0 00-8-8H8a8 8 0 00-8 8v464a8 8 0 008 8h352a8 8 0 008-8zM16 112h336v320H16zm336-16H128V16h224zM16 16h96v80H16zm0 448v-16h336v16zm0 0'
			/>
			<Path
				fill={color}
				d='M240 80h88a8 8 0 008-8V40a8 8 0 00-8-8h-88a8 8 0 00-8 8v32a8 8 0 008 8zm8-32h72v16h-72zm0 0M200 56c0 8.836-7.164 16-16 16s-16-7.164-16-16 7.164-16 16-16 16 7.164 16 16zm0 0M288 264a8 8 0 00-8 8c.004 45.8-32.348 85.223-77.266 94.16-44.922 8.938-89.898-15.101-107.425-57.414s-2.727-91.113 35.355-116.562c38.078-25.446 88.828-20.45 121.215 11.937 1.898 1.895 3.687 3.902 5.426 5.957l-7.36-1.84c-4.273-1.035-8.582 1.567-9.648 5.832a8 8 0 005.758 9.692l32 8a8.007 8.007 0 006.867-1.453A8.011 8.011 0 00288 224v-32a8 8 0 00-16 0v10.863c-33.813-42.914-93.672-55.136-141.602-28.91-47.925 26.23-69.902 83.235-51.988 134.848 17.918 51.613 70.492 82.738 124.36 73.629 53.87-9.114 93.28-55.797 93.23-110.43a8 8 0 00-8-8zm0 0'
			/>
			<Path
				fill={color}
				d='M168 280a8 8 0 008-8v-32a8 8 0 00-8-8h-32a8 8 0 000 16h24v16h-24a8 8 0 00-8 8v32a8 8 0 008 8h32a8 8 0 000-16h-24v-16zm0 0M232 312a8 8 0 008-8v-24h8a8 8 0 000-16h-8v-16a8 8 0 00-16 0v16h-16v-24a8 8 0 00-16 0v32a8 8 0 008 8h24v24a8 8 0 008 8zm0 0'
			/>
		</Svg>
	);
}

export function IronSVG({ height, width, color, ...props }) {
	return (
		<Svg
			{...props}
			height={height}
			viewBox='0 -112 480 480'
			width={width}
			xmlns='http://www.w3.org/2000/svg'
		>
			<Path
				fill={color}
				d='M472 24h-38.398L432 7.238A8.001 8.001 0 00424 0H232C115.34.148 19.832 92.82 16.168 209.426A23.945 23.945 0 000 232v16a8 8 0 008 8h368a8 8 0 008-8v-24h8a8 8 0 008-8c0-17.648 17.945-32 40-32a8.005 8.005 0 005.945-2.605 8.003 8.003 0 002.055-6.157l-8.246-86.168 35.82-17.87A7.997 7.997 0 00480 64V32a8 8 0 00-8-8zM368 240H16v-8a8 8 0 018-8h344zm16.8-32H32.16C36.578 100.797 124.707 16.129 232 16h184.727l14.53 152.586c-22.269 1.976-40.878 17.766-46.456 39.414zM464 59.055L438.137 72l-3.047-32H464zm0 0'
			/>
			<Path
				fill={color}
				d='M392 48H240c-48.578.059-87.941 39.422-88 88a8 8 0 008 8h232a8 8 0 008-8V56a8 8 0 00-8-8zm-184 80v-8a8 8 0 018-8h32a8 8 0 018 8v8zm176 0H272v-8c0-13.254-10.746-24-24-24h-32c-13.254 0-24 10.746-24 24v8h-23.55c4.113-36.418 34.898-63.957 71.55-64h144zm0 0'
			/>
		</Svg>
	);
}
export function DryCleanSVG({ height, width, color, ...props }) {
	return (
		<Svg
			{...props}
			height={height}
			viewBox='-136 0 480 480'
			width={width}
			xmlns='http://www.w3.org/2000/svg'
		>
			<Path
				fill={color}
				d='M205 30.25a8.002 8.002 0 00-4.2-14.21l-160-16c-.136 0-.257.05-.382 0C40.289-.009 40.145 0 40 0H8a8 8 0 00-8 8v48a8 8 0 008 8h53.762l-13.52 54.066A7.995 7.995 0 0056 128a8.004 8.004 0 007.754-6.063L78.242 64H80c13.254 0 24 10.746 24 24v24a8 8 0 00-8 8v32c0 14.992-15.254 35.32-31.414 56.848C41.816 239.199 16 273.602 16 312v160a8 8 0 008 8h176a8 8 0 008-8V216c0-43.672-13.504-60.8-32-67.543V120a8 8 0 00-8-8V59.84zM16 16h16v32H16zm176 200v248H32V312c0-33.078 24.113-65.2 45.383-93.543 16.152-21.527 30.402-40.504 33.824-58.457H136c34.922 0 56 0 56 56zm-80-72v-16h48v16zm43-94.246A7.99 7.99 0 00152 56v56h-32V88c-.027-22.078-17.918-39.973-40-40H48V16.84l131.68 13.168zm0 0'
			/>
		</Svg>
	);
}

export function WashAndIron({ height, width, color, ...props }) {
	return (
		<Svg
			{...props}
			height={height}
			viewBox='0 -24 480 480'
			width={width}
			xmlns='http://www.w3.org/2000/svg'
		>
			<Path
				fill={color}
				d='M440 0c-17.602 0-40 59.656-40 88v8H190.527a23.263 23.263 0 00-4.8-24c8.32-9.043 8.32-22.957 0-32A23.893 23.893 0 00168 0H56a23.895 23.895 0 00-21.945 14.2A23.9 23.9 0 0038.238 40c-8.32 9.043-8.32 22.957 0 32a23.27 23.27 0 00-4.797 24H24c-13.254 0-24 10.746-24 24s10.746 24 24 24h44.8l143.567 136-145.87 138.191a8.004 8.004 0 00-.306 11.313 8.004 8.004 0 0011.313.305L224 291.016l146.496 138.793a8.004 8.004 0 0011.313-.305 8.004 8.004 0 00-.305-11.313L235.633 280l143.566-136H472a8 8 0 008-8V88c0-28.344-22.398-88-40-88zM48 56a8 8 0 018-8h112a8 8 0 010 16H56a8 8 0 01-8-8zm8-40h112a8 8 0 010 16H56a8 8 0 010-16zm-8 72a8 8 0 018-8h112a8 8 0 010 16H56a8 8 0 01-8-8zm-32 32a8 8 0 018-8h376v16H24a8 8 0 01-8-8zm208 148.984L92.078 144h263.844zM464 128h-48V88a146.656 146.656 0 0124-70.078A146.656 146.656 0 01464 88zm0 0'
			/>
		</Svg>
	);
}

export function ExpressDeliveryVan({ height, width, color, ...props }) {
	return (
		<Svg
			{...props}
			height={height}
			viewBox='0 0 512 512'
			width={width}
			xmlns='http://www.w3.org/2000/svg'
		>
			<G fill={color}>
				<Path
					fill={color}
					d='M467.63 236.174L427.514 176H341.66l5.596-36h-36.63c-3.777-38.123-36.026-68-75.125-68s-71.348 29.877-75.125 68H67.5v15h92.875c3.777 38.123 36.026 68 75.125 68s71.348-29.877 75.125-68h19.119l-27.669 178H161.968c-27.479-42.694-89.522-42.593-116.937 0H0v45h34.411c3.753 34.807 33.301 62 69.089 62s65.336-27.193 69.089-62h142.822c3.753 34.807 33.301 62 69.089 62s65.336-27.193 69.089-62H512v-93.5c0-25.353-19.552-46.224-44.37-48.326zM235.5 208c-33.36 0-60.5-27.141-60.5-60.5S202.14 87 235.5 87s60.5 27.141 60.5 60.5-27.14 60.5-60.5 60.5zM34.411 363H15v-15h22.759a68.918 68.918 0 00-3.348 15zm69.089 62C73.449 425 49 400.552 49 370.5S73.449 316 103.5 316s54.5 24.448 54.5 54.5-24.449 54.5-54.5 54.5zm271.354-234h44.633l30 45h-82.133zm-59.443 172H172.589a68.918 68.918 0 00-3.348-15h149.518a68.918 68.918 0 00-3.348 15zm69.089 62c-30.051 0-54.5-24.448-54.5-54.5s24.449-54.5 54.5-54.5 54.5 24.448 54.5 54.5-24.449 54.5-54.5 54.5zM497 363h-43.411a68.918 68.918 0 00-3.348-15H497zm0-30h-54.032c-27.479-42.694-89.522-42.593-116.937 0h-8.776l22.072-142h20.318l-10 60h113.854c15.893 0 29.227 11.129 32.643 26H469.5c-12.407 0-22.5 10.094-22.5 22.5s10.093 22.5 22.5 22.5H497zm0-26h-27.5c-9.926 0-9.916-15 0-15H497zM15.5 178h15v15h-15z'
				/>
				<Path d='M45.5 178h67v15h-67zM46.5 214.5h15v15h-15zM76.5 214.5h86v15h-86zM31.5 251h86v15h-86zM1.5 251h15v15h-15zM103.5 348C91.093 348 81 358.094 81 370.5S91.093 393 103.5 393s22.5-10.094 22.5-22.5-10.093-22.5-22.5-22.5zM96 370.5c0-9.926 15-9.916 15 0 0 4.136-15 9.916-15 0zM384.5 348c-12.407 0-22.5 10.094-22.5 22.5s10.093 22.5 22.5 22.5 22.5-10.094 22.5-22.5-10.093-22.5-22.5-22.5zm0 30c-9.926 0-9.916-15 0-15 9.926 0 9.916 15 0 15zM244 104.5h-15V159h35.5v-15H244z' />
			</G>
		</Svg>
	);
}

export function DeliveryVan({ height, width, color, ...props }) {
	return (
		<Svg
			{...props}
			height={height}
			viewBox='0 0 512 512'
			width={width}
			xmlns='http://www.w3.org/2000/svg'
		>
			<G fill={color}>
				<Path
					fill={color}
					d='M467.63 236.174L427.514 176H341.66l5.596-36h-36.63c-3.777-38.123-36.026-68-75.125-68s-71.348 29.877-75.125 68H67.5v15h92.875c3.777 38.123 36.026 68 75.125 68s71.348-29.877 75.125-68h19.119l-27.669 178H161.968c-27.479-42.694-89.522-42.593-116.937 0H0v45h34.411c3.753 34.807 33.301 62 69.089 62s65.336-27.193 69.089-62h142.822c3.753 34.807 33.301 62 69.089 62s65.336-27.193 69.089-62H512v-93.5c0-25.353-19.552-46.224-44.37-48.326zM235.5 208c-33.36 0-60.5-27.141-60.5-60.5S202.14 87 235.5 87s60.5 27.141 60.5 60.5-27.14 60.5-60.5 60.5zM34.411 363H15v-15h22.759a68.918 68.918 0 00-3.348 15zm69.089 62C73.449 425 49 400.552 49 370.5S73.449 316 103.5 316s54.5 24.448 54.5 54.5-24.449 54.5-54.5 54.5zm271.354-234h44.633l30 45h-82.133zm-59.443 172H172.589a68.918 68.918 0 00-3.348-15h149.518a68.918 68.918 0 00-3.348 15zm69.089 62c-30.051 0-54.5-24.448-54.5-54.5s24.449-54.5 54.5-54.5 54.5 24.448 54.5 54.5-24.449 54.5-54.5 54.5zM497 363h-43.411a68.918 68.918 0 00-3.348-15H497zm0-30h-54.032c-27.479-42.694-89.522-42.593-116.937 0h-8.776l22.072-142h20.318l-10 60h113.854c15.893 0 29.227 11.129 32.643 26H469.5c-12.407 0-22.5 10.094-22.5 22.5s10.093 22.5 22.5 22.5H497zm0-26h-27.5c-9.926 0-9.916-15 0-15H497zM15.5 178h15v15h-15z'
				/>
			</G>
		</Svg>
	);
}
export function Discount({ height, width, color, ...props }) {
	return (
		<Svg
			{...props}
			height={height}
			width={width}
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 512.003 512.003'
		>
			<Path
				fill={color}
				d='M477.958 262.633a15.004 15.004 0 010-13.263l19.096-39.065c10.632-21.751 2.208-47.676-19.178-59.023l-38.41-20.38a15.005 15.005 0 01-7.796-10.729l-7.512-42.829c-4.183-23.846-26.241-39.87-50.208-36.479l-43.053 6.09a15.004 15.004 0 01-12.613-4.099l-31.251-30.232c-17.401-16.834-44.661-16.835-62.061 0L193.72 42.859a15.01 15.01 0 01-12.613 4.099l-43.053-6.09c-23.975-3.393-46.025 12.633-50.208 36.479l-7.512 42.827a15.008 15.008 0 01-7.795 10.73l-38.41 20.38c-21.386 11.346-29.81 37.273-19.178 59.024l19.095 39.064a15.004 15.004 0 010 13.263L14.95 301.699c-10.632 21.751-2.208 47.676 19.178 59.023l38.41 20.38a15.005 15.005 0 017.796 10.729l7.512 42.829c3.808 21.708 22.422 36.932 43.815 36.93 2.107 0 4.245-.148 6.394-.452l43.053-6.09a15 15 0 0112.613 4.099l31.251 30.232c8.702 8.418 19.864 12.626 31.03 12.625 11.163-.001 22.332-4.209 31.03-12.625l31.252-30.232c3.372-3.261 7.968-4.751 12.613-4.099l43.053 6.09c23.978 3.392 46.025-12.633 50.208-36.479l7.513-42.827a15.008 15.008 0 017.795-10.73l38.41-20.38c21.386-11.346 29.81-37.273 19.178-59.024l-19.096-39.065zm-13.923 72.002l-38.41 20.38c-12.246 6.499-20.645 18.057-23.04 31.713l-7.512 42.828a15.038 15.038 0 01-16.987 12.342l-43.053-6.09c-13.73-1.945-27.316 2.474-37.281 12.113L266.5 478.152a15.04 15.04 0 01-20.997 0l-31.251-30.232c-8.422-8.147-19.432-12.562-30.926-12.562-2.106 0-4.229.148-6.355.449l-43.053 6.09a15.042 15.042 0 01-16.987-12.342l-7.513-42.829c-2.396-13.656-10.794-25.215-23.041-31.712l-38.41-20.38a15.037 15.037 0 01-6.489-19.969L60.574 275.6c6.088-12.456 6.088-26.742 0-39.198l-19.096-39.065a15.037 15.037 0 016.489-19.969l38.41-20.38c12.246-6.499 20.645-18.057 23.04-31.713l7.512-42.828a15.038 15.038 0 0116.987-12.342l43.053 6.09c13.725 1.943 27.316-2.474 37.281-12.113l31.252-30.232a15.04 15.04 0 0120.997 0l31.251 30.232c9.965 9.64 23.554 14.056 37.281 12.113l43.053-6.09a15.04 15.04 0 0116.987 12.342l7.512 42.829c2.396 13.656 10.794 25.215 23.041 31.712l38.41 20.38a15.037 15.037 0 016.489 19.969l-19.096 39.064c-6.088 12.455-6.088 26.743 0 39.198l19.096 39.064a15.039 15.039 0 01-6.488 19.972z'
			/>
			<Path
				fill={color}
				d='M363.886 148.116c-5.765-5.766-15.115-5.766-20.881 0l-194.889 194.89c-5.766 5.766-5.766 15.115 0 20.881a14.72 14.72 0 0010.44 4.325c3.778 0 7.558-1.441 10.44-4.325l194.889-194.889c5.768-5.767 5.768-15.115.001-20.882zM196.941 123.116c-29.852 0-54.139 24.287-54.139 54.139s24.287 54.139 54.139 54.139 54.139-24.287 54.139-54.139-24.287-54.139-54.139-54.139zm0 78.747c-13.569 0-24.608-11.039-24.608-24.609 0-13.569 11.039-24.608 24.608-24.608s24.609 11.039 24.609 24.608c-.001 13.57-11.04 24.609-24.609 24.609zM315.061 280.61c-29.852 0-54.139 24.287-54.139 54.139s24.287 54.139 54.139 54.139c29.852 0 54.139-24.287 54.139-54.139s-24.287-54.139-54.139-54.139zm0 78.747c-13.569 0-24.609-11.039-24.609-24.608s11.039-24.608 24.609-24.608c13.569 0 24.608 11.039 24.608 24.608s-11.039 24.608-24.608 24.608z'
			/>
		</Svg>
	);
}
export function Diamond({
	height,
	width,
	color1,
	color2,
	color3,
	color4,
	...props
}) {
	return (
		<Svg
			{...props}
			height={height}
			width={width}
			xmlns='http://www.w3.org/2000/svg'
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 512 512'
		>
			<Path
				fill={color1}
				d='M145.454 209.709L249.289 483.58h12.345l103.834-273.871z'
			/>
			<Path
				d='M232.914 474.449c4.335 4.886 10.17 7.927 16.375 9.132L145.454 209.71.322 163.994c.661 4.906-15.025-18.303 232.592 310.455z'
				fill={color2}
			/>
			<Path
				d='M51.695 180.177L.322 163.995c.661 4.905-15.024-18.304 232.592 310.453 3.21 3.618 7.245 6.219 11.642 7.817L51.695 180.177z'
				fill={color3}
			/>
			<G fill={color2}>
				<Path d='M86.074 51.099l59.38 158.611L255.461 84.212l-167.38-34.11c-.727.316-1.4.651-2.007.997zM365.468 209.71L261.634 483.58c6.205-1.205 12.039-4.246 16.375-9.132 64.394-85.292 233.353-308.79 233.863-310.854L365.468 209.71zM365.468 209.71l59.361-158.56c-.7-.398-1.396-.735-2.074-1.03L255.461 84.212 365.468 209.71z' />
			</G>
			<Path fill={color4} d='M145.454 209.709h220.014L255.461 84.212z' />
			<Path
				d='M86.074 51.099c-3.916 2.227-4.52 3.544-10.676 11.438C-4.743 165.306-.551 157.536.322 163.994l145.132 45.715-59.38-158.61z'
				fill={color1}
			/>
			<Path
				d='M51.695 180.177L87.063 53.74l-.989-2.642c-3.915 2.227-4.52 3.544-10.676 11.438-80.142 102.77-75.949 95-75.077 101.458l51.374 16.183z'
				fill={color4}
			/>
			<Path
				d='M365.468 209.71l146.403-46.115c.413-2.149-.209-3.422-1.25-4.756-72.603-93.205-82.672-106.93-85.792-107.689l-59.361 158.56z'
				fill={color1}
			/>
			<Path
				d='M255.461 84.212L422.756 50.12c-3.521-1.527-6.327-1.748-6.433-1.767l-134.829-18.16c-42.419-5.714-60.701 2.923-187.247 18.208-.195.042-2.915.287-6.166 1.702l167.38 34.109z'
				fill={color4}
			/>
		</Svg>
	);
}

export function Diamond_({
	height,
	width,
	color1,
	color2,
	color3,
	color4,
	...props
}) {
	return (
		<Svg
			{...props}
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 200.9 178.6'
			height={height}
			width={width}
		>
			{/*<Defs></Defs>*/}
			{/*<G id='prefix__Layer_2' data-name='Layer 2'>*/}
			{/*	<G id='prefix__Layer_2-2' data-name='Layer 2'>*/}
			<Path
				// className='prefix__cls-1'
				d='M20.29 59.55l36.78 11.59v-.01L20.29 59.55zM143.4 71.14L102.66 178.6 143.4 71.14z'
				fill={_primary}
			/>
			<Path
				fill={_primary}
				className='prefix__cls-2'
				d='M143.4 71.14H57.07L97.82 178.6h4.84L143.4 71.14z'
			/>
			<Path
				fill={'#9cd7f2'}
				className='prefix__cls-3'
				d='M20.28 59.55L.13 53.2v.15a2 2 0 000 .22c0 .21.14.52 1 1.76l.29.41.25.35.36.49.41.56C8 64.76 27.08 89.63 91.39 175a10.79 10.79 0 00.9.89l.23.2a11 11 0 002.08 1.38l.21.11a12.55 12.55 0 003 1L57.07 71.13 20.28 59.55z'
			/>
			<Path
				fill={'#9cd7f2'}
				className='prefix__cls-3'
				d='M34.16 9.94l22.91 61.19 43.17-49.24L34.56 8.51a7.26 7.26 0 00-.79.39l.39 1zM57.07 71.14v-.01.01zM200.85 53L143.4 71.13 102.66 178.6a11.51 11.51 0 006.43-3.59c25.26-33.46 91.56-121.16 91.76-122zM143.4 71.13l23.3-62.21a9 9 0 00-.82-.41l-65.64 13.38z'
			/>
			<Path
				fill={_primary2}
				className='prefix__cls-4'
				d='M100.24 21.89L57.07 71.14h86.33l-43.16-49.25z'
			/>
			<Path
				fill={_primary}
				className='prefix__cls-2'
				d='M20.28 59.55l36.79 11.58L34.16 9.94l-.39-1c-1.53.87-1.77 1.39-4.18 4.49C-1.86 53.71-.22 50.66.13 53.2l20.15 6.35zM200.85 53a2.09 2.09 0 00-.49-1.87C171.87 14.6 167.92 9.22 166.7 8.92l-23.3 62.21z'
			/>
			<Path
				fill={_primary2}
				className='prefix__cls-4'
				d='M100.24 21.89l65.64-13.38a9.22 9.22 0 00-2.52-.69L110.45.7C93.81-1.55 86.64 1.84 37 7.84a9 9 0 00-2.42.67z'
			/>
			{/*</G>*/}
			{/*</G>*/}
		</Svg>
	);
}
