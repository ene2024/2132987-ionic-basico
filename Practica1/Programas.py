sue = float( input("Ingresa tu sueldo: ") )
cate = int( input ("Ingresa la categoria: ") )
he = int( input("Ingrese su cantidad de horas extras: ") )

if cate == 1:
	phe = 30
elif cate == 2:
	phe = 38
elif cate == 3:
	phe = 50
elif cate == 4:
	phe = 70
else:
	phe = 0

if he>30:
	nsue = sue + (30*phe)
else:
	nsue = sue + (he*phe)

print("El sueldo mas las horas extra es: ", nsue)