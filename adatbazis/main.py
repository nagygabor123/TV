import sqlite3 as sqlite
con = sqlite.connect('szemely.db')

########################################################################################################################

#Szótárba rendezés
szemelyek = []
with con:
  cur = con.cursor()
  cur.execute('SELECT * FROM szemely')
  for person in cur.fetchall():
    id,csaladnev, keresztnev,szuletes,szulhey,foglalkozas = person
    szemelyek.append({ 'id' : id,'csaladnev' : csaladnev,'keresztnev' : keresztnev,'szuletes' : szuletes,'szulhey' : szulhey,'foglalkozas' : foglalkozas})


hazassagok = []
with con:
  cur = con.cursor()
  cur.execute('SELECT * FROM hazassag')
  for hazasok in cur.fetchall():
    id,fej,feleseg,eskuvoido,eskuvohely = hazasok
    hazassagok.append({'id' : id,'fej' : fej,'feleseg' : feleseg,'eskuvoido' : eskuvoido,'eskuvohely' : eskuvohely})


szulok =[]
with con:
  cur = con.cursor()
  cur.execute('SELECT * FROM szulo')
  for szulokk in cur.fetchall():
    id,elsogyerek,masodikgyerek,apa,anya = szulokk
    szulok.append({'id' : id,'elsogyerek' : elsogyerek,'masodikgyerek' : masodikgyerek,'apa' : apa,'anya' : anya})

########################################################################################################################

print(hazassagok)
print(szemelyek)
print(szulok)