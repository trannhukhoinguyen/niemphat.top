import _ from 'lodash';
import dayjs from 'dayjs';
export function formatPrice(value, digitFixed = 2) {
  let val = (value / 1).toFixed(digitFixed).replace('.', ',');
  return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}
export function formatPriceEn(value, digitFixed = 0) {
  let val = (value / 1).toFixed(digitFixed).replace(',', '.');
  return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
export function convertStringCamelCase2SnakeCase(str) {
  return str.replace(/[A-Z]/g, (m) => '_' + m.toLowerCase());
}

export function convertString2GqlFormat(str, extras = [], whereForType = {}) {
  if (str.length) {
    let arrSplitByDot = str.split('.');
    if (arrSplitByDot.length == 1) {
      let ret = `${arrSplitByDot[0]} `;
      for (let i = 0; i < extras.length; i++) {
        ret += extras[i] + ' ';
      }
      return ret;
    } else if (arrSplitByDot.length == 2) {
      let str = arrSplitByDot[0];
      if (Object.entries(whereForType).flat().includes(arrSplitByDot[0])) {
        str += ` (first: 1000000, where: $where${_.upperFirst(str)})`;
      }
      let ret = `${str} \{\n ${arrSplitByDot[1]} `;
      for (let i = 0; i < extras.length; i++) {
        ret += extras[i] + ' ';
      }
      ret += '}';
      return ret;
    } else if (arrSplitByDot.length == 3) {
      let str = arrSplitByDot[0];
      if (Object.entries(whereForType).flat().includes(arrSplitByDot[0])) {
        str += ` (first: 1000000, where: $where${_.upperFirst(str)})`;
      }
      let ret = `${str} \{\n ${arrSplitByDot[1]} \{\n ${arrSplitByDot[2]} `;
      for (let i = 0; i < extras.length; i++) {
        ret += extras[i] + ' ';
      }
      ret += '}';
      ret += '}';
      return ret;
    } else if (arrSplitByDot.length == 4) {
      let str = arrSplitByDot[0];
      if (Object.entries(whereForType).flat().includes(arrSplitByDot[0])) {
        str += ` (first: 1000000, where: $where${_.upperFirst(str)})`;
      }
      let ret = `${str} \{\n ${arrSplitByDot[1]} \{\n ${arrSplitByDot[2]} \{\n ${arrSplitByDot[3]} `;
      for (let i = 0; i < extras.length; i++) {
        ret += extras[i] + ' ';
      }
      ret += '}';
      ret += '}';
      ret += '}';
      return ret;
    }
  }

  return str;
}

export function routerPushObject(path, type, userId, timeTitle, timeStart, timeEnd) {
  let objectPushByRouter = {
    path: path,
    query: {
      type: type,
      user_id: userId,
      time_title: timeTitle,
      time_start: dayjs(timeStart).format('YYYY-MM-DD'),
      time_end: dayjs(timeEnd).format('YYYY-MM-DD'),
    }
  };
  Object.entries(objectPushByRouter.query)?.map(entry => {
    if(['', undefined, null].includes(entry[1])) {
      delete objectPushByRouter.query[entry[0]]
    }
  });
  return objectPushByRouter
}

export function convertBytes(bytes, decimals = 2) {
  if (!+bytes) return '0 Bytes'

  const k = 1024
  const dm = decimals < 0 ? 0 : decimals
  const sizes = ['Bytes', 'KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB']
  // Use KiB instead of Kb because:
  // 1 KiB (kibibyte) = 1024 bytes,...
  // 1 Kb (kilobyte) = 1000 bytes,...

  const i = Math.floor(Math.log(bytes) / Math.log(k))

  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`
};
export function stringToHex(string) {
  let hash = 0;
  if (string?.length === 0) return hash;
  for (let i = 0; i < string?.length; i++) {
    hash = string?.charCodeAt(i) + ((hash << 5) - hash);
    hash = hash & hash;
  }
  let color = '#';
  for (let i = 0; i < 3; i++) {
    let value = (hash >> (i * 8)) & 255;
    color += ('00' + value.toString(16)).slice(-2);
  }
  return color;
};
