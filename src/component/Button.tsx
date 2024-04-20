import React from 'react';
// import { ButtonProps, OptionsPropsForButton } from '../types/button';

const Button = ({ id, label, onClick, type = 'button', className, children, disabled = false, data, icon, spanClassName = 'svg-icon inline-block h-3.5 w-3.5', title }: any) => {
	const buttonClickFun = () => {
		const options: any = {    
			data: data,
			
		};
		if (onClick) {
			onClick(options);
		}
	};
	return (
		<button title={title} id={id} className={`btn ${className}`} type={type} onClick={buttonClickFun} disabled={disabled}>
			{children}
			{label}
			{icon && <span className={spanClassName}>{icon}</span>}
		</button>
	);
};

export default React.memo(Button);
