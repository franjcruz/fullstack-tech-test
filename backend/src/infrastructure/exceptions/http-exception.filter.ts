import { ArgumentsHost, Catch, ExceptionFilter, Logger } from '@nestjs/common';
import { Request, Response } from 'express';
import BadMaterialManholeCoverGivenException from 'src/domain/exceptions/bad-material-manhole-cover-given.exception';
import RadioManholeCoverLessTenException from 'src/domain/exceptions/radio-manhole-cover-less-ten.exception';

@Catch()
export default class HttpExceptionFilter implements ExceptionFilter<Error> {
  catch(exception: Error, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    const { message, status } = this.isBusinessException(exception);
    response.status(status).json({
      message,
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: request.url,
    });
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public isBusinessException(exception: Error): any {
    if (
      exception instanceof RadioManholeCoverLessTenException ||
      exception instanceof BadMaterialManholeCoverGivenException
    ) {
      return {
        message: exception.message,
        status: 400,
      };
    }
    Logger.log(exception.stack);
    return {
      message: 'unknown',
      status: 500,
    };
  }
}
