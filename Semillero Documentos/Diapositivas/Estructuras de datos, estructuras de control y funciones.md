Clase 2: Estructuras de datos, estructuras de control y funciones.
========================================================
<div align="center">
<img src="LogoUnalytics.png">
</div>
<style>
.small-code pre code {
  font-size: 1em;
}
</style>


Temas
========================================================
1. Estructuras de datos en R.
   + vectores
   + matrices y arreglos
   + listas
   + dataframe
2. Estructuras de control.
   + if
   + for
   + while
   + repeat y break
3. Funciones.


<!-- ---------------------------------------------Vectores----------------------------------------------- -->

Vectores
========================================================
class: small-code

### Crear un vector

```r
vector_numeros <- c(1, 5, 84, 9, 0)   # creando vector de números
vector_numeros
```

```
[1]  1  5 84  9  0
```


```r
vector_caracteres <- c("a", "b", "c")  # creando vector de caracteres
vector_caracteres
```

```
[1] "a" "b" "c"
```


```r
vector_booleanos <- c(TRUE, TRUE, FALSE, FALSE, TRUE, T, T, F) # creando vector de booleanos
vector_booleanos
```

```
[1]  TRUE  TRUE FALSE FALSE  TRUE  TRUE  TRUE FALSE
```


========================================================
class: small-code

#### Otras funciones para crear vectores.


```r
vector_vacio <- vector()  # creando vector vacío.
vector_vacio 
```

```
logical(0)
```


```r
vector_secuencia <- seq(1, 5, 0.5) # seq(inicio secuencia, fin secuencia, en saltos de)
vector_secuencia
```

```
[1] 1.0 1.5 2.0 2.5 3.0 3.5 4.0 4.5 5.0
```


```r
vector_secuencia2 <- c(1:5) # otra manera de crear secuencias
vector_secuencia2
```

```
[1] 1 2 3 4 5
```


```r
vector_repetir <- rep(2, 6) # rep(número, veces)
vector_repetir
```

```
[1] 2 2 2 2 2 2
```

 

========================================================
class: small-code


```r
vector_numeros
```

```
[1]  1  5 84  9  0
```


```r
vector_caracteres
```

```
[1] "a" "b" "c"
```

#### Extracciónde elementos de un vector


```r
vector_numeros[3]  # para extraer tercer elemento del vector_numeros
```

```
[1] 84
```


```r
vector_caracteres[2]  # para extraer el segundo elemento del vector_caracteres
```

```
[1] "b"
```

=======================================================
class: small-code


```r
vector_numeros
```

```
[1]  1  5 84  9  0
```


#### Extraer una secuencia

```r
vector_numeros[1:3]  # para extraer los primeros 3 elementos del vector_numeros
```

```
[1]  1  5 84
```

#### Extraer por vector lógico

```r
vector_numeros[vector_numeros > 2]  # extraer los elementos mayores a 1 del vector_numeros
```

```
[1]  5 84  9
```

#### Extraer por comparación o diferencia


```r
vector_numeros[vector_numeros != 84]  # para extraer los elementos diferentes a 84
```

```
[1] 1 5 9 0
```


=======================================================
class: small-code

### Eliminar elementos de un vector


```r
vector_numeros
```

```
[1]  1  5 84  9  0
```

#### Eliminar

```r
vector_numeros[-3]  # para eliminar tercer elemento del vector_numeros
```

```
[1] 1 5 9 0
```


```r
vector_numeros[-c(1:3)]  # para eliminar los primeros 3 elemetos del vector_numeros
```

```
[1] 9 0
```




<!-- ---------------------------------------------Matrices y arreglos----------------------------------------------- -->

Matrices y arreglos.
========================================================
class: small-code


```r
# creando una matriz numérica
matriz <- matrix(c(1, 2, 36, 9, 5, 2), ncol = 3, byrow = TRUE)
matriz
```

```
     [,1] [,2] [,3]
[1,]    1    2   36
[2,]    9    5    2
```

#### Dimensión 

```r
dim(matriz)
```

```
[1] 2 3
```


#### Reasignando los valores para los elementos de una matriz 

```r
matriz[1, 3]  <- 0
matriz
```

```
     [,1] [,2] [,3]
[1,]    1    2    0
[2,]    9    5    2
```


=======================================================
class: small-code


```r
matriz
```

```
     [,1] [,2] [,3]
[1,]    1    2    0
[2,]    9    5    2
```

#### Extraer un elemento de una matriz 

```r
matriz[2, 1]  # matriz[fila, columna]
```

```
[1] 9
```

#### Extraer por columna

```r
matriz[, 1]  # matriz[fila, columna]
```

```
[1] 1 9
```


```r
matriz[, 1, drop=FALSE]
```

```
     [,1]
[1,]    1
[2,]    9
```


========================================================
class: small-code

```r
matriz
```

```
     [,1] [,2] [,3]
[1,]    1    2    0
[2,]    9    5    2
```
#### Extraer por fila

