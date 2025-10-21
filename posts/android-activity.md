---
title: Android Activity
description: In-depth research on android activity.
date: 2025-04-28
tags:
  - android
  - android-security
---

# Android Activity

## Difinition
  An Activity is fundamental concept that provides a screen with which users can interact to do something, such as dial a phone number, or take a photo etc. It acts as the entry point for user interaction within an application. The only required attribute for activity element is ```android:name```  which specifies the class name of the activity.

  ``` android:exported``` : This  This boolean attribute indicates whether the Activity can be launched by components from other application. 

  - If ```false```, only components within the same application or application with the same user ID can be launched. 
  - If ```true```, any app can access the activity and launch it by its exact class name. <br>
  <br>
  > [!NOTE]
    > **<u>Default Value Logic</u>**\
      - *If the component has intent filters: The default value is ```true```*<br>
      - *If the component has no intent filters: The default value is ```false```*<br>
      <br>
    > **<u>For Android 12(API 31) And Higher:</u>**<br>
      - For apps targeting Android 12(API 31) and higher, the default logic no longer applies when intent filter is present. The system now requires to explicitly declare the ```android:exported``` attribute.<br> 

## Android Activity Vulnerability Types
#### Improper ``` android:exported``` usage:
- An Activity with ```android:exported="true"`` but no permission requirement can be launched by any application, potentially exposing sensitive functionality or data. 
- 