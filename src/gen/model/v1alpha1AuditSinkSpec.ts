/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1.13.9
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { V1alpha1Policy } from './v1alpha1Policy';
import { V1alpha1Webhook } from './v1alpha1Webhook';

/**
* AuditSinkSpec holds the spec for the audit sink
*/
export class V1alpha1AuditSinkSpec {
    'policy': V1alpha1Policy;
    'webhook': V1alpha1Webhook;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "policy",
            "baseName": "policy",
            "type": "V1alpha1Policy"
        },
        {
            "name": "webhook",
            "baseName": "webhook",
            "type": "V1alpha1Webhook"
        }    ];

    static getAttributeTypeMap() {
        return V1alpha1AuditSinkSpec.attributeTypeMap;
    }
}
