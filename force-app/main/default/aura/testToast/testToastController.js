({
	onLoad : function(component, event, helper) {

       
       // var today = new Date();
       // var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
   
        var dateUTC = new Date(component.get("v.accountRecord.LastModifiedDate"));
        alert(dateUTC.toDateString());
        //var dateUTC = dateUTC.getHours();
        //var dateIST = new Date(dateUTC);
       //date shifting for IST timezone (+5 hours and 30 minutes)
       // dateIST.setHours(dateIST.getHours() + 5); 
       // dateIST.setMinutes(dateIST.getMinutes() + 30);
        alert(dateUTC);
        var hello =component.get("v.recordId");
        var toastEvent = $A.get("e.force:showToast");
        toastEvent.setParams({
        "title": "Success!",
        "message": "The record has been updated successfully."
    });
    toastEvent.fire();
	}
})