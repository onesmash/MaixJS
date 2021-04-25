import { CFunction } from '../quickjs-ffi/quickjs-ffi.js'

const LIBGPIOD_SO = 'libgpiod.so'

const gpiod_chip_open_by_name_ffi = new CFunction(LIBGPIOD_SO, 'gpiod_chip_open_by_name', null, 'pointer', 'string')

const gpiod_chip_close_ffi = new CFunction(LIBGPIOD_SO, 'gpiod_chip_close', null, 'void', 'pointer')

const gpiod_chip_get_line_ffi = new CFunction(LIBGPIOD_SO, 'gpiod_chip_get_line', null, 'pointer', 'pointer', 'uint')

const gpiod_line_request_output_ffi = new CFunction(LIBGPIOD_SO, 'gpiod_line_request_output', null, 'int', 'pointer', 'string', 'int')

const gpiod_line_request_input_ffi = new CFunction(LIBGPIOD_SO, 'gpiod_line_request_input', null, 'int', 'pointer', 'string')

const gpiod_line_get_value_ffi = new CFunction(LIBGPIOD_SO, 'gpiod_line_get_value', null, 'int', 'pointer')

const gpiod_line_set_value_ffi = new CFunction(LIBGPIOD_SO, 'gpiod_line_set_value', null, 'int', 'pointer', 'int')

const gpiod_line_release_ffi = new CFunction(LIBGPIOD_SO, 'gpiod_line_release', null, 'void', 'pointer')

export function gpiodChipOpenByName(name) {
  return gpiod_chip_open_by_name_ffi.invoke(name)
}

export function gpiodChipClose(chip) {
  gpiod_chip_close_ffi.invoke(chip)
}

export function gpiodChipGetLine(chip, offset) {
  return gpiod_chip_get_line_ffi.invoke(chip, offset)
}

export function gpiodLineRequestOutput(line, consumer, defaultVal) {
  return gpiod_line_request_output_ffi.invoke(line, consumer, defaultVal) !== -1
}

export function gpiodLineRequestInput(line, consumer) {
  return gpiod_line_request_input_ffi.invoke(line, consumer) !== -1
}

export function gpiodLineGetValue(line) {
  return gpiod_line_get_value_ffi.invoke(line) !== -1
}

export function gpiodLineSetValue(line, value) {
  return gpiod_line_set_value_ffi.invoke(line, value) !== -1
}

export function gpiodLineRelease(line) {
  gpiod_line_release_ffi.invoke(line)
}