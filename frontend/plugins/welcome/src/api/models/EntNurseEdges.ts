/* tslint:disable */
/* eslint-disable */
/**
 * SUT SA Example API
 * This is a sample server for SUT SE 2563
 *
 * The version of the OpenAPI document: 1.0
 * Contact: support@swagger.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    EntOperativerecord,
    EntOperativerecordFromJSON,
    EntOperativerecordFromJSONTyped,
    EntOperativerecordToJSON,
} from './';

/**
 * 
 * @export
 * @interface EntNurseEdges
 */
export interface EntNurseEdges {
    /**
     * NurseOperativerecord holds the value of the Nurse_Operativerecord edge.
     * @type {Array<EntOperativerecord>}
     * @memberof EntNurseEdges
     */
    nurseOperativerecord?: Array<EntOperativerecord>;
}

export function EntNurseEdgesFromJSON(json: any): EntNurseEdges {
    return EntNurseEdgesFromJSONTyped(json, false);
}

export function EntNurseEdgesFromJSONTyped(json: any, ignoreDiscriminator: boolean): EntNurseEdges {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'nurseOperativerecord': !exists(json, 'nurseOperativerecord') ? undefined : ((json['nurseOperativerecord'] as Array<any>).map(EntOperativerecordFromJSON)),
    };
}

export function EntNurseEdgesToJSON(value?: EntNurseEdges | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'nurseOperativerecord': value.nurseOperativerecord === undefined ? undefined : ((value.nurseOperativerecord as Array<any>).map(EntOperativerecordToJSON)),
    };
}


