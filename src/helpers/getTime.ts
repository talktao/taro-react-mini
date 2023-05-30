
import DateTimeFormat from 'format-date-time';

export default function getTime(str) {
    return new Date(str.replaceAll('-', '/')).getTime();
}

export const defaultFormatter = new DateTimeFormat();

export const dateFormat_yy_mm_dd_cn = (str) => {
    return defaultFormatter.parse(getTime(str), 'YYYY.MM.DD');
}

