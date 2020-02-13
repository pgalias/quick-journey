import { Location } from '../../core/model/location';
import { PlaceType } from '../../core/model/place-type.enum';

export class Poi {
  constructor(
    public readonly name: string,
    public readonly location: Location,
    public readonly types: PlaceType[]
  ) {}
}
