/*18:00 -> ["18":"00"] -> [18:00] <- Metodo utilizado para converter string em numero retornando os valores de hora e
 minuto */

export function convertHourStringToMinutes(hourString: string) {
  const [hours, minutes] = hourString.split(':').map(Number);

  const minutesAmount = hours * 60 + minutes;

  return minutesAmount;
}