import { IsBoolean, IsInt, IsString } from 'class-validator';

export class ManholeCoverCreateCommand {
  @IsInt()
  readonly radio: number;

  @IsString()
  readonly size: string;

  @IsString()
  readonly material: string;

  @IsBoolean()
  readonly decoration: boolean;
}
