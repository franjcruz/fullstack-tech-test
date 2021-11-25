import { ManholeCover } from '../../model/manholeCover';
import http from '../../utils/interceptor-axios';
import { CreateManholeCoverData } from './types';

export const createManholeCover = (
  data: CreateManholeCoverData
): Promise<ManholeCover> =>
  http.post('/manhole_cover/build', {
    ...data,
    decoration: data.decoration === 'true' ? true : false,
  })