```r
matriz[1, ]  # matriz[fila, columna]
```

```
[1] 1 2 0
```

#### Extraer secuencias (sub matrices)

```r
matriz[1:2, 1:2]  # matriz[fila, columna]
```

```
     [,1] [,2]
[1,]    1    2
[2,]    9    5
```





========================================================
class: small-code
### Algunas Operaciones con matrices

```r
A <- matrix(c(1, 2, 3, 4), nrow = 2, byrow = TRUE)
A
```

```
     [,1] [,2]
[1,]    1    2
[2,]    3    4
```



```r
B <- matrix(c(5, 6, 7, 8), nrow = 2, byrow = TRUE)
B
```

```
     [,1] [,2]
[1,]    5    6
[2,]    7    8
```

#### Sumar y restar

```r
A + B
```

```
     [,1] [,2]
[1,]    6    8
[2,]   10   12
```


========================================================
class: small-code


```r
A
```

```
     [,1] [,2]
[1,]    1    2
[2,]    3    4
```


```r
B
```

```
     [,1] [,2]
[1,]    5    6
[2,]    7    8
```

#### Multiplicar elemento a elemento

```r
A * B
```

```
     [,1] [,2]
[1,]    5   12
[2,]   21   32
```





========================================================
class: small-code


```r
A
```

```
     [,1] [,2]
[1,]    1    2
[2,]    3    4
```


```r
B
```

```
     [,1] [,2]
[1,]    5    6
[2,]    7    8
```

#### Multiplicación Matricial *

```r
A %*% B
```

```
     [,1] [,2]
[1,]   19   22
[2,]   43   50
```


#### Traza de una matriz

```r
sum(diag(A))
```

```
[1] 5
```


Arreglos
========================================================
class: small-code
#### Un array es la generalización de una matriz de dos dimensiones al caso multidimensional.

```r
arreglo <- array(c(45, 46, 65, 55, 170, 167, 48, 49, 68, 56, 169, 165), c(2, 3, 2))
#dim=(2, 3, 4)  --> dim =(número_filas, número_columnas, número_objetos)
dimnames(arreglo)<-list(c("hombres","mujeres"),c("edad","peso","altura"), c("Medellín","Bogotá")) 
arreglo
```

```
, , Medellín

        edad peso altura
hombres   45   65    170
mujeres   46   55    167

, , Bogotá

        edad peso altura
hombres   48   68    169
mujeres   49   56    165
```

========================================================
class: small-code
#### Extraer elementos


```r
arreglo["hombres" , , ] # x[filas, columas, objeto]
```

```
       Medellín Bogotá
edad         45     48
peso         65     68
altura      170    169
```



```r
arreglo[ , ,"Medellín"] # x[filas, columas, objeto]
```

```
        edad peso altura
hombres   45   65    170
mujeres   46   55    167
```



```r
arreglo["mujeres","edad","Bogotá" ] 
```

```
[1] 49
```


<!-- ---------------------------------------------Listas----------------------------------------------- -->

Listas
========================================================
class: small-code

##### Las listas pueden contener distintos tipos de datos


```r
lista_1 <- list(1, "a", TRUE, 2.5)
```



```r
lista_2 <- list(c(1:5), c("a", "b", "c"), c(TRUE, TRUE), c(2.5, 3.2, 2.2))
lista_2
```

```
[[1]]
[1] 1 2 3 4 5

[[2]]
[1] "a" "b" "c"

[[3]]
[1] TRUE TRUE

[[4]]
[1] 2.5 3.2 2.2
```




=======================================================
class: small-code

```r
lista_2
```

```
[[1]]
[1] 1 2 3 4 5

[[2]]
[1] "a" "b" "c"

[[3]]
[1] TRUE TRUE

[[4]]
[1] 2.5 3.2 2.2
```

#### Extracción en una lista

```r
lista_2[1]  # regresa en forma de lista
```

```
[[1]]
[1] 1 2 3 4 5
```


```r
lista_2[[1]]  # regresa el vector
```

```
[1] 1 2 3 4 5
```


```r
lista_2[[4]][1]
```

```
[1] 2.5
```




<!-- ---------------------------------------------Dataframe--------------------------------------------- -->

Dataframe*
========================================================
class: small-code

```r
x <- 1:4
y <- c("a", "b", "c", "d")
marco.datos <- data.frame(x,y)
marco.datos
```

```
  x y
1 1 a
2 2 b
3 3 c
4 4 d
```

#### Extraer 

```r
marco.datos[,1] # Se extrae solo la columna 1
```

```
[1] 1 2 3 4
```

#### Extraer columna con $

```r
marco.datos$x
```

```
[1] 1 2 3 4
```




<!-- ---------------------------------------------Estructuras de control, ciclos y funciones.--------------------------------------------- -->

Estructuras de control 
========================================================
class: small-code

### Condicional if


```r
if (condicion){
  
  Instruccion_1
  Instruccion_2
  
}else {
  Instruccion_1
  Instruccion_2
}
```


