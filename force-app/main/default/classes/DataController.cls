/**
 * @File Name          : DataController.cls
 * @Description        : 
 * @Author             : ChangeMeIn@UserSettingsUnder.SFDoc
 * @Group              : 
 * @Last Modified By   : ChangeMeIn@UserSettingsUnder.SFDoc
 * @Last Modified On   : 29/7/2019, 12:21:03 PM
 * @Modification Log   : 
 *==============================================================================
 * Ver         Date                     Author      		      Modification
 *==============================================================================
 * 1.0    29/7/2019, 12:08:35 PM   ChangeMeIn@UserSettingsUnder.SFDoc     Initial Version
**/
public with sharing class DataController {
    public DataController() {

    }
    @AuraEnabled(cacheable = true)
    public static List<Contact> getAccounts(){
        return [SELECT Id,LastName,FirstName,Email From Contact limit 10];
    }
}
