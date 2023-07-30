import SmartDate from '../classes/smartDate';

/**
 * Returns date/year like "Oct 04" unless it's another year then "Oct 04, 2013"
 * 
 * qdat.smartDateWithYear('2020-10-04 03:49:29');
 * 
 * Oct 04
 * 
 * Oct 04, 2013
 */
export const smartDateWithYear = (dateTime: string) => {
	const smartDate = new SmartDate(dateTime);
	return smartDate.smartDateWithYear();
};