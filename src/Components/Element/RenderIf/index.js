/**
 * @typedef {Object} RenderIfProps
 * @property {React.ReactNode} [children]
 * @property {boolean} [when] - kondisi render
 */

/**
 * @param {RenderIfProps} props
 */
export default function RenderIf({ children, when }) {
	return <>{when ? children : null}</>;
}
