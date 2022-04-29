/**
 * Преобразует массив с именами классов в строку.
 *
 * @example <caption>Допускается использовать объект
 * для указания имени класса</caption>
 * `{"class_name": true}`
 * @param {String[] | Object[]} classNames Список классов
 * @returns Строка со списком классов через пробел
 */
export default function joinClassNames(classNames = []) {
  return (classNames || [])
    .reduce((accArray, className) => {
      if (typeof className === 'object') {
        const translateObject = Object.entries(className).reduce(
          (prev, [key, value]) => {
            if (value === false) return [...prev];
            return [...prev, key];
          },
          [],
        );
        return accArray.concat(translateObject);
      }

      return [...accArray, className];
    }, [])
    .filter(Boolean)
    .join(' ');
}
