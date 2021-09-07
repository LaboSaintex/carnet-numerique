# -*- coding: utf-8 -*-
import os
import datetime

print("""
 ██████╗██████╗ ███████╗ █████╗ ████████╗██╗ ██████╗ ███╗   ██╗    ██████╗ ███████╗███████╗     █████╗ ██╗   ██╗████████╗███████╗██╗   ██╗██████╗ ███████╗
██╔════╝██╔══██╗██╔════╝██╔══██╗╚══██╔══╝██║██╔═══██╗████╗  ██║    ██╔══██╗██╔════╝██╔════╝    ██╔══██╗██║   ██║╚══██╔══╝██╔════╝██║   ██║██╔══██╗██╔════╝
██║     ██████╔╝█████╗  ███████║   ██║   ██║██║   ██║██╔██╗ ██║    ██║  ██║█████╗  ███████╗    ███████║██║   ██║   ██║   █████╗  ██║   ██║██████╔╝███████╗
██║     ██╔══██╗██╔══╝  ██╔══██║   ██║   ██║██║   ██║██║╚██╗██║    ██║  ██║██╔══╝  ╚════██║    ██╔══██║██║   ██║   ██║   ██╔══╝  ██║   ██║██╔══██╗╚════██║
╚██████╗██║  ██║███████╗██║  ██║   ██║   ██║╚██████╔╝██║ ╚████║    ██████╔╝███████╗███████║    ██║  ██║╚██████╔╝   ██║   ███████╗╚██████╔╝██║  ██║███████║
 ╚═════╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝   ╚═╝   ╚═╝ ╚═════╝ ╚═╝  ╚═══╝    ╚═════╝ ╚══════╝╚══════╝    ╚═╝  ╚═╝ ╚═════╝    ╚═╝   ╚══════╝ ╚═════╝ ╚═╝  ╚═╝╚══════╝
                                                                                                                                                          """)

add = ""
while(add.upper() != "N"):
    add = raw_input("Voulez vous ajouter une personne Y/n : ")
    if(add == ""):
        add = "Y"
    if(add.upper() == "Y"):
        nom = raw_input("Veuillez entrer le prenom et le nom separe d'un seul espace : ")

        birthDate = ""
        isValid = False
        while(birthDate == "" or not(isValid)):
            birthDate = raw_input("Veuillez entrer la date de naissance ecrite dans ce format DD/MM/YYYY : ")
            if(len(birthDate) == 10 and birthDate[2] == "/" and birthDate[5] == "/"):
                try:
                    datetime.date(int(birthDate[6:]), int(birthDate[3:5]), int(birthDate[0:2]))
                    isValid = True
                except ValueError:
                    print("La date donne n'existe pas verifiez vos le jour le mois ou l'annee")
            else:
                print("Le format de la date n'est pas valide et ne respecte pas le format demandee recommencez")

        folderName = nom.replace(" ", "-")

        try:
            i = 1
            while(os.path.exists(folderName)):
                folderName += "-" + str(i)

            os.mkdir(folderName)
        except OSError:
            print("Creation du dossier a echoue ", folderName)
            break
        else:
            print("Ajout du dossier ", folderName)

        metaFile = open(folderName + "/meta.txt", "w")
        metaFile.write("name: " + nom + "\n\n----\n\nbirth_date: " 
                    + datetime.datetime.strptime(birthDate, "%d/%m/%Y").strftime("%Y-%m-%d") + "\n\n----")
        metaFile.close()

