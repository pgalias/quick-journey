import { PlaceType } from '../../core/model/place-type.enum';

export class CannotFindPoi extends Error {
  static withGivenTypes(types: PlaceType[]): CannotFindPoi {
    const typesString = types.join(', ').replace(/(, )$/, '');

    return new CannotFindPoi(`PoI: Cannot find any PoI with given types: ${typesString}`);
  }
}
