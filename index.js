import * as GPIOD from './libgpiod/gpiod'
import * as os from 'os'

const chip = GPIOD.gpiodChipOpenByName('pio')
const line = GPIOD.gpiodChipGetLine(chip, 238)
GPIOD.gpiodLineRequestOutput(line, 'LED', 1)
GPIOD.gpiodLineSetValue(line, 0)
os.setTimeout(() => {
  GPIOD.gpiodLineSetValue(line, 1)
  GPIOD.gpiodChipClose(chip)
}, 5000)
