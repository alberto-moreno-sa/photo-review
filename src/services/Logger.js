import winston from 'winston';
import { logger as configLogger } from 'configs';

const { combine, timestamp, printf } = winston.format;
const debugFormat = printf(l => {
  return `${l.timestamp} [${l.level}]: ${l.message}`;
});

const logger = winston.createLogger({
  level: configLogger.level,
  defaultMeta: {
    service: configLogger.serviceName,
  },
  transports: [new winston.transports.Console()],
});

const formats = [
  winston.format.splat(),
  winston.format.simple(),
  winston.format.json({ space: 0 }),
];

if (configLogger.env === 'local') {
  formats.push(timestamp(), debugFormat);
}

logger.format = combine(...formats);
export const Logger = logger;
