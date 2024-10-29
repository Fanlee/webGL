/**
 *  @description:
 *  @Author:  lihuan
 *  @datetime: 2024-10-23 21:30
 */
export function initShader(gl, VERTEX_SHADER_SOURCE, FRAGMENT_SHADER_SOURCE) {
	// 创建着色器程序
	const vertexShader = gl.createShader(gl.VERTEX_SHADER)
	const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER)

	// 关联着色器源码
	gl.shaderSource(vertexShader, VERTEX_SHADER_SOURCE)
	gl.shaderSource(fragmentShader, FRAGMENT_SHADER_SOURCE)

	// 编译着色器
	gl.compileShader(vertexShader)
	gl.compileShader(fragmentShader)

	// 创建程序对象
	const program = gl.createProgram()
	gl.attachShader(program, vertexShader)
	gl.attachShader(program, fragmentShader)

	gl.linkProgram(program)
	gl.useProgram(program)

	return program
}
