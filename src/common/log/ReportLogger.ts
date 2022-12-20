import { ConsoleLogger } from '@nestjs/common';

export class ReportLogger extends ConsoleLogger {
  verbose(message: string) {
    // console.log('【Verbose】', message);
    super.verbose.apply(this, arguments);
  }

  log(message: string) {
    // console.log('【Log】', message);
    super.log.apply(this, arguments);
  }

  debug(message: string) {
    // console.log('【Debug】', message);
    super.debug.apply(this, arguments);
  }

  warn(message: string) {
    // console.log('【Warn】', message);
    super.warn.apply(this, arguments);
  }

  error(message: string) {
    // console.error('【Error】', message);
    super.error.apply(this, arguments);
  }
}
