import { Body, Controller, HttpStatus, Post, Res } from '@nestjs/common';

import { ManholeCoverCreateCommand } from '../../application/commands/manhole-cover-create.command';
import CreateManholeCoverUseCase from '../../application/create-manhole-cover.usecase';
import ManholeCover from '../../domain/manhole-cover';

@Controller('manhole_cover')
export default class ManholeCoverController {
  constructor(
    private readonly createManholeCoverUseCase: CreateManholeCoverUseCase,
  ) {}

  @Post('/build')
  public async createManholeCover(
    @Res() request,
    @Body() manholeCover: ManholeCoverCreateCommand,
  ): Promise<ManholeCover> {
    // añadido mio, eso era any
    const manholeCoverCreated = await this.createManholeCoverUseCase.handler(
      manholeCover,
    );
    return request.status(HttpStatus.CREATED).json(manholeCoverCreated);
  }
}
