hang-out
========

Hang-Out PoC for Mobile App Contest



Flow Hang-Out Mobile App
------------------------
**Define activity payload:** 

+Initiator 
 +Name
 +Email
 +ProfileUrl
   +Title 
   +Description 
   +StartsOn 
   +EndsOn 
   +Place 
     +Name 
     +Address 
     +Details 
     +WebsiteUrl 
     +Gps 
        +Lat 
        +Lng 


**INITIATE AN ACTIVITY**
1. Some guy defines an activity and sends it to the Cloud Gateway; 
2. The Cloud Gateway stores it as a "Pending" activity until: 
  1. The Initiator closes it; 
  2. The StartsOn date is missed;
