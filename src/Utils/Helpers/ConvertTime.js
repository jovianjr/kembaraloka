import moment from 'moment-timezone';
import idLocale from 'moment/locale/id';

export default function convertTime(time, format) {
	moment.updateLocale('id', idLocale);
	return moment
		.tz(time ?? Date.now(), 'Asia/Jakarta')
		.format(format ?? 'DD/MM/YYYY');
}
