/**
 * Appcelerator Titanium Mobile
 * Copyright (c) 2018-present by SampleLocationBG, Inc. All Rights Reserved.
 * Licensed under the terms of the Apache Public License
 * Please see the LICENSE included with this distribution for details.
 * 
 * WARNING: This is generated code. Modify at your own risk and without support.
 */

#import <TitaniumKit/TiApp.h>

@interface TiApp (Addons)

#ifdef USE_TI_FETCH
- (void)application:(UIApplication *)application performFetchWithCompletionHandler:(void (^)(UIBackgroundFetchResult))completionHandler;
#endif

#ifdef USE_TI_SILENTPUSH
- (void)application:(UIApplication *)application didReceiveRemoteNotification:(NSDictionary *)userInfo fetchCompletionHandler:(void (^)(UIBackgroundFetchResult result))completionHandler;
#endif

#pragma mark Handoff Delegates

#ifdef USE_TI_APPIOS
- (BOOL)application:(UIApplication *)application continueUserActivity:(NSUserActivity *)userActivity restorationHandler:(void (^)(NSArray *_Nullable))restorationHandler;
#endif

@end
