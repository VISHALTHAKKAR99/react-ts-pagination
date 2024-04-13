import { MouseEventHandler } from "react";

export type ButtonProps = {
	label?: string ;
	className?: string;
	type?: 'submit' | 'button';
	primary?: boolean;
	secondary?: boolean;
	warning?: boolean;
	disabled?: boolean;
	onClick?: any;
 	data?: any;
	id?: string;
	spanClassName?: string;
	title?: string;
	children?: ReactNode;
	icon?: ReactElement;
};
export type OptionsPropsForButton = {
	route?: string | undefined;
	data?: CommonDataArrOfModules;

};
