import 'dayjs/locale/ru';
import dayjs from "dayjs";

export const DATE_FORMATS = {
    NO_YEAR: 'D MMM',
    WITH_YEAR: 'D MMM YYYY',
    NO_YEAR_TIME: 'D MMM в H:mm',
    WITH_YEAR_TIME: 'D MMM YYYY в H:mm',
    TIME: 'H:mm',
    SERVER_FORMAT: 'YYYY-MM-DD'
};

dayjs.locale('ru');

export const formatDate = (date, format = DATE_FORMATS.NO_YEAR_TIME) => dayjs(Number(date)).format(format);
const reformatDate = (
    date,
    sourceFormat = DATE_FORMATS.SERVER_FORMAT,
    format = DATE_FORMATS.NO_YEAR,
) => dayjs(date).format(format);

export const reformatDateAndTime = (date, time) => (
    `${reformatDate(date)} в ${time}`
);
