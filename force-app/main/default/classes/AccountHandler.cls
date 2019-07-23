public with sharing class AccountHandler {
    @AuraEnabled(cacheable=true)
    public static List<Contact> getContactList(String searchKey) {
         String key = '%' + searchKey + '%';
        return [SELECT Id, LastName, Title, Phone, Email  FROM Contact Where LastName LIKE :key LIMIT 10];
    }
}