import { EntityMetadataMap } from 'ngrx-data';
import { EntityNames } from './constants/entity.constants';

const entityMetadata: EntityMetadataMap = {
  [EntityNames.tutorial]: {},
};

const pluralNames = { [EntityNames.tutorial]: EntityNames.tutorial };

export const entityConfig = {
  entityMetadata,
  pluralNames
};


