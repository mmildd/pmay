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
    EntToolEdges,
    EntToolEdgesFromJSON,
    EntToolEdgesFromJSONTyped,
    EntToolEdgesToJSON,
} from './';

/**
 * 
 * @export
 * @interface EntTool
 */
export interface EntTool {
    /**
     * ToolName holds the value of the "Tool_Name" field.
     * @type {string}
     * @memberof EntTool
     */
    toolName?: string;
    /**
     * 
     * @type {EntToolEdges}
     * @memberof EntTool
     */
    edges?: EntToolEdges;
    /**
     * ID of the ent.
     * @type {number}
     * @memberof EntTool
     */
    id?: number;
}

export function EntToolFromJSON(json: any): EntTool {
    return EntToolFromJSONTyped(json, false);
}

export function EntToolFromJSONTyped(json: any, ignoreDiscriminator: boolean): EntTool {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'toolName': !exists(json, 'Tool_Name') ? undefined : json['Tool_Name'],
        'edges': !exists(json, 'edges') ? undefined : EntToolEdgesFromJSON(json['edges']),
        'id': !exists(json, 'id') ? undefined : json['id'],
    };
}

export function EntToolToJSON(value?: EntTool | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'Tool_Name': value.toolName,
        'edges': EntToolEdgesToJSON(value.edges),
        'id': value.id,
    };
}


