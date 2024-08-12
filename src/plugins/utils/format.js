/**
 * 数字格式化千分位
 */
export const formatThousand = (value) => {
	if (!value) return 0;
	value = Number(value);
	return (+value || 0).toString().replace(/^-?\d+/g, (m) => m.replace(/(?=(?!\b)(\d{3})+$)/g, ","));
};

export const formatSeconds = (seconds) => {
	// const hours = Math.floor(seconds / 3600);
	const minutes = Math.floor((seconds % 3600) / 60);
	const secondsRemaining = seconds % 60;

	// return `${padZero(hours)}:${padZero(minutes)}:${padZero(secondsRemaining)}`;
	return `${padZero(minutes)} : ${padZero(secondsRemaining)}`;
};
function padZero(value) {
	return (value < 10 ? "0" : "") + value;
}
