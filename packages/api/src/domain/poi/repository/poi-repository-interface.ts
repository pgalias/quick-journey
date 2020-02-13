import { Location } from '../../core/model/location';
import { PlaceType } from '../../core/model/place-type.enum';
import { Poi } from '../model/poi';

export interface PoiRepositoryInterface {
  /**
   * Returns nearest PoIs in range using types
   *
   * @param {Location} location
   * @param {PlaceType} types
   * @param {number} range
   * @returns Poi[]
   * @throws CannotFindPoi
   */
  findPoisInRange: (
    location: Location,
    types: PlaceType[],
    range: number,
  ) => Poi[];

  /**
   * Returns first nearest PoI in range using types
   *
   * @param {Location} location
   * @param {PlaceType} types
   * @param {number} range
   * @returns Poi
   * @throws CannotFindPoi
   */
  findOneNearestPoi: (
    location: Location,
    types: PlaceType[],
    range: number,
  ) => Poi;
}
