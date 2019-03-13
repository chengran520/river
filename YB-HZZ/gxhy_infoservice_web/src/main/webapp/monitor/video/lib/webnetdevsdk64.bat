@echo off
cd /d "%~dp0"
regsvr32 /u  npPluginSDK.dll
regsvr32  npPluginSDK.dll

reg add "HKEY_LOCAL_MACHINE\Software\Mozillaplugins\@surveillance.com/npPluginSDK x64"  /f
reg add "HKEY_LOCAL_MACHINE\Software\Mozillaplugins\@surveillance.com/npPluginSDK x64" /v Path /t REG_SZ /d "%~dp0npPluginSDK.dll" /f
reg add "HKEY_LOCAL_MACHINE\Software\Mozillaplugins\@surveillance.com/npPluginSDK x64" /v Version /t REG_SZ /d "0.5.0.5" /f