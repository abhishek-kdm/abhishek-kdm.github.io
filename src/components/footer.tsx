import * as React from 'react';

interface IFooterProps {};

export default (props: IFooterProps) => {
	let footerInlineStyle = {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	};
	
	return (
		<footer>
			<div className='container'>


				<div style={ footerInlineStyle }>
					<small>{'Built with'}</small>&nbsp;
					<i id='heart' className='fa fa-heart text-danger'></i>&nbsp;
					<small>{'& '}</small>&nbsp;
					<div className='react-logo-container'>
						<div className='react-logo'>
							<div className='nuclei'></div>
						</div>
					</div>
				</div>

			</div>
		</footer>
	)
}