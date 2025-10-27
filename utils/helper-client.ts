import { parseISO, format } from 'date-fns';

/**

 * @param isoString 
 * @returns 
 */
export function formatDate24h(isoString: string): string {
  try {
    const date = new Date(isoString); 
    const hours = date.getUTCHours().toString().padStart(2, '0');
    const minutes = date.getUTCMinutes().toString().padStart(2, '0');
    const day = date.getUTCDate().toString().padStart(2, '0');
    const month = (date.getUTCMonth() + 1).toString().padStart(2, '0');
    return `${day}/${month} (${hours}:${minutes}) `;
  } catch (error) {
    console.error('formatDate24h error:', error);
    return '';
  }
}