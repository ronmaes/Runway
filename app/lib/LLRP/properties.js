/**
  * fill
  *
  * Given the desired length and the actual length of the string,
  * return either string filled with total - len zeroes, or empty string
  *
  * @param {number} total
  * @param {string|number} val
  *
  * @return {string}
  */
export const fill = (total: number, val: string | number) => {
  const valHexLen = (typeof val === 'number') ? val : val.length;
  return valHexLen < total ? '0'.repeat(total - valHexLen) : '';
};

/**
  * fillAndConcat
  *
  * Similar to fill except it appends the val to the end
  *
  * @param {number} total
  * @param {string} val
  *
  * @return {string}
  */
export const fillAndConcat = (total: number, val: string) => (
  val.length ? (
    `${fill(total, val.toString())}${val}`
  ) : (
    fill(total, val)
  )
);

/**
  * binToHex
  *
  * Take an array of binary numbers and converts to hex.
  * The length must be evenly divisble by 4 (4 bits = 1 hex)
  *
  * @param {Array<number>} bin
  *
  * @return {string}
  */
export const binToHex = (bin: Array<number>) => (bin.length % 4 === 0 && parseInt(bin.join(''), 2).toString(16));

// =====================
//  Defining Properties
// =====================
// Reminder: 1 octet = 4 hex digits = 8 bits

const initProp = (value: string | Array<number> | null, base: string, length: number) => {
  if (!value) return { value: '', length };
  const hexLength = length / 4;
  switch (base) {
    case 'hex':
      return {
        value: fillAndConcat(hexLength, value),
        length
      };
    case 'bin':
      return value.length % 2 === 0 && {
        value: fillAndConcat(hexLength, binToHex(value)),
        length
      };
    default:
      console.error('PropertyError: Base not set.');
      return null;
  }
};

/**
  * Reserved
  *
  * Used for any reserved bits inside of a parameter
  *
  * @param {number} length
  */
export function Reserved(length) {
  return {
    name: 'Reserved',
    ...initProp('0', 'hex', length)
  };
}

export function ROSpecCurrentState(value) {
  return {
    name: 'ROSpecCurrentState',
    ...initProp(value, 'hex', 8)
  };
}

export function ROSpecPriority(value) {
  return {
    name: 'ROSpecPriority',
    ...initProp(value, 'hex', 8)
  };
}

export function ROSpecID(value) {
  return {
    name: 'ROSpecID',
    ...initProp(value, 'hex', 32)
  };
}

export function ROSpecStartTriggerType(value) {
  return {
    name: 'ROSpecStartTriggerType',
    ...initProp(value, 'hex', 8)
  };
}

export function ROSpecStopTriggerType(value) {
  return {
    name: 'ROSpecStopTriggerType',
    ...initProp(value, 'hex', 8)
  };
}

export function DurationTriggerValue(value) {
  return {
    name: 'DurationTriggerValue',
    ...initProp(value, 'hex', 32)
  };
}

export function AntennaCount(value) {
  return {
    name: 'AntennaCount',
    ...initProp(value, 'hex', 16)
  };
}

export function AntennaID(value) {
  return {
    name: 'AntennaID',
    ...initProp(value, 'hex', 16)
  };
}

export function AISpecStopTriggerType(value) {
  return {
    name: 'AISpecStopTriggerType',
    ...initProp(value, 'hex', 8)
  };
}

export function InventoryParameterSpecID(value) {
  return {
    name: 'InventoryParameterSpecID',
    ...initProp(value, 'hex', 16)
  };
}

export function ProtocolID(value) {
  return {
    name: 'ProtocolID',
    ...initProp(value, 'hex', 8)
  };
}

export function ROReportTrigger(value) {
  return {
    name: 'ROReportTrigger',
    ...initProp(value, 'hex', 8)
  };
}

export function ROReportTriggerNValue(value) {
  return {
    name: 'ROReportTriggerNValue',
    ...initProp(value, 'hex', 16)
  };
}

export function TagReportContentSelectorValue(value) {
  return {
    name: 'TagReportContentSelectorValue',
    ...initProp(value, 'hex', 16)
  };
}

export function C1G2EPCMemorySelectorValue(value) {
  return {
    name: 'C1G2EPCMemorySelectorValue',
    ...initProp(value, 'hex', 8)
  };
}

export function GPIPortNumber(value) {
  return {
    name: 'GPIPortNumber',
    ...initProp(value, 'hex', 16)
  };
}

export function GPOPortNumber(value) {
  return {
    name: 'GPOPortNumber',
    ...initProp(value, 'hex', 16)
  };
}

export function RequestedData(value) {
  return {
    name: 'RequestedData',
    ...initProp(value, 'hex', 8)
  };
}

export function EventsAndReports(value) {
  return {
    name: 'EventsAndReports',
    ...initProp(value, 'hex', 2)
  };
}

export function VendorID(value) {
  return {
    name: 'VendorID',
    ...initProp(value, 'hex', 32)
  };
}

export function Subtype(value) {
  return {
    name: 'Subtype',
    ...initProp(value, 'hex', 32)
  };
}

export function VendorParameterValue(value) {
  return {
    name: 'VendorParameterValue',
    ...initProp(value, 'hex', 8)
  };
}