#### varias condiciones  


```r
if (condicion_1){
  Instrucción_1
  Instrucción_2
}else if (condición_2) {
  Instrucción_1
  Instrucción_2
}else {
  Instrucción_1
  Instrucción_2
}
```




========================================================
class: small-code
#### Ejemplos


```r
edad <- 99
if (edad >= 80){
  print("Usted es una persona de la tercera edad")
} else {
  print("Usted es una persona joven")
}
```

```
[1] "Usted es una persona de la tercera edad"
```


```r
edad <- 1
if (edad >= 80){
  print("Usted es una persona de la tercera edad")
} else if (edad >= 12 &  edad < 80){
  print("Usted es una persona joven")
} else {
  print("Usted es un niño")
}
```

```
[1] "Usted es un niño"
```


========================================================
incremental: true

#### ¿Qué imprime? 


```r
A <- TRUE
if(A == T){
    print("Sabrina")
} else if(A == TRUE){
    print("Andrea")
} else {
    print("Esteban")
}
```

```
[1] "Sabrina"
```


=========================================================
incremental: true
### Ciclo for


```r
for (i in secuencia) {
  operación_1
  operación_2
  operación_3
}
```

#### Ejemplo

```r
vec <- vector()
for (i in 1:4) {
  vec[i] <- i
}
vec
```

```
[1] 1 2 3 4
```

=========================================================
class: small-code
#### For anidado

#### Ejemplos

```r
x <- matrix(seq(1,18,2), byrow = TRUE, ncol = 3)
x 
```

```
     [,1] [,2] [,3]
[1,]    1    3    5
[2,]    7    9   11
[3,]   13   15   17
```

```r
for (i in 1:ncol(x)){
  for (j in 1:nrow(x)){
    
    print(x[i,j])
  }
}
```

```
[1] 1
[1] 3
[1] 5
[1] 7
[1] 9
[1] 11
[1] 13
[1] 15
[1] 17
```




================================================
incremental: true

### Ciclo while


```r
while (condición) {
  operación_1
  operación_2
  operación_3
}
```

#### ¿Qué imprime?

```r
x <- 1 
while(x < 5){
  print(x)
  x <- x + 1 
}
```

```
[1] 1
[1] 2
[1] 3
[1] 4
```


=============================================

#### ¿Qué imprime?

```r
x <- 1 
while(x < 5){
  print(x)
}
```

repeat y break
========================================================


```r
repeat {
  #operaciones...
  if (condición){
    #operaciones...
  }
  else{
    break()
  }
}
```


Funciones
=========================================================

```r
nombre_función <- function(parametro1, parametro2, ...){
  procedimiento_1
  procedimiento_2
  procedimiento_3
  return(resultado)
}
```

### Ejemplos


```r
suma <- function(x, y){
  x+y
}
# llamando la función
suma(x=5, y=6)
```

```
[1] 11
```

=========================================================


```r
potencia <- function(x, y) {
   result <- x^y
   paste(x,"elevado a la potencia de", y, "es", result)
}
potencia(2,3)
```

```
[1] "2 elevado a la potencia de 3 es 8"
```


Ingresar y mostrar por consola
========================================================


```r
x <- readline("¿Cuál es su nombre?:\n")
```

```
¿Cuál es su nombre?:
```


```r
print("hola mundo")
```

```
[1] "hola mundo"
```


```r
cat("hola mundo")
```

```
hola mundo
```



Preguntas y ejercicios propuestos. 
========================================================
incremental: true


#### 1) Cómo se crea un vector vacio ?

```r
vector <- vector()
```



#### 2) Qué tipo de vector es y ? 

```r
y <- c(1, "1", 3) 
class(y)
```

```
[1] "character"
```


=========================================================
incremental: true

#### 3) por defecto como se rellena una matriz. 
##### Respuesta: Por columnas de izquierda a derecha


#### 4) Cómo prodira acceder al primer elemento del cuarto vector de la lista_2?


```r
lista_2 <- list(c(1:5), c("a", "b", "c"), c(TRUE, TRUE), c(2.5, 3.2, 2.2)) 
```

```r
lista_2[[4]][1]
```

```
[1] 2.5
```

#### 5) Cree una función que sume los n primeros números naturales, el valor de n será pedido por consola e ingresado por el usuario y el resultado sera mostrado por consola con un mensaje.


=========================================================
##### Solución ejercicio 5


```r
funcion <- function(){
  n <-  readline("ingrese el valor de n: \n")
  suma <- 0
  for (i in 1:n){
    suma <- suma + i
    }
paste("El resultado es", suma)

}
# llamado a la función
funcion()
```


Más recursos. 
=======================================================
type: alert

###  Página web de Unalytics:

<https://unalyticsteam.github.io/unalytics.github.io/>


### Facebook Unalytics.

<https://www.facebook.com/Unalytics-322526711883200/?modal=admin_todo_tour>

