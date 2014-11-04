hang-out
========

Hang-Out PoC for Mobile App Contest



Flow Hang-Out Mobile App
------------------------
**Define activity payload:** 

+ Initiator 
 + Name
 + Email
 + ProfileUrl
+ Title 
+ Description 
+ StartsOn 
+ EndsOn 
+ Place 
 + Name 
 + Address 
 + Details 
 + WebsiteUrl 
 + Gps 
     + Lat 
     + Lng 

**INITIATE AN ACTIVITY**

1. Some guy defines an activity and sends it to the Cloud Gateway; 
2. The Cloud Gateway stores it as a "Pending" activity until: 
  1. The Initiator closes it; 
  2. The StartsOn date is missed;

**JOIN AN ACTIVITY**

1. People can always view the list of "Pending activities" to which they can subscribe;
2. When some guy subscribes to a pending activity, he is attached to the activity payload as a "pending participant";
3. The activity initiator MUST confirm the participants queued in the "pending participants" list;

**STATUS VIEWS**

1. As an "Activity Initiator" I must be able to check/act **_for each_** of my initiated activities:
 1. The list of pending participants;
 2. Accept/Reject any pending participant;
 3. Close the activity because:
      1. It's **_going to happen_**, everything's cool;
      2. Is **_canceled_**, specifying a reason for being so;
2. As a person I must be able to check/act **_for each_** of my activities on which I'm queued:
 1. Current status (still going to happen, or is cancelled)
 2. Bail out, specifying a reason for doing so;