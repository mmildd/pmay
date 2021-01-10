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
    EntExaminationroomEdges,
    EntExaminationroomEdgesFromJSON,
    EntExaminationroomEdgesFromJSONTyped,
    EntExaminationroomEdgesToJSON,
} from './';

/**
 * 
 * @export
 * @interface EntExaminationroom
 */
export interface EntExaminationroom {
    /**
     * 
     * @type {EntExaminationroomEdges}
     * @memberof EntExaminationroom
     */
    edges?: EntExaminationroomEdges;
    /**
     * ExaminationroomName holds the value of the "examinationroom_name" field.
     * @type {string}
     * @memberof EntExaminationroom
     */
    examinationroomName?: string;
    /**
     * ID of the ent.
     * @type {number}
     * @memberof EntExaminationroom
     */
    id?: number;
}

export function EntExaminationroomFromJSON(json: any): EntExaminationroom {
    return EntExaminationroomFromJSONTyped(json, false);
}

export function EntExaminationroomFromJSONTyped(json: any, ignoreDiscriminator: boolean): EntExaminationroom {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'edges': !exists(json, 'edges') ? undefined : EntExaminationroomEdgesFromJSON(json['edges']),
        'examinationroomName': !exists(json, 'examinationroom_name') ? undefined : json['examinationroom_name'],
        'id': !exists(json, 'id') ? undefined : json['id'],
    };
}

export function EntExaminationroomToJSON(value?: EntExaminationroom | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'edges': EntExaminationroomEdgesToJSON(value.edges),
        'examinationroom_name': value.examinationroomName,
        'id': value.id,
    };
}


