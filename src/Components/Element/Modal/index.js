import clsx from 'clsx';
import ReactModal from 'react-modal';
import { IoClose } from 'react-icons/io5';

import Button from 'Components/Element/Button';
import RenderIf from 'Components/Element/RenderIf';

/**
 * @typedef {Object} ModalProps
 * @property {Boolean} [isOpen]
 * @property {string} [className]
 * @property {string} [overlayClassName]
 * @property {Boolean} [closeButton]
 * @property {string} [closeButtonClassName]
 * @property {('inside'| 'outside'): string} [closeButtonPosition] - posisi button close
 * @property {Boolean} [header]
 * @property {Boolean} [footer] - opsi menampilkan footer
 * @property {string} [headerText]
 * @property {string} [bodyClassName]
 * @property {string} [cancelButtonText]
 * @property {string} [confirmButtonText]
 * @property {Boolean} [closeOnEsc]
 * @property {Boolean} [closeOnOverlay]
 * @property {React.ReactNode} [children]
 * @property {Function} [confirmButton] - button confirm di footer
 * @property {Function} [onClose]
 * @property {Boolean} [transition]
 */

/**
 * @param {ModalProps} props
 */
export default function Modal({
	isOpen = false,
	className = '',
	overlayClassName = '',
	closeButton = true,
	closeButtonClassName = '',
	closeButtonPosition = 'inside',
	closeButtonOnClick = () => {},
	header = true,
	footer = true,
	headerText = 'Title',
	bodyClassName = '',
	cancelButtonText = 'Cancel',
	confirmButtonText = 'OK',
	transitionBase = null,
	transitionOpen = null,
	closeOnEsc = true,
	closeOnOverlay = true,
	children = null,
	confirmButton = () => {},
	onClose = () => {},
	transition = false
}) {
	return (
		<ReactModal
			ariaHideApp={false}
			isOpen={isOpen}
			overlayClassName={{
				base: clsx(
					'fixed inset-0 z-[1000] bg-shades-100/30 transition-all ease-in-out opacity-0',
					transition && 'duration-1000',
					overlayClassName
				),
				afterOpen: 'opacity-100',
				beforeClose: '!opacity-0'
			}}
			className={{
				base: clsx(
					'absolute flex flex-col inset-5 inset-y-20 lg:inset-20 bg-shades-0 ring-0 outline-0 transition-all ease-in-out',
					transition && 'duration-1500',
					transitionBase,
					className
				),
				afterOpen: isOpen ? transitionOpen : ''
			}}
			contentLabel={headerText}
			onRequestClose={onClose}
			shouldCloseOnEsc={closeOnEsc}
			shouldCloseOnOverlayClick={closeOnOverlay}
			closeTimeoutMS={transition ? 1500 : 50}
		>
			<RenderIf
				when={(!header && closeButton) || closeButtonPosition === 'outside'}
			>
				<ButtonClose
					className={clsx(
						closeButtonPosition === 'inside' && 'absolute',
						closeButtonPosition === 'outside' && 'fixed',
						'top-4 right-4',
						closeButtonClassName
					)}
					onClick={() => {
						closeButtonOnClick();
						onClose();
					}}
				/>
			</RenderIf>

			<RenderIf when={header}>
				<div className="h-16 px-4 flex items-center justify-between border-b border-neutral-300">
					<p className="font-bold">{headerText}</p>
					<RenderIf when={closeButton && closeButtonPosition === 'inside'}>
						<ButtonClose
							onClick={closeButtonOnClick ?? onClose}
							className={closeButtonClassName}
						/>
					</RenderIf>
				</div>
			</RenderIf>

			<div className={clsx('h-full flex-grow', bodyClassName)}>{children}</div>

			<RenderIf when={footer}>
				<div className="flex-1 h-16 w-full py-2 px-4 flex justify-end border-t border-neutral-300">
					<div className="h-full flex items-center gap-2">
						<Button
							type="secondary"
							text={cancelButtonText}
							onClick={onClose}
						/>
						<Button
							text={confirmButtonText}
							onClick={async () => {
								await confirmButton();
								onClose();
							}}
						/>
					</div>
				</div>
			</RenderIf>
		</ReactModal>
	);
}

const ButtonClose = ({ className = '', onClick = () => {} }) => {
	return (
		<span onClick={onClick}>
			<IoClose
				className={clsx(
					'h-8 w-8 text-neutral-800 p-1 bg-neutral-300 rounded-full hover:bg-neutral-400 hover:cursor-pointer',
					'hover:cursor-pointer',
					className
				)}
			/>
		</span>
	);
};
